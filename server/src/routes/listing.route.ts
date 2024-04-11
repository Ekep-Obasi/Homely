import express from 'express'
import { ListingController } from '@/controller'
import { AuthMiddleware, ImageUploadMiddleware, ValidateParamMiddleware } from '@/middleware'

const router = express.Router()

const controller = new ListingController()

router.get('/', controller.QueryListings.bind(controller))
router.post('/', ImageUploadMiddleware.array('image_list'), controller.CreateListing.bind(controller))
router.get('/:id', ValidateParamMiddleware, controller.GetUniqueListing.bind(controller))
router.put('/:id', ValidateParamMiddleware, controller.EditListing.bind(controller))
router.delete('/:id', ValidateParamMiddleware, controller.DeleteListing.bind(controller))

export { router as listingRouter }
