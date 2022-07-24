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
const mathjs_1 = require("mathjs");
const AccountModel_1 = __importDefault(require("../database/models/AccountModel"));
const AssetModel_1 = __importDefault(require("../database/models/AssetModel"));
const UserModel_1 = __importDefault(require("../database/models/UserModel"));
//both methods are too verbose, need refactoring
class InvestmentService {
    buyAsset(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const retrieveAccountBalance = yield UserModel_1.default.findOne({ where: { id: Number(payload.userId) } });
            const retrieveAsset = yield AssetModel_1.default.findOne({ where: { id: payload.assetId } });
            const retrieved = retrieveAsset === null || retrieveAsset === void 0 ? void 0 : retrieveAsset.quantity;
            if (retrieved != undefined && payload.assetQuantity > retrieved)
                return false;
            const operation = (0, mathjs_1.evaluate)(`${payload.assetQuantity} * ${retrieveAsset === null || retrieveAsset === void 0 ? void 0 : retrieveAsset.value}`);
            if ((retrieveAccountBalance === null || retrieveAccountBalance === void 0 ? void 0 : retrieveAccountBalance.balance) != undefined && operation > (retrieveAccountBalance === null || retrieveAccountBalance === void 0 ? void 0 : retrieveAccountBalance.balance))
                return null;
            const newAccountBalance = (0, mathjs_1.evaluate)(`${retrieveAccountBalance === null || retrieveAccountBalance === void 0 ? void 0 : retrieveAccountBalance.balance} - ${operation}`);
            yield UserModel_1.default.update({ balance: newAccountBalance }, { where: { id: payload.userId } });
            const checkCustody = yield AccountModel_1.default.findOne({
                attributes: ['assetQuantity', 'userId', 'assetId',],
                where: { userId: payload.userId, assetId: payload.assetId }
            });
            if (checkCustody === null) {
                const newCustody = yield AccountModel_1.default.create({ userId: payload.userId,
                    assetId: payload.assetId,
                    assetQuantity: payload.assetQuantity,
                    assetValue: retrieveAsset === null || retrieveAsset === void 0 ? void 0 : retrieveAsset.value
                });
                return newCustody;
            }
            yield AccountModel_1.default.update({ assetQuantity: (0, mathjs_1.evaluate)(`${checkCustody === null || checkCustody === void 0 ? void 0 : checkCustody.assetQuantity} + ${payload.assetQuantity}`) }, { where: {
                    userId: payload.userId,
                    assetId: payload.assetId
                }
            });
            yield AssetModel_1.default.update({ quantity: (0, mathjs_1.evaluate)(`${retrieveAsset === null || retrieveAsset === void 0 ? void 0 : retrieveAsset.quantity} - ${payload.assetQuantity}`) }, { where: { id: payload.assetId } });
            return { userId: payload.userId,
                assetId: payload.assetId,
                assetQuantity: (0, mathjs_1.evaluate)(`${checkCustody === null || checkCustody === void 0 ? void 0 : checkCustody.assetQuantity} + ${payload.assetQuantity}`),
                assetvalue: retrieveAsset === null || retrieveAsset === void 0 ? void 0 : retrieveAsset.value };
        });
    }
    sellAsset(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const retrieveAccountBalance = yield UserModel_1.default.findOne({ where: { id: payload.userId } });
            const retrieveAssetBalance = yield AssetModel_1.default.findOne({ where: { id: Number(payload.assetId) } });
            const retrieveAsset = yield AccountModel_1.default.findOne({ attributes: ['assetQuantity', 'userId', 'assetId'], where: { userId: Number(payload.userId), assetId: Number(payload.assetId) } });
            const operation = (0, mathjs_1.evaluate)(`${payload.assetQuantity} * ${retrieveAssetBalance === null || retrieveAssetBalance === void 0 ? void 0 : retrieveAssetBalance.value}`);
            if ((retrieveAsset === null || retrieveAsset === void 0 ? void 0 : retrieveAsset.assetQuantity) != undefined && payload.assetQuantity > (retrieveAsset === null || retrieveAsset === void 0 ? void 0 : retrieveAsset.assetQuantity))
                return null;
            const newAccountBalance = (0, mathjs_1.evaluate)(`${retrieveAccountBalance === null || retrieveAccountBalance === void 0 ? void 0 : retrieveAccountBalance.balance} + ${operation}`);
            yield UserModel_1.default.update({ balance: newAccountBalance }, { where: { id: payload.userId } });
            const checkCustody = yield AccountModel_1.default.findOne({
                attributes: ['assetQuantity', 'userId', 'assetId'],
                where: { userId: payload.userId, assetId: payload.assetId }
            });
            yield AccountModel_1.default.update({ assetQuantity: (0, mathjs_1.evaluate)(`${checkCustody === null || checkCustody === void 0 ? void 0 : checkCustody.assetQuantity} - ${payload.assetQuantity}`) }, { where: {
                    userId: payload.userId,
                    assetId: payload.assetId
                }
            });
            yield AssetModel_1.default.update({ quantity: (0, mathjs_1.evaluate)(`${retrieveAssetBalance === null || retrieveAssetBalance === void 0 ? void 0 : retrieveAssetBalance.quantity} + ${payload.assetQuantity}`) }, { where: { id: payload.assetId } });
            return { userId: payload.userId,
                assetId: payload.assetId,
                assetQuantity: (0, mathjs_1.evaluate)(`${checkCustody === null || checkCustody === void 0 ? void 0 : checkCustody.assetQuantity} - ${payload.assetQuantity}`),
                assetvalue: retrieveAsset === null || retrieveAsset === void 0 ? void 0 : retrieveAsset.assetValue };
        });
    }
}
exports.default = InvestmentService;
