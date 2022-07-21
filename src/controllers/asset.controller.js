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
const asset_service_1 = __importDefault(require("../services/asset.service"));
class AssetController {
    constructor(assetService = new asset_service_1.default()) {
        this.assetService = assetService;
        this.getByClient = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const clientAssets = yield this.assetService.getByClient(Number(id));
            return response.status(200).json(clientAssets);
        });
        this.getByAsset = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const assetInfo = yield this.assetService.getByAsset(Number(id));
            return response.status(200).json(assetInfo);
        });
    }
}
exports.default = AssetController;
