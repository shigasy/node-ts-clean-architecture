class User {
  private _id: number;
  private _name: string;
  private _age: number;

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get age() {
    return this._age;
  }

  set age(age: number) {
    this._age = age;
  }

  constructor(id: number, name: string, age: number) {
    this._id = id;
    this._name = name;
    this._age = age;
  }
}

const UserBusinessRule = {
  isNameLengthValid(name: string): boolean {
    return name.length > 0;
  },
};

export { User, UserBusinessRule };
