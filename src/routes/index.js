"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.investment = exports.asset = exports.user = void 0;
const user_routes_1 = __importDefault(require("./user.routes"));
exports.user = user_routes_1.default;
const asset_routes_1 = __importDefault(require("./asset.routes"));
exports.asset = asset_routes_1.default;
const investment_routes_1 = __importDefault(require("./investment.routes"));
exports.investment = investment_routes_1.default;
