import { UserController } from '@/controller'
import { AuthMiddleware, ValidateParamMiddleware } from '@/middleware'
import express, { Router } from 'express'

const router: Router = express.Router()

const controller = new UserController()

router.get('/all', controller.GetAllUsers.bind(controller))
router.get('/:id', ValidateParamMiddleware, controller.GetCurrentUser.bind(controller))
router.post('/login', controller.LoginUser.bind(controller))
router.post('/signup', controller.SignupUser.bind(controller))
router.post('/logout', controller.LogoutUser.bind(controller))

router.put('/:id', AuthMiddleware, ValidateParamMiddleware, controller.EditProfile.bind(controller))
router.delete('/:id', AuthMiddleware, ValidateParamMiddleware, controller.DeleteAccount.bind(controller))

export { router as userRouter }
