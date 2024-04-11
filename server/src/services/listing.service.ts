import ListingReposity from '@/repository/listing.repo'
import { CreateListingPayload, ListingQuery } from '../dto/listing.dto'
import { ServerError } from '@/utils/error'
import { Listing } from '@/domains'

class ListingService {
  private repo: ListingReposity

  constructor() {
    this.repo = new ListingReposity()
  }

  public async createListing(data: CreateListingPayload, ownerRef: string, file: Express.Multer.File[]): Promise<Listing> {
    try {
      return await this.repo.createListing({ ...data, owner_id: ownerRef }, file)
    } catch (err) {
      console.log(err)
      throw new ServerError()
    }
  }

  public async getAllListings(): Promise<Listing[]> {
    try {
      return await this.repo.findAllListings()
    } catch {
      throw new ServerError()
    }
  }

  public async queryListings(query: ListingQuery): Promise<Listing[] | Listing> {
    try {
      return await this.repo.queryListings(query)
    } catch {
      throw new ServerError()
    }
  }

  public async getListingById(id: string): Promise<Listing | null> {
    try {
      return await this.repo.findListingById(id)
    } catch {
      throw new ServerError()
    }
  }

  public async deleteListing(id: string) {
    try {
      return await this.repo.deteteListing(id)
    } catch (err) {
      throw new ServerError(500, 'INTERNAL_ERROR', `${err}`)
    }
  }

  public async editListing(data: Partial<CreateListingPayload>, id: string) {
    try {
      await this.repo.updateListing(data, id)

      return this.repo.findListingById(id)
    } catch (err) {
      throw new ServerError(500, 'INTERNAL_ERROR', `${err}`)
    }
  }
}

export default ListingService
