/**
 * Formats the HTTP response object with the provided status code, message, and data.
 * @param {number} statusCode The HTTP status code.
 * @param {string} message The message to include in the response.
 * @param {unknown} data The data to include in the response.
 * @returns {object} The formatted HTTP response object.
 */
export const formatResponse = (statusCode: number, message: string, data: unknown): object => {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: {
      message,
      ...(data ? { data } : {}),
      ...(Array.isArray(data) ? { count: data.length } : {}),
    },
  }
}

/**
 * Generates a success response with the provided data.
 * @param {object} data The data to include in the success response.
 * @returns {object} The formatted success response object.
 */
export const SuccessResponse = (data: object): object => {
  return formatResponse(200, 'operation successful!', data)
}

/**
 * Generates an error response with the provided error code and message.
 * @param {number} code The error code.
 * @param {unknown} error The error object or message.
 * @returns {object} The formatted error response object.
 */
export const ErrorResponse = (code: number, error: unknown): object => {
  if (Array.isArray(error)) {
    return {
      statusCode: code,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: {
        message: 'an error ocurred',
        error,
      },
    }
  }

  return formatResponse(code, `${error}`, null)
}
