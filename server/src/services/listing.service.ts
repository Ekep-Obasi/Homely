import { ListingReposity, UserRepository } from '@/repository'
import { CreateListingPayload, ListingQuery } from '../dto/listing.dto'
import { Listing, User } from '@/domains'
import { ServerError } from '@/utils/error'

class ListingService {
  private listingRepo: ListingReposity
  private userRepo: UserRepository

  constructor() {
    this.listingRepo = new ListingReposity()
    this.userRepo = new UserRepository()
  }

  public async createListing(data: CreateListingPayload, ownerRef: string, file: Express.Multer.File[]): Promise<Listing> {
    try {
      const listing = await this.listingRepo.createListing({ ...data, owner_id: ownerRef }, file)

      const listingOwner = await this.userRepo.findUserById(ownerRef)

      if (!listing._id || !listingOwner) {
        throw new ServerError()
      }

      listingOwner.listings.push(listing._id.toString())

      await listingOwner.save()

      return listing
    } catch (error) {
      throw error
    }
  }

  public async getAllListings(): Promise<Listing[]> {
    try {
      return await this.listingRepo.findAllListings()
    } catch (error) {
      throw error
    }
  }

  public async queryListings(query: ListingQuery): Promise<Listing[] | Listing> {
    try {
      return await this.listingRepo.queryListings(query)
    } catch (error) {
      throw error
    }
  }

  public async getListingById(id: string): Promise<Listing | null> {
    try {
      return await this.listingRepo.findListingById(id)
    } catch (error) {
      throw error
    }
  }

  public async deleteListing(id: string) {
    try {
      return await this.listingRepo.deteteListing(id)
    } catch (error) {
      throw error
    }
  }

  public async editListing(data: Partial<CreateListingPayload>, id: string) {
    try {
      await this.listingRepo.updateListing(data, id)

      return this.listingRepo.findListingById(id)
    } catch (error) {
      throw error
    }
  }

  public async getUserListings(id: string): Promise<User | null> {
    try {
      const user = await this.userRepo.findUserWithListings(id)

      return user
    } catch (error) {
      throw error
    }
  }
}

export default ListingService
