import { User } from "../../entity/user";
import { TCreateUserDTO } from "./userDTO";

export abstract class IUserRepository {
  abstract findAll(): Promise<Array<User>>;
  abstract find(id: number): Promise<User | null>;
  abstract create(user: TCreateUserDTO): Promise<User>;
  abstract delete(id: number): Promise<null>;
}
