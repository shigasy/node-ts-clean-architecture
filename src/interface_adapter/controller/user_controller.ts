import { IUserRepository } from "../../application/repository/user";
import { FindUser } from "../../application/usecase/user";
import { User } from "../../entity/user";
import { UserRepositoryImpl } from "../database/Memory/UserRepositoryImpl";
import { FindUserRequest } from "../request/user/FindUserRequest";
import { UserSerializer } from "../serializer/UserSerializer";

export class UserController {
  private userSerializer: UserSerializer;
  private userRepository: IUserRepository;

  constructor() {
    this.userSerializer = new UserSerializer();
    this.userRepository = new UserRepositoryImpl();
  }

  async index() {
    try {
      const useCase = await new FindUser(this.userRepository);
      const result = await useCase.getAllUsers();
      return this.userSerializer.users(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }

  async findUser(req: any) {
    try {
      const reqBody = new FindUserRequest(req.params);
      const result = await new FindUser(this.userRepository).getUser(
        reqBody.id
      );
      return this.userSerializer.user(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }
}
