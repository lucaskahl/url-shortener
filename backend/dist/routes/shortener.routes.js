"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tinyurl_1 = __importDefault(require("tinyurl"));
var shortenerRouter = express_1.Router();
shortenerRouter.post('/', function (request, response) {
    var url = request.body.url;
    tinyurl_1.default.shorten(url).then(function (res) {
        return response.json({
            message: 'The URL as been encurted with success',
            url: res,
        });
    }, function (err) {
        return response.json({ message: err }).status(400);
    });
});
exports.default = shortenerRouter;
