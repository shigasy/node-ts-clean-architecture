import { StatusCode } from "../../../constant/ErrorCode";

type Params = {
  name: string;
  age: number;
};

export class CreateUserRequest {
  private _name: string;
  private _age: number;

  public get name(): string {
    return this._name;
  }

  public get age(): number {
    return this._age;
  }

  constructor(params: Params) {
    this.validRequest(params);
    this._name = params.name;
    this._age = params.age;
  }

  private validRequest(params: Params) {
    if (params.name.length < 4) {
      throw new Error(
        JSON.stringify({
          code: StatusCode.invalid,
          message: "4文字以上の名前",
        })
      );
    }
    if (params.age < 12) {
      throw new Error(
        JSON.stringify({
          code: StatusCode.invalid,
          message: "登録は12歳になってから",
        })
      );
    }
    return params;
  }
}
