import { IUserRepository } from "../../application/repository/user";
import { FindUser } from "../../application/usecase/user";
import { User } from "../../entity/user";
import { UserRepositoryImpl } from "../database/Memory/UserRepositoryImpl";
import { FindUserRequset } from "../request/user/FindUserRequest";
import { UserSerializer } from "../serializer/UserSerializer";

export class UserController {
  private userSerializer: UserSerializer;
  private userRepository: IUserRepository;

  constructor() {
    this.userSerializer = new UserSerializer();
    this.userRepository = new UserRepositoryImpl();
  }

  async findUser(req: any) {
    try {
      const reqBody = new FindUserRequset(req.params);
      const result = await new FindUser(this.userRepository).getUser(
        reqBody.id
      );
      return this.userSerializer.user(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }
}
