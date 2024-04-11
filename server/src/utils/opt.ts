export function GenerateOTP() {
  const opt = 100000 + Math.floor(Math.random() * 900000)

  const expiry = new Date()

  expiry.setTime(new Date().getTime() + 30 * 60 * 1000)

  return { opt, expiry }
}
