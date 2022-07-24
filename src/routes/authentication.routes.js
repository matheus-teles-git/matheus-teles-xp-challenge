"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_controller_1 = __importDefault(require("../controllers/authentication.controller"));
const authentication_middleware_1 = __importDefault(require("../middlewares/authentication.middleware"));
const authentication = new authentication_controller_1.default();
const router = (0, express_1.Router)();
router.post('/login', authentication_middleware_1.default, authentication.login);
exports.default = router;
