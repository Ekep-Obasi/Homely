import express from 'express'
import { ListingController } from '@/controller'
import { AuthMiddleware, ImageUploadMiddleware, ValidateParamMiddleware } from '@/middleware'

const router = express.Router()

const controller = new ListingController()

router.get('/', controller.QueryListings.bind(controller))
router.get('/:id', ValidateParamMiddleware, controller.GetUniqueListing.bind(controller))
router.get('/owner/:id', ValidateParamMiddleware, controller.GetUserListings.bind(controller))

router.post('/', AuthMiddleware, ImageUploadMiddleware.array('image_list'), controller.CreateListing.bind(controller))
router.delete('/:id', AuthMiddleware, ValidateParamMiddleware, controller.DeleteListing.bind(controller))
router.put('/:id', AuthMiddleware, ValidateParamMiddleware, controller.EditListing.bind(controller))

export { router as listingRouter }
