import { CreateListingPayload, EditListingPayload, ListingQuery } from '@/dto'
import { ListingService } from '@/services'
import { ValidatePayload } from '@/utils'
import { ErrorResponse, SuccessResponse, formatResponse } from '@/utils/response'
import { Request, NextFunction, Response } from 'express'
import { FilterQuery } from 'mongoose'

class ListingController {
  private readonly service: ListingService

  constructor() {
    this.service = new ListingService()
  }

  async QueryListings(req: Request, res: Response, next: NextFunction) {
    try {
      const queries = <ListingQuery>req.query

      if (!queries) {
        const listings = await this.service.getAllListings()

        return res.send(SuccessResponse(listings))
      }

      let listings = await this.service.queryListings(queries)

      return res.send(SuccessResponse(listings))
    } catch (err) {
      next(err)
    }
  }

  async GetUniqueListing(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id

      const listing = await this.service.getListingById(id)

      if (!listing) return res.send(formatResponse(404, `listing not found!`, listing))

      res.send(SuccessResponse(listing))
    } catch (err) {
      next(err)
    }
  }

  async CreateListing(req: Request, res: Response, next: NextFunction) {
    try {
      const requestPayload = <CreateListingPayload>req.body
      const ownerRef = req.user?.id
      const file = req.files as Express.Multer.File[]

      const errors = await ValidatePayload(CreateListingPayload, requestPayload)

      // TODO: enable validation
      // I've disable validation bcs formdata apparently
      // does not care about feild types
      if (!errors.length) {
        return res.send(ErrorResponse(400, errors))
      }

      const listing = await this.service.createListing(requestPayload, ownerRef ?? '6617c23006bbf679694fd6d8', file)

      return res.send(SuccessResponse(listing))
    } catch (err) {
      next(err)
    }
  }
  async EditListing(req: Request, res: Response, next: NextFunction) {
    try {
      const requestPayload = <EditListingPayload>req.body
      const listingId = req.params.id

      const errors = await ValidatePayload(EditListingPayload, requestPayload)

      // TODO: re-enable validation and make sure
      // it works properly
      if (!errors.length) {
        return res.send(ErrorResponse(400, errors))
      }

      const listing = await this.service.editListing(requestPayload, listingId)

      if (!listing) return res.send(ErrorResponse(404, 'listing not found!'))

      return res.send(SuccessResponse(listing))
    } catch (err) {
      next(err)
    }
  }

  async DeleteListing(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id

      await this.service.deleteListing(id)

      return res.send(SuccessResponse({}))
    } catch (err) {
      next(err)
    }
  }
}

export default ListingController
