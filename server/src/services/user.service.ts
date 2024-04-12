import { User } from '@/domains'
import { UserRepository } from '@/repository'

class UserService {
  private repo: UserRepository

  constructor() {
    this.repo = new UserRepository()
  }

  public async editProfile(update: Partial<User>, id: string) {
    return this.repo.updateUser(update, id)
  }

  public async getAllUsers() {
    return await this.repo.findAllUsers()
  }

  public async getCurrentUser(id: string) {
    return await this.repo.findUserById(id)
  }

  public async deleteAccount(id: string) {
    return await this.repo.deleteUser(id)
  }
}

export default UserService
