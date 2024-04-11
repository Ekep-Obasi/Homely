import express from 'express'
import { CreateProperty, GetAllProperties, GetPropertyByID, PostPropertyReview } from '../services/PropertyController'
import { AuthMiddleware, propertyImageListMiddleWare } from '../helpers/middleware'

const router = express.Router()

router.use(AuthMiddleware)
router.get('/', GetAllProperties)
router.get('/:id', GetPropertyByID)
router.post('/', propertyImageListMiddleWare, CreateProperty)
router.post('/post/:id', PostPropertyReview)

export { router as PropertyRouter }
