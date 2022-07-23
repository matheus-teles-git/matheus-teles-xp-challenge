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
const investment_service_1 = __importDefault(require("../services/investment.service"));
class InvestmentController {
    constructor(investmentService = new investment_service_1.default()) {
        this.investmentService = investmentService;
        this.buyAsset = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const payload = request.body;
            const buy = yield this.investmentService.buyAsset(payload);
            if (buy === null) {
                return response.status(422).json({ message: 'Not enough account balance' });
            }
            if (buy === false) {
                return response.status(422).json({ message: 'Not enough assets available to buy' });
            }
            return response.status(200).json(buy);
        });
        this.sellAsset = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const payload = request.body;
            const sell = yield this.investmentService.sellAsset(payload);
            if (sell === null) {
                return response.status(422).json({ message: 'Not enough assets on your account to sell' });
            }
            return response.status(200).json(sell);
        });
    }
}
exports.default = InvestmentController;
