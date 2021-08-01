import { createUser } from "../../application/usecase/user/CreateUser";
import { IUserRepository } from "../../application/repository/user";
import { FindUser, DeleteUser } from "../../application/usecase/user";
import { UserRepositoryImpl } from "../database/Memory/UserRepositoryImpl";
import { CreateUserRequest } from "../request/user/CreateUserRequest";
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

  async create(req: any) {
    try {
      const reqBody = req.body;
      const userParams = new CreateUserRequest(reqBody);
      const useCase = new createUser(this.userRepository);
      const result = await useCase.create(userParams);
      return this.userSerializer.user(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }

  async delete(req: any) {
    try {
      const reqId = Number(req.params.id);
      const useCase = new DeleteUser(this.userRepository);
      const _ = await useCase.deleteUser(reqId);
      return this.userSerializer.delete();
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }
}
