import bcrypt from 'bcrypt';

// Generate Salt
export const GenerateSalt = async () => await bcrypt.genSalt();

// Hash Password with Generated Salt
export const HashPassord = async (password: string, salt: string) => await bcrypt.hash(password, salt);

// Validate the password
export const ValidatePassword = async (enteredPassword: string, savedPassword: string, salt: string): Promise<boolean> => savedPassword === await HashPassord(enteredPassword, salt);