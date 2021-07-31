import moment from "moment";
import {
  StatusCode,
  TException,
  TExceptionCode,
} from "../../constant/ErrorCode";

class ApplicationSerializer {
  public error(error: Error): TResponse<{}> {
    try {
      const err: TException = JSON.parse(error.message);
      return {
        code: err.code,
        errorName: error.name,
        message: err.message,
        responsedAt: moment().format(),
      };
    } catch {
      return {
        code: StatusCode.exception,
        errorName: error.name,
        message: "エラーオブジェクトのパースに失敗しました",
        responsedAt: moment().format(),
      };
    }
  }
}

type TResponse<T> =
  | {
      code: typeof StatusCode.success;
      data: T;
      responsedAt: string;
    }
  | {
      code: TExceptionCode;
      errorName?: string;
      message: string;
      responsedAt: string;
    };

export { ApplicationSerializer, TResponse };
