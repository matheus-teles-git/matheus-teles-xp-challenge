"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config = {
    expiresIn: '3d',
    algorithm: 'HS256',
};
const secret = process.env.JWT_SECRET || 'xpincbackend';
function verifyToken(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { authorization } = request.headers;
        if (!authorization) {
            return response.status(401).json({ message: 'Token not found' });
        }
        try {
            jsonwebtoken_1.default.verify(authorization, secret, config);
            next();
        }
        catch (error) {
            return response.status(401).json({ message: 'Expired or invalid token' });
        }
    });
}
exports.default = verifyToken;
