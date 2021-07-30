import { User } from "@/entity/User";

class FindUser {
  public getUser(id: number): Promise<User> {
    return new Promise(() => {});
  }
}
