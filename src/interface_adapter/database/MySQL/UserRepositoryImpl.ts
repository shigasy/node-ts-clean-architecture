import { User } from "../../../entity/user";
import { IUserRepository } from "../../../application/repository/user";
import { IDBConnection } from "./IDBConnection";
import { TCreateUserDTO } from "../../../application/repository/UserDTO";

export class UserRepositoryImpl implements IUserRepository {
  private connection: IDBConnection;

  constructor(connection: IDBConnection) {
    this.connection = connection;
  }

  public async find(id: number): Promise<User> {
    const queryResult = await this.connection.execute(
      "SELECT * FROM Users WHERE Users.id = ? limit 1",
      id
    );
    return queryResult[0];
  }

  public async findAll(): Promise<User[]> {
    const queryResults: User[] = await this.connection.execute(
      "select * from `Users`"
    );
    return queryResults;
  }

  public async create(user: TCreateUserDTO) {
    const result = await this.connection.execute(
      `INSERT INTO Users (name, age) VALUES (?, ?)`,
      [user.name, user.age]
    );
    return result;
  }

  public async delete(id: number) {
    await this.connection.execute("delete from Users where id = ?", id);
    return null;
  }
}
