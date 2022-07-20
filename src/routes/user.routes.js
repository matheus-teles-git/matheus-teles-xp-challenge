"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const user = new user_controller_1.default();
const router = (0, express_1.Router)();
router.get('/:id', user.retrieveBalance);
exports.default = router;
