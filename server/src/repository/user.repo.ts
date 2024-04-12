import { User } from '@/domains'
import { UserModel } from '@/models'

class UserRepository {
  private model: typeof UserModel

  constructor() {
    this.model = UserModel
  }

  public async createUser(data: Partial<User>): Promise<User> {
    return await this.model.create(data)
  }

  public async findAllUsers(): Promise<User[]> {
    return await this.model.find()
  }

  public async findUserById(id: string) {
    return await this.model.findById(id)
  }

  public async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.model.find({ email })

    return user[0]?.toObject()
  }

  public async updateUser(update: Partial<User>, id: string): Promise<User | null> {
    await this.model.findByIdAndUpdate(id, update)

    return await this.findUserById(id)
  }

  public async findUserWithListings(id: string) {
    return await this.model.findById(id).populate('listings')
  }

  public async deleteUser(id: string) {
    return await this.model.deleteOne({ _id: id })
  }
}

export default UserRepository
