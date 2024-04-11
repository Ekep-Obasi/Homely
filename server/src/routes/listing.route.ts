import express from 'express'
import { AuthMiddleware } from '@/middleware/auth.middleware'
import { ListingController } from '@/controller'

const router = express.Router()

const controller = new ListingController()

router.use(AuthMiddleware)
router.get('/', controller.queryListings.bind(controller))
router.get('/:id', controller.getUniqueListing.bind(controller))
router.post('/', controller.createListing.bind(controller))
router.put('/', controller.editListing.bind(controller))

export { router as PropertyRouter }
