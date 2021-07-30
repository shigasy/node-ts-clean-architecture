class User {
  private _id: number;
  private _name: string;
  private _age: number;

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this.name = name;
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
