"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.all = exports.authentication = exports.investment = exports.asset = exports.user = void 0;
const user_routes_1 = __importDefault(require("./user.routes"));
exports.user = user_routes_1.default;
const asset_routes_1 = __importDefault(require("./asset.routes"));
exports.asset = asset_routes_1.default;
const investment_routes_1 = __importDefault(require("./investment.routes"));
exports.investment = investment_routes_1.default;
const authentication_routes_1 = __importDefault(require("./authentication.routes"));
exports.authentication = authentication_routes_1.default;
const allAssets_routes_1 = __importDefault(require("./allAssets.routes"));
exports.all = allAssets_routes_1.default;
