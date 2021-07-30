"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUser = void 0;
var FindUser = /** @class */ (function () {
    function FindUser(userRepository) {
        this.userRepository = userRepository;
    }
    FindUser.prototype.getUser = function (id) {
        return this.userRepository.find(id);
    };
    FindUser.prototype.getAllUsers = function () {
        return this.userRepository.findAll();
    };
    return FindUser;
}());
exports.FindUser = FindUser;
//# sourceMappingURL=find_user.js.map