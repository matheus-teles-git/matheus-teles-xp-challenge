"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const user_middleware_1 = __importDefault(require("../middlewares/user.middleware"));
const user = new user_controller_1.default();
const router = (0, express_1.Router)();
router.get('/:id', user.retrieveBalance);
router.post('/deposito', user_middleware_1.default, user.deposit);
router.post('/saque', user_middleware_1.default, user.withdraw);
exports.default = router;
