"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const invesment_controller_1 = __importDefault(require("../controllers/invesment.controller"));
const invesment = new invesment_controller_1.default();
const router = (0, express_1.Router)();
router.post('/comprar', invesment.buyAsset);
exports.default = router;
