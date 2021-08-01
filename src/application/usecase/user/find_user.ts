import { User } from "../../../entity/user";
import { IUserRepository } from "../../repository/user";

export class FindUser {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public getUser(id: number): Promise<User | null> {
    return this.userRepository.find(id);
  }

  public getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
