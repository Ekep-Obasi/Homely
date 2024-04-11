import { Application } from 'express'
import { listingRouter } from './listing.route'

export const routesInit = (app: Application) => {
  // app.use('/api/v1/user', UserRouter)
  app.use('/api/v1/listing', listingRouter)
}
