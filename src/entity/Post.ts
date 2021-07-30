class Post {
  private _id: number;
  private _content: string;
  private _userId: number;

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  constructor(id: number, content: string, userId: number) {
    this._id = id;
    this._content = content;
    this._userId = userId;
  }
}

const PostBusinessRule = {
  isPostLengthValid(postText: string): boolean {
    return postText.length > 0 && postText.length < 256;
  },
};

export { Post, PostBusinessRule };
