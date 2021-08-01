import { User } from "../../../../entity/user";
import { DB } from "../MemoryDatabase";
import { UserRepositoryImpl } from "../UserRepositoryImpl";

const userObj = () => {
  return [new User(1, "sample", 3), new User(2, "sample2", 20)];
};

const createUserObj = new User(3, "sample3", 3);

const setupDB = (user1: User, user2: User) => {
  DB.users = [user1, user2];
};

const cleanDB = () => {
  DB.users = [];
  DB.posts = [];
};

describe("databse_memory", () => {
  describe("User", () => {
    let userRepositoryImpl = new UserRepositoryImpl();

    beforeEach(() => {
      cleanDB();
      setupDB(userObj()[0], userObj()[1]);
      userRepositoryImpl = new UserRepositoryImpl();
    });
    test("constructorが作られる", () => {
      expect(userRepositoryImpl).toBeTruthy();
    });
    test("findAllでUser全員が返る", async () => {
      const queryResult = await userRepositoryImpl.findAll();
      expect(queryResult).toBe(DB.users);
    });
    test("findで該当するUserが返る", async () => {
      const queryResult = await userRepositoryImpl.find(1);
      expect(queryResult).toStrictEqual(userObj()[0]);
    });
    test("findで見つからない場合nullが返る", async () => {
      const queryResult = await userRepositoryImpl.find(1000);
      expect(queryResult).toBe(null);
    });
    test("createでUserがcreateされ、該当するUserが返る", async () => {
      const { name, age } = createUserObj;
      const userDTO = { name, age };
      const queryResult = await userRepositoryImpl.create(userDTO);
      expect(DB.users.length).toBe(3);
      expect(queryResult).toStrictEqual(createUserObj);
    });
    test("deleteで該当するUserが削除されている", async () => {
      await userRepositoryImpl.delete(2);
      expect(DB.users).toStrictEqual(userObj().filter((user) => user.id !== 2));
    });
  });
});
