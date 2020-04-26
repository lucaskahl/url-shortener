"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var shortener_routes_1 = __importDefault(require("./shortener.routes"));
var routes = express_1.Router();
routes.use('/shortener', shortener_routes_1.default);
exports.default = routes;
