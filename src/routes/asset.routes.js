"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asset_controller_1 = __importDefault(require("../controllers/asset.controller"));
const asset = new asset_controller_1.default();
const router = (0, express_1.Router)();
router.get('/:id', asset.getByClient);
exports.default = router;
