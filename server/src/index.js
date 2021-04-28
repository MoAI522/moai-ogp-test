"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = process.env.PORT || 3000;
var router = express_1.default.Router();
router.use(express_1.default.static(__dirname + "/static"));
router.get("*", function (_, res) { return res.sendFile(__dirname + "/static/index.html"); });
app.use("/", router);
app.listen(port, function () {
    console.log("listening at http://localhost:" + port);
});
