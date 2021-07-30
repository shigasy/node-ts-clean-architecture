"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = require("./interface/router");
var app = express_1.default();
app.use("/api", router_1.router);
app.listen(3000, function () {
    console.log("listening on port 3000");
});
//# sourceMappingURL=index.js.map