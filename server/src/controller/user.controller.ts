import { CreateUserPayload, EditListingPayload, LoginUserPayload } from '@/dto'
import { AuthService, UserService } from '@/services'
import { ValidatePayload } from '@/utils'
import { ErrorResponse, SuccessResponse, formatResponse } from '@/utils/response'
import { NextFunction, Request, Response } from 'express'

class UserController {
  private authService: AuthService
  private userService: UserService

  constructor() {
    this.authService = new AuthService()
    this.userService = new UserService()
  }

  public async SignupUser(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = <CreateUserPayload>req.body

      const errors = await ValidatePayload(CreateUserPayload, payload)

      if (errors.length) {
        return res.send(ErrorResponse(401, errors))
      }

      const user = await this.authService.signupUser(payload)

      return res.send(SuccessResponse(user))
    } catch (error) {
      next(error)
    }
  }
  public async LoginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = <LoginUserPayload>req.body

      const errors = await ValidatePayload(LoginUserPayload, payload)

      if (errors.length) {
        return res.send(ErrorResponse(401, errors))
      }

      const { user, token } = await this.authService.loginUser(payload)

      const { password, ...rest } = user

      res.cookie('access_token', token, { httpOnly: true })

      return res.send(SuccessResponse({ ...rest }))
    } catch (error) {
      next(error)
    }
  }

  public async LogoutUser(req: Request, res: Response, next: NextFunction) {
    try {
      res.clearCookie('access_token')
      
      return res.send(formatResponse(200, 'User has been logged out!', null))
    } catch (error) {
      next(error)
    }
  }

  public async EditProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const payload = <EditListingPayload>req.body
      const errors = await ValidatePayload(EditListingPayload, payload)

      // TODO
      if (!errors.length) {
        return res.send(ErrorResponse(401, errors))
      }

      const user = await this.userService.editProfile(payload, id)

      if (!user) {
        return res.send(ErrorResponse(404, 'user not found!'))
      }

      return res.send(SuccessResponse(user))
    } catch (error) {
      next(error)
    }
  }

  public async GetAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.userService.getAllUsers()

      return res.send(SuccessResponse(users))
    } catch (error) {
      next(error)
    }
  }

  public async GetCurrentUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params

      const user = await this.userService.getCurrentUser(id)

      if (!user) {
        return res.send(ErrorResponse(404, 'user not found!'))
      }

      return res.send(SuccessResponse(user))
    } catch (error) {
      next(error)
    }
  }

  public async DeleteAccount(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params

      await this.userService.deleteAccount(id)

      res.clearCookie('access_token')

      return res.send(formatResponse(200, 'account deleted successful', null))
    } catch (error) {
      next(error)
    }
  }
}

export default UserController
