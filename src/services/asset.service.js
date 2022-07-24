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
const AccountModel_1 = __importDefault(require("../database/models/AccountModel"));
const AssetModel_1 = __importDefault(require("../database/models/AssetModel"));
class AssetService {
    getByClient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientAssets = yield AccountModel_1.default.findAll({ raw: true, attributes: ['userId', 'assetId', 'assetQuantity', 'assetValue'], where: { userId: id } });
            return clientAssets;
        });
    }
    getByAsset(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const asset = yield AssetModel_1.default.findOne({ where: { id } });
            if (asset === null)
                return null;
            return { id: asset === null || asset === void 0 ? void 0 : asset.id, codAtivo: asset === null || asset === void 0 ? void 0 : asset.ticker, quantidade: asset === null || asset === void 0 ? void 0 : asset.quantity, valor: asset === null || asset === void 0 ? void 0 : asset.value };
        });
    }
}
exports.default = AssetService;
