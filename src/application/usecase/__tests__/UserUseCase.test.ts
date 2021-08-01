import { User } from "../../../entity/user";
import { UserRepositoryImpl } from "../../../interface_adapter/database/Memory/UserRepositoryImpl";
import { DeleteUser, FindUser } from "../user";
import { createUser } from "../user/CreateUser";

jest.mock("../../../interface_adapter/database/Memory/UserRepositoryImpl");

const repository = new UserRepositoryImpl();

describe("UserUserCase", () => {
  describe("CreateUser", () => {
    const usecase = new createUser(repository);
    test("constructorが動作する", () => {
      expect(usecase).toBeTruthy();
    });
    test("createが呼ばれる", () => {
      const user = { name: "aaaa", age: 12 };
      usecase.create(user);
      expect(repository.create).toHaveBeenCalled();
    });
  });
  describe("DeleteUser", () => {
    const usecase = new DeleteUser(repository);
    test("constructorが動作する", () => {
      expect(usecase).toBeTruthy();
    });

    test("deleteが呼ばれる", () => {
      usecase.deleteUser(1);
      expect(repository.delete).toHaveBeenCalled();
    });
  });
  describe("FindUser", () => {
    const usecase = new FindUser(repository);

    test("constructorが動作する", () => {
      expect(usecase).toBeTruthy();
    });

    test("findが呼ばれる", () => {
      usecase.getUser(1);
      expect(repository.find).toHaveBeenCalled();
    });

    test("findAllが呼ばれる", () => {
      usecase.getAllUsers();
      expect(repository.findAll).toHaveBeenCalled();
    });
  });
});
