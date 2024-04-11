import { FilterQuery } from 'mongoose'
import { Listing } from '@/models'
import { CreateListingPayload } from '@/dto'

class ListingReposity {
  model: typeof Listing

  constructor() {
    this.model = Listing
  }

  async createListing(data: CreateListingPayload & { owner_id: string | undefined }) {
    return await this.model.create(data)
  }

  async findListingById(id: string) {
    return await this.model.findById(id)
  }

  async findAllListings() {
    return await this.model.find()
  }

  async queryListings(query: FilterQuery<any>) {
    return await this.model.find(query)
  }
}

export default ListingReposity
