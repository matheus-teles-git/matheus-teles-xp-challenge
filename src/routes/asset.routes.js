"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verify_token_1 = __importDefault(require("../authentication/verify.token"));
const asset_controller_1 = __importDefault(require("../controllers/asset.controller"));
const asset = new asset_controller_1.default();
const router = (0, express_1.Router)();
router.get('/:id', verify_token_1.default, asset.getByClient);
router.get('/assetinfo/:id', verify_token_1.default, asset.getByAsset);
exports.default = router;
