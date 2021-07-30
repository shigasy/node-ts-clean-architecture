"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBusinessRule = exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, name, age) {
        this._id = id;
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.User = User;
var UserBusinessRule = {
    isNameLengthValid: function (name) {
        return name.length > 0;
    },
};
exports.UserBusinessRule = UserBusinessRule;
//# sourceMappingURL=user.js.map