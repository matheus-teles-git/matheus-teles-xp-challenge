"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const AssetModel_1 = __importDefault(require("./AssetModel"));
const UserModel_1 = __importDefault(require("./UserModel"));
class Accounts extends sequelize_1.Model {
}
Accounts.init({
    assetQuantity: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.DATE,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'Accounts'
});
Accounts.belongsTo(UserModel_1.default, { foreignKey: 'userId' });
Accounts.belongsTo(AssetModel_1.default, { foreignKey: 'assetId' });
UserModel_1.default.hasMany(Accounts, { foreignKey: 'userId' });
AssetModel_1.default.hasMany(Accounts, { foreignKey: 'assetId' });
exports.default = Accounts;
