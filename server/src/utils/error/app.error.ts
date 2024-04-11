enum ERROR_CODES {
  /** Indicates a conflict error (HTTP status code 409). */
  CONFLICT = 409,
  /** Indicates a bad request error (HTTP status code 400). */
  BAD_REQUEST = 400,
  /** Indicates an unauthorized error (HTTP status code 403). */
  UNAUTHORIZED = 403,
  /** Indicates a not found error (HTTP status code 404). */
  NOT_FOUND = 404,
  /** Indicates an internal server error (HTTP status code 500). */
  INTERNAL_ERROR = 500,
}

type ERROR_TYPE = keyof typeof ERROR_CODES

/**
 * Base error class representing application errors.
 */
abstract class AppError extends Error {
  /**
   * The HTTP status code associated with the error.
   */
  public statusCode: ERROR_CODES
  /**
   * The type of error.
   */
  public errorType: ERROR_TYPE
  /**
   * Indicates whether the error is operational.
   */
  public isOperational: boolean
  /**
   * The stack trace of the error.
   */
  public errorStack: string | undefined
  /**
   * Indicates whether to log the error.
   */
  public logError: boolean

  /**
   * Constructs a new AppError instance.
   * @param {ERROR_CODES} statusCode The HTTP status code of the error.
   * @param {ERROR_TYPE} errorType The type of error.
   * @param {string} description The description of the error.
   * @param {boolean} isOperational Indicates whether the error is operational.
   * @param {string | undefined} errorStack The stack trace of the error.
   * @param {boolean} logError Indicates whether to log the error.
   */
  constructor(
    statusCode: ERROR_CODES,
    errorType: ERROR_TYPE,
    description: string,
    isOperational: boolean,
    errorStack?: string,
    logError: boolean = true,
  ) {
    super(description)
    Object.setPrototypeOf(this, new.target.prototype)
    this.statusCode = statusCode
    this.errorType = errorType
    this.isOperational = isOperational
    this.errorStack = errorStack
    this.logError = logError
  }
}

/**
 * Represents a server error (HTTP status code 500).
 */
class ServerError extends AppError {
  /**
   * Constructs a new ServerError instance.
   * @param {ERROR_CODES} statusCode The HTTP status code of the error.
   * @param {ERROR_TYPE} errorType The type of error.
   * @param {string} description The description of the error.
   * @param {boolean} isOperational Indicates whether the error is operational.
   */
  constructor(
    statusCode: ERROR_CODES = ERROR_CODES.INTERNAL_ERROR,
    errorType: ERROR_TYPE = 'INTERNAL_ERROR',
    description: string = 'Internal Server Error',
    isOperational: boolean = true,
  ) {
    super(statusCode, errorType, description, isOperational)
  }
}

/**
 * Represents a bad request error (HTTP status code 400).
 */
class BadRequestError extends AppError {
  /**
   * Constructs a new BadRequestError instance.
   * @param {string} description The description of the error.
   * @param {boolean} loggingErrorResponse Indicates whether to log the error response.
   */
  constructor(description: string = 'Bad request', loggingErrorResponse: boolean = false) {
    super(ERROR_CODES.BAD_REQUEST, 'BAD_REQUEST', description, true, 'errorStack', loggingErrorResponse)
  }
}

/**
 * Represents a validation error (HTTP status code 400).
 */
class ValidationError extends AppError {
  /**
   * Constructs a new ValidationError instance.
   * @param {string} description The description of the error.
   * @param {string | undefined} errorStack The stack trace of the error.
   */
  constructor(description: string = 'Validation Error', errorStack: string | undefined) {
    super(ERROR_CODES.BAD_REQUEST, 'BAD_REQUEST', description, true, errorStack)
  }
}

export { AppError, ServerError, BadRequestError, ValidationError, ERROR_CODES }
