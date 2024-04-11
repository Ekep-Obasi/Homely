import bcrypt from 'bcrypt'

/**
 * generates salt and returns it
 * @returns {Promise<string>}
 */

export const GenerateSalt = async (): Promise<string> => await bcrypt.genSalt()

/**
 * hashes user password with generated salt value
 * @param password
 * @param salt
 * @returns {Promise<string>}
 */

export const HashPassord = async (password: string, salt: string): Promise<string> => await bcrypt.hash(password, salt)

/**
 *
 * @param enteredPassword
 * @param savedPassword
 * @param salt
 * @returns {Promise<string>}
 */

export const ValidatePassword = async (enteredPassword: string, savedPassword: string, salt: string): Promise<boolean> =>
  savedPassword === (await HashPassord(enteredPassword, salt))
