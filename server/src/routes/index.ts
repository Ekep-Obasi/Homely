import { Application } from 'express'
import { listingRouter } from './listing.route'
import { userRouter } from './user.route'

export const routesInit = (app: Application) => {
  app.use('/api/v1/user', userRouter)
  app.use('/api/v1/listing', listingRouter)
}
