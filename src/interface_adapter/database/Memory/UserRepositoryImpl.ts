import { IUserRepository } from "../../../application/repository/user";
import { User } from "../../../entity/user";
import { DB } from "./MemoryDatabase";

export class UserRepositoryImpl extends IUserRepository {
  constructor() {
    super();

    const user1 = new User(1, "sample", 3);
    const user2 = new User(2, "sample2", 20);
    DB.users = [user1, user2];
  }

  async findAll(): Promise<User[]> {
    return DB.users;
  }

  async find(id: number): Promise<User> {
    // return new Promise((resolve) => {
    // resolve(DB.users[id]);
    // });

    // asyncをつけると関数は常にpromiseを返す
    // return <非 promise>がある場合、JavaScriptは自動的にその値を持つ解決されたpromiseにラップする
    return DB.users[id];
  }

  async delete(id: number): Promise<null> {
    return null;
  }
}
