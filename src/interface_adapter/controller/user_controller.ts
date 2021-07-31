import { FindUser } from "@/application/usecase/user";
import { User } from "../../entity/user";
import { FindUserRequset } from "../request/user/FindUserRequest";
import { UserSerializer } from "../serializer/UserSerializer";

export class UserController {
  private userSerializer: UserSerializer;

  constructor() {
    this.userSerializer = new UserSerializer();
  }
  async findUser(req: any) {
    try {
      const reqBody = new FindUserRequset(req.params);
      const result = {
        id: 1,
        name: "a",
        age: 20,
      } as User;
      return this.userSerializer.user(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }
}
