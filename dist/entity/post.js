"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostBusinessRule = exports.Post = void 0;
var Post = /** @class */ (function () {
    function Post(id, content, userId) {
        this._id = id;
        this._content = content;
        this._userId = userId;
    }
    Object.defineProperty(Post.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    return Post;
}());
exports.Post = Post;
var PostBusinessRule = {
    isPostLengthValid: function (postText) {
        return postText.length > 0 && postText.length < 256;
    },
};
exports.PostBusinessRule = PostBusinessRule;
//# sourceMappingURL=post.js.map