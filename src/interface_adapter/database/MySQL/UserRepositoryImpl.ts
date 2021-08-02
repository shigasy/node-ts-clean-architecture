import { User } from "../../../entity/user";
import { IUserRepository } from "../../../application/repository/user";
import { IDBConnection } from "./IDBConnection";

export class UserRepositoryImpl extends IUserRepository {
  private connection: IDBConnection;

  constructor(connection: IDBConnection) {
    super();
    this.connection = connection;
  }

  public async find(id: number): Promise<User> {
    return {} as User;
  }

  public async findAll(): Promise<User[]> {
    console.log(this.connection);
    return [{}] as User[];
  }

  public async create() {
    return {} as User;
  }

  public async delete() {
    return null;
  }
}
