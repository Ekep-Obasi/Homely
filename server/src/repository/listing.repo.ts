import { FilterQuery } from 'mongoose'
import { ListingModel } from '@/models'
import { CreateListingPayload, ListingQuery } from '@/dto'
import { Listing } from '@/domains'
import { bucket } from '@/config/firebase.config'
import { ServerError } from '@/utils/error'

class ListingReposity {
  private model: typeof ListingModel

  constructor() {
    this.model = ListingModel
  }

  public async createListing(
    data: CreateListingPayload & { owner_id: string },
    files: Express.Multer.File[],
  ): Promise<Listing> {
    const image_list = await this.uploadListingImage(files, data.owner_id)

    return await this.model.create({ ...data, image_list })
  }

  public async findListingById(id: string): Promise<Listing | null> {
    return await this.model.findById(id).populate("owner_id")
  }

  public async findAllListings() {
    return await this.model.find()
  }

  public async queryListings(query: FilterQuery<ListingQuery>): Promise<Listing | Listing[]> {
    let listings

    const dbQueries = this.buildListingQueries(query)

    listings = await this.model.find(dbQueries)

    if (Array.isArray(listings)) {
      listings = this.sortListings(listings, query.sortBy)
      listings = this.limitListings(listings, query.limit)
    }

    return listings
  }

  public async deteteListing(id: string) {
    return await this.model.deleteOne({ _id: id })
  }

  public async updateListing(data: Partial<CreateListingPayload>, id: string): Promise<Listing | null> {
    return await this.model.findByIdAndUpdate(id, data)
  }

  private async uploadListingImage(files: Express.Multer.File[], storageRef: string): Promise<string[]> {
    try {
      const promises = files.map(async (file) => {
        const tempFilePath = `listings/${storageRef}/${file.originalname}`
        const tempFile = bucket.file(tempFilePath)
        await tempFile.save(file.buffer)

        await tempFile.makePublic()

        const downloadLink = `https://storage.googleapis.com/${bucket.name}/${tempFilePath}`
        return downloadLink
      })

      return Promise.all(promises).then((res) => res)
    } catch {
      throw new ServerError(500, 'INTERNAL_ERROR', 'failed to upload image')
    }
  }

  private buildListingQueries(queries: ListingQuery): FilterQuery<ListingQuery> {
    const { type, quality, search } = queries
    const dbQueries: FilterQuery<ListingQuery> = {}

    if (type) dbQueries.type = type
    if (quality) dbQueries.quality = quality
    if (search) {
      dbQueries.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } },
      ]
    }

    return dbQueries
  }

  private sortListings(listings: Listing[], sortBy: string): Listing[] {
    if (!Array.isArray(listings) || !sortBy) return listings

    return listings.sort((a, b) => {
      const createdAtA = new Date(a.createdAt).getTime()
      const createdAtB = new Date(b.createdAt).getTime()
      return sortBy === 'asc' ? createdAtA - createdAtB : createdAtB - createdAtA
    })
  }

  private limitListings(listings: Listing[], limit: number): Listing[] {
    if (!Array.isArray(listings) || !limit) return listings

    return listings.slice(0, limit)
  }
}

export default ListingReposity
