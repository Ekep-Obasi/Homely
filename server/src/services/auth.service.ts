import { User } from '@/domains'
import { CreateUserPayload, LoginUserPayload } from '@/dto'
import { UserRepository } from '@/repository'
import { GenerateSalt, HashPassword, SignAuthToken, VerifyPassword } from '@/utils'
import { ServerError } from '@/utils/error'

class AuthService {
  private repo: UserRepository

  constructor() {
    this.repo = new UserRepository()
  }

  public async signupUser(data: CreateUserPayload) {
    try {
      const ex_usr = await this.repo.findUserByEmail(data.email)

      if (ex_usr) {
        throw new ServerError(409, 'CONFLICT', 'user already existing in the database')
      }

      const salt = await GenerateSalt()

      const hashedPassword = await HashPassword(data.password, salt)

      const user = await this.repo.createUser({ ...data, password: hashedPassword, salt })

      return user
    } catch (error) {
      throw error
    }
  }

  public async loginUser(data: LoginUserPayload): Promise<{
    user: User
    token: string
  }> {
    try {
      const user = await this.repo.findUserByEmail(data.email)

      if (!user) {
        throw new ServerError(404, 'NOT_FOUND', 'user not found! sign up instead')
      }

      const isVerfied = await VerifyPassword(data.password, user.password, user.salt)

      if (!isVerfied) {
        throw new ServerError(403, 'UNAUTHORIZED', 'access forbidden!')
      }

      const token = SignAuthToken({
        id: user._id?.toString(),
        email: user.email,
      })

      return { user, token }
    } catch (error) {
      throw error
    }
  }
}

export default AuthService
