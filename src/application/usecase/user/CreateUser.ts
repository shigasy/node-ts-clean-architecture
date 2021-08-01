import { IUserRepository } from "../../../application/repository/user";
import { TCreateUserDTO } from "../../../application/repository/UserDTO";
import { User } from "../../../entity/user";

export class createUser {
  private userRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  // usecaseがDTOについて知っているのは、この型で型で引数欲しいとinterfaceで宣言しているからなのか
  public create(user: TCreateUserDTO): Promise<User> {
    return this.userRepository.create(user);
  }
}
