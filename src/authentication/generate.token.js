"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { JWT_SECRET } = process.env;
function generateToken(data) {
    const secret = { token: jsonwebtoken_1.default.sign({ data }, `${JWT_SECRET}`, { expiresIn: '7d', algorithm: 'HS256' }) };
    return secret.token;
}
exports.default = generateToken;
