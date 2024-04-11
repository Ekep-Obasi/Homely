export const formatResponse = (statusCode: number, message: string, data: unknown) => {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      message,
      ...(data ? { data } : {}),
    }),
  }
}

export const SuccessResponse = (data: object) => {
  return formatResponse(200, 'success', data)
}

export const ErrorResponse = (code = 1000, error: unknown) => {
  if (Array.isArray(error)) {
    const errorObject = error[0].constraints
    const errorMessage = errorObject[Object.keys(errorObject)[0]] || 'Error Occured'

    return formatResponse(code, errorMessage, null)
  }

  return formatResponse(code, `${error}`, null)
}
