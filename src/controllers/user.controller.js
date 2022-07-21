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
const user_service_1 = __importDefault(require("../services/user.service"));
class UserController {
    constructor(userService = new user_service_1.default()) {
        this.userService = userService;
        this.retrieveBalance = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const balance = yield this.userService.retrieveBalance(Number(id));
            return response.status(200).json(balance);
        });
        this.deposit = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const payload = request.body;
            if (payload.balance <= 0) {
                return response.status(422).json({ message: 'Deposit value must be higher than zero' });
            }
            const deposit = yield this.userService.deposit(payload);
            return response.status(200).json({ message: `Account balance of client #${deposit === null || deposit === void 0 ? void 0 : deposit.clientCode} is R$${deposit === null || deposit === void 0 ? void 0 : deposit.balance}` });
        });
    }
}
exports.default = UserController;
