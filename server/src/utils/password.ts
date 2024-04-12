import bcrypt from 'bcrypt'

/**
 * Generates a salt using bcrypt.
 * @returns {Promise<string>} A promise that resolves to a generated salt value.
 */
export const GenerateSalt = async (): Promise<string> => await bcrypt.genSalt()

/**
 * Hashes the user password using bcrypt with the provided salt value.
 * @param {string} password The password to hash.
 * @param {string} salt The salt value used for hashing.
 * @returns {Promise<string>} A promise that resolves to the hashed password.
 */
export const HashPassword = async (password: string, salt: string): Promise<string> => await bcrypt.hash(password, salt)

/**
 * Validates the entered password by hashing it with the provided salt and comparing it to the saved password.
 * @param {string} enteredPassword The password entered by the user.
 * @param {string} savedPassword The saved hashed password.
 * @param {string} salt The salt value used for hashing.
 * @returns {Promise<boolean>} A promise that resolves to true if the entered password matches the saved password; otherwise, false.
 */
export const VerifyPassword = async (enteredPassword: string, savedPassword: string, salt: string): Promise<boolean> =>
  savedPassword === (await HashPassword(enteredPassword, salt))
