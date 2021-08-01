import { IUserRepository } from "../../repository/user";

export class DeleteUser {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public deleteUser(id: number): Promise<null> {
    return this.userRepository.delete(id);
  }
}
