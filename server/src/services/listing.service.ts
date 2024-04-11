import { NextFunction, Request, Response } from 'express'
import ListingReposity from '@/repository/listing.repo'
import { CreateListingPayload } from '../dto/listing.dto'

class ListingService {
  repo: ListingReposity

  constructor() {
    this.repo = new ListingReposity()
  }

  public async createListing(req: Request, res: Response, next: NextFunction) {
    const requestBody = <CreateListingPayload>req.body

    try {
      const listing = await this.repo.createListing({ ...requestBody, owner_id: req.user?.id })

      return listing
    } catch {
      next(new Error(''))
    }
  }

  public async getAllListings(req: Request, res: Response, next: NextFunction) {}

  public async getListingById(req: Request, res: Response, next: NextFunction) {
    try {
      return await this.repo.findListingById(req.params.id)
    } catch {
      next(new Error(''))
    }
  }
}

export default ListingService
