import { validate } from 'class-validator'
import { ClassConstructor, plainToClass } from 'class-transformer'

/**
 * Validates the payload object using class-validator.
 * @template T - The type of the payload object.
 * @param {ClassConstructor<object>} dto - The class constructor function of the DTO class.
 * @param {T} payload - The payload object to validate.
 * @returns {Promise<string[]>} A promise that resolves to an array of validation error messages.
 */
export async function ValidatePayload<T>(dto: ClassConstructor<object>, payload: T): Promise<unknown[]> {
  const errors: unknown[] = [{}]

  // Transform the payload into a class instance
  const dtoInstance = plainToClass(dto, payload) as object

  // Validate the DTO instance
  const validationErrors = await validate(dtoInstance)

  // Extract validation errors
  if (validationErrors.length) {
    for (const error of validationErrors) {
      for (const constraint in error.constraints) {
        errors.push({ [error.property]: error.constraints[constraint] })
      }
    }
  }

  return errors.filter((error) => Object.keys(error as object).length !== 0)
}
