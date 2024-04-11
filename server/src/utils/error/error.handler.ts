import winston, { transports } from 'winston'
import { AppError } from './app.error'
import { Request, Response, NextFunction } from 'express'
import { ErrorResponse } from '../response'

const LogErrors = winston.createLogger({
  transports: [new transports.File({ filename: 'app.error.log' })],
})

/**
 * Error Logger class for logging application errors.
 */
class ErrorLogger {
  /**
   * Logs the given error to the error log file.
   * @param {Error} err The error to log.
   * @returns {Promise<boolean>} A promise that resolves to true if the error is logged successfully; otherwise, false.
   */
  async logError(err: Error): Promise<boolean> {
    LogErrors.log({
      private: true,
      level: 'error',
      message: `${new Date()}-${JSON.stringify(err)}`,
    })
    return false
  }

  /**
   * Checks if the given error is an instance of AppError.
   * @param {Error} error The error to check.
   * @returns {boolean} True if the error is an instance of AppError; otherwise, false.
   */
  isAppError(error: Error): boolean {
    return error instanceof AppError
  }
}

/**
 * Error handler middleware for Express.
 * @param {AppError} err The error object.
 * @param {Request} req The Express request object.
 * @param {Response} res The Express response object.
 * @param {NextFunction} next The Express next function.
 */
const ErrorHandler = async (err: AppError, req: Request, res: Response, next: NextFunction) => {
  const errorLogger = new ErrorLogger()

  process.on('uncaughtException', (reason: Error, promise: Promise<any>) => {
    console.error(reason, 'UNHANDLED')
    throw reason
  })

  process.on('uncaughtException', (error: Error) => {
    errorLogger.logError(error)
    if (errorLogger.isAppError(err)) {
      // Do something with AppError
    }
  })

  await errorLogger.logError(err)
  if (errorLogger.isAppError(err)) {
    if (err.stack && process.env.NODE_DEV === 'dev') {
      return res.send(ErrorResponse(err.statusCode, err.stack))
    }
    return res.send(ErrorResponse(err.statusCode, err.message))
  }

  next()
  return res.send(ErrorResponse(500, err.message))
}

export default ErrorHandler
