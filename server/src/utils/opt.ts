/**
 * Generates a random OTP (One-Time Password) and its expiry time.
 * @returns {object} An object containing the generated OTP and its expiry time.
 *                   - otp: The generated OTP (6-digit number).
 *                   - expiry: The expiry time of the OTP (30 minutes from the current time).
 */
export function GenerateOTP() {
  const otp = 100000 + Math.floor(Math.random() * 900000)

  const expiry = new Date()
  expiry.setTime(new Date().getTime() + 30 * 60 * 1000)

  return { otp, expiry }
}
