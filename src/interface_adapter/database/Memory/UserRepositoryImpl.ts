import { StatusCode } from "../../../constant/ErrorCode";
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
    // asyncをつけると関数は常にpromiseを返す
    // return <非 promise>がある場合、JavaScriptは自動的にその値を持つ解決されたpromiseにラップする
    return DB.users;
  }

  async find(id: number): Promise<User | null> {
    const queryResult = DB.users.find((user) => user.id === id);
    return queryResult || null;
  }

  async delete(id: number): Promise<null> {
    const targetIndex = DB.users.findIndex((user) => user.id === id);
    if (targetIndex === -1) {
      throw new Error(
        JSON.stringify({
          code: StatusCode.exception,
          message: "削除対象ユーザーが存在しません",
        })
      );
    }
    DB.users = DB.users.filter((_, i) => i !== targetIndex);
    return null;
  }
}
