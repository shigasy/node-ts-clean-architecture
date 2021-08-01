import { User } from "../../entity/user";

export abstract class IUserRepository {
  abstract findAll(): Promise<Array<User>>;
  abstract find(id: number): Promise<User | null>;
  abstract delete(id: number): Promise<null>;
}
