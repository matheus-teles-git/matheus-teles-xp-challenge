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
const UserModel_1 = __importDefault(require("../database/models/UserModel"));
const mathjs_1 = require("mathjs");
//found this math library searching on google
class UserService {
    retrieveBalance(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const entry = yield UserModel_1.default.findOne({ where: { id } });
            return { clientCode: entry === null || entry === void 0 ? void 0 : entry.id, balance: entry === null || entry === void 0 ? void 0 : entry.balance };
        });
    }
    deposit(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const current = yield UserModel_1.default.findOne({ where: { id: payload.clientCode } });
            if ((current === null || current === void 0 ? void 0 : current.balance) != undefined) {
                const x = current.balance;
                const y = payload.balance;
                const newBalance = (0, mathjs_1.evaluate)(`${x} + ${y}`);
                yield UserModel_1.default.update({ balance: newBalance.toFixed(2) }, { where: { id: payload.clientCode } });
                return { clientCode: payload.clientCode, balance: newBalance.toFixed(2) };
            }
        });
    }
}
exports.default = UserService;
