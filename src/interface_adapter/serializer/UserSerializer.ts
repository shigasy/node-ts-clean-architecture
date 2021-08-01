import { StatusCode } from "../../constant/ErrorCode";
import moment from "moment";
import { User } from "../../entity/user";
import { ApplicationSerializer, TResponse } from "./ApplicationSerializer";

export type UserResponse = {
  id: number;
  name: string;
  age: number;
};

export class UserSerializer extends ApplicationSerializer {
  public user(data: User | null): TResponse<UserResponse> {
    if (!data) {
      return {
        code: StatusCode.exception,
        message: "dataがありません",
        responsedAt: moment().format(),
      };
    }
    return {
      code: StatusCode.success,
      data: {
        id: data.id,
        name: data.name,
        age: data.age,
      },
      responsedAt: moment().format(),
    };
  }

  public users(data: User[]): TResponse<UserResponse[]> {
    if (!data) {
      return {
        code: StatusCode.exception,
        message: "data is null",
        responsedAt: moment().format(),
      };
    }
    return {
      code: StatusCode.success,
      data: data.map((d): UserResponse => {
        return {
          id: d.id,
          name: d.name,
          age: d.age,
        };
      }),
      responsedAt: moment().format(),
    };
  }

  public delete(): TResponse<Record<string, null>> {
    return {
      code: StatusCode.success,
      data: {},
      responsedAt: moment().format(),
    };
  }
}
