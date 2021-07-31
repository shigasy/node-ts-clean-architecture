import { FindUser } from "@/application/usecase/user";
import { FindUserRequset } from "../request/user/FindUserRequest";

export class UserController {
  async findUser(req: any) {
    const reqBody = new FindUserRequset(req.params);
    console.log(reqBody);
    return reqBody;
    // console.log(reqBody);
    // console.log(reqBody)
    // const useCase = new FindUser()
  }
}
