import { CreateListingPayload, EditListingPayload, ListingQuery } from '@/dto'
import { ListingService } from '@/services'
import { ValidatePayload } from '@/utils'
import { ErrorResponse, SuccessResponse, formatResponse } from '@/utils/response'
import { Request, NextFunction, Response } from 'express'

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
    } catch (error) {
      next(error)
    }
  }

  async GetUniqueListing(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id

      const listing = await this.service.getListingById(id)

      if (!listing) return res.send(formatResponse(404, `listing not found!`, listing))

      return res.send(SuccessResponse(listing))
    } catch (error) {
      next(error)
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
      if (!errors.length || !ownerRef) {
        return res.send(ErrorResponse(400, errors))
      }

      const listing = await this.service.createListing(requestPayload, ownerRef, file)

      return res.send(SuccessResponse(listing))
    } catch (error) {
      next(error)
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
    } catch (error) {
      next(error)
    }
  }

  public async GetUserListings(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id

      const listings = await this.service.getUserListings(id)

      if (!listings) {
        return res.send(SuccessResponse([]))
      }

      return res.send(SuccessResponse(listings?.listings))
    } catch (error) {
      next(error)
    }
  }

  async DeleteListing(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id

      await this.service.deleteListing(id)

      return res.send(SuccessResponse({}))
    } catch (error) {
      next(error)
    }
  }
}

export default ListingController
