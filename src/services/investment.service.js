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
            const retrieveAccountBalance = yield UserModel_1.default.findOne({ where: { id: Number(payload.codCliente) } });
            const retrieveAsset = yield AssetModel_1.default.findOne({ where: { id: payload.codAtivo } });
            const retrieved = retrieveAsset === null || retrieveAsset === void 0 ? void 0 : retrieveAsset.quantity;
            if (retrieved != undefined && payload.qtdeAtivo > retrieved)
                return false;
            const operation = (0, mathjs_1.evaluate)(`${payload.qtdeAtivo} * ${retrieveAsset === null || retrieveAsset === void 0 ? void 0 : retrieveAsset.value}`);
            if ((retrieveAccountBalance === null || retrieveAccountBalance === void 0 ? void 0 : retrieveAccountBalance.balance) != undefined && operation > (retrieveAccountBalance === null || retrieveAccountBalance === void 0 ? void 0 : retrieveAccountBalance.balance))
                return null;
            const newAccountBalance = (0, mathjs_1.evaluate)(`${retrieveAccountBalance === null || retrieveAccountBalance === void 0 ? void 0 : retrieveAccountBalance.balance} - ${operation}`);
            yield UserModel_1.default.update({ balance: newAccountBalance }, { where: { id: payload.codCliente } });
            const checkCustody = yield AccountModel_1.default.findOne({
                attributes: ['assetQuantity', 'userId', 'assetId',],
                where: { userId: payload.codCliente, assetId: payload.codAtivo }
            });
            if (checkCustody === null) {
                const newCustody = yield AccountModel_1.default.create({ userId: payload.codCliente,
                    assetId: payload.codAtivo,
                    assetQuantity: payload.qtdeAtivo,
                    assetValue: retrieveAsset === null || retrieveAsset === void 0 ? void 0 : retrieveAsset.value
                });
                return newCustody;
            }
            yield AccountModel_1.default.update({ assetQuantity: (0, mathjs_1.evaluate)(`${checkCustody === null || checkCustody === void 0 ? void 0 : checkCustody.assetQuantity} + ${payload.qtdeAtivo}`) }, { where: {
                    userId: payload.codCliente,
                    assetId: payload.codAtivo
                }
            });
            yield AssetModel_1.default.update({ quantity: (0, mathjs_1.evaluate)(`${retrieveAsset === null || retrieveAsset === void 0 ? void 0 : retrieveAsset.quantity} - ${payload.qtdeAtivo}`) }, { where: { id: payload.codAtivo } });
            return { userId: payload.codCliente,
                assetId: payload.codAtivo,
                assetQuantity: (0, mathjs_1.evaluate)(`${checkCustody === null || checkCustody === void 0 ? void 0 : checkCustody.assetQuantity} + ${payload.qtdeAtivo}`),
                assetvalue: retrieveAsset === null || retrieveAsset === void 0 ? void 0 : retrieveAsset.value };
        });
    }
    sellAsset(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const retrieveAccountBalance = yield UserModel_1.default.findOne({ where: { id: payload.codCliente } });
            const retrieveAssetBalance = yield AssetModel_1.default.findOne({ where: { id: Number(payload.codAtivo) } });
            const retrieveAsset = yield AccountModel_1.default.findOne({ attributes: ['assetQuantity', 'userId', 'assetId'], where: { userId: Number(payload.codCliente), assetId: Number(payload.codAtivo) } });
            // const retrieved = retrieveAsset?.assetQuantity;
            // if (retrieved != undefined && payload.qtdeAtivo > retrieved) return false;
            const operation = (0, mathjs_1.evaluate)(`${payload.qtdeAtivo} * ${retrieveAssetBalance === null || retrieveAssetBalance === void 0 ? void 0 : retrieveAssetBalance.value}`);
            if ((retrieveAsset === null || retrieveAsset === void 0 ? void 0 : retrieveAsset.assetQuantity) != undefined && payload.qtdeAtivo > (retrieveAsset === null || retrieveAsset === void 0 ? void 0 : retrieveAsset.assetQuantity))
                return null;
            const newAccountBalance = (0, mathjs_1.evaluate)(`${retrieveAccountBalance === null || retrieveAccountBalance === void 0 ? void 0 : retrieveAccountBalance.balance} + ${operation}`);
            yield UserModel_1.default.update({ balance: newAccountBalance }, { where: { id: payload.codCliente } });
            const checkCustody = yield AccountModel_1.default.findOne({
                attributes: ['assetQuantity', 'userId', 'assetId'],
                where: { userId: payload.codCliente, assetId: payload.codAtivo }
            });
            // if (checkCustody === null) {
            //   const newCustody = await Accounts.create(
            //     { userId: payload.codCliente,
            //       assetId: payload.codAtivo,
            //       assetQuantity: payload.qtdeAtivo,
            //       assetValue: retrieveAssetBalance?.value
            //     });
            //   return newCustody;
            // }
            yield AccountModel_1.default.update({ assetQuantity: (0, mathjs_1.evaluate)(`${checkCustody === null || checkCustody === void 0 ? void 0 : checkCustody.assetQuantity} - ${payload.qtdeAtivo}`) }, { where: {
                    userId: payload.codCliente,
                    assetId: payload.codAtivo
                }
            });
            yield AssetModel_1.default.update({ quantity: (0, mathjs_1.evaluate)(`${retrieveAssetBalance === null || retrieveAssetBalance === void 0 ? void 0 : retrieveAssetBalance.quantity} + ${payload.qtdeAtivo}`) }, { where: { id: payload.codAtivo } });
            return { userId: payload.codCliente,
                assetId: payload.codAtivo,
                assetQuantity: (0, mathjs_1.evaluate)(`${checkCustody === null || checkCustody === void 0 ? void 0 : checkCustody.assetQuantity} - ${payload.qtdeAtivo}`),
                assetvalue: retrieveAsset === null || retrieveAsset === void 0 ? void 0 : retrieveAsset.assetValue };
        });
    }
}
exports.default = InvestmentService;
