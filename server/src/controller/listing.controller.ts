import { ListingService } from '@/services'

class ListingController {
  private readonly service: ListingController

  constructor() {
    this.service = new ListingController()
  }

  async queryListings() {}
  async getUniqueListing() {}
  async createListing() {}
  async editListing() {}
}

export default ListingController
