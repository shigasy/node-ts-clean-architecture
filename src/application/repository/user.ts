import { User } from "../../entity/user";
import { TCreateUserDTO } from "./UserDTO";

export abstract class IUserRepository {
  abstract findAll(): Promise<Array<User>>;
  abstract find(id: number): Promise<User | null>;
  abstract create(user: TCreateUserDTO): Promise<User>;
  abstract delete(id: number): Promise<null>;
}
// export interface IUserRepository {
//   findAll(): Promise<Array<User>>;
//   find(id: number): Promise<User | null>;
//   create(user: TCreateUserDTO): Promise<User>;
//   delete(id: number): Promise<null>;
// }
