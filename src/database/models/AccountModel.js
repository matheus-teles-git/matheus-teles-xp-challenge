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
    // userId: {
    //   type: INTEGER,
    //   allowNull: false,
    // },
    // assetId: {
    //   type: INTEGER,
    //   allowNull: false,
    // },
    assetQuantity: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    // assetValue: {
    //   type: DECIMAL(10,2),
    //   allowNull: false,
    // },
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
    modelName: 'accounts'
});
Accounts.belongsToMany(UserModel_1.default, { through: Accounts, foreignKey: 'userId', otherKey: 'assetId' });
Accounts.belongsToMany(AssetModel_1.default, { through: Accounts, foreignKey: 'assetId', otherKey: 'userId' });
Accounts.belongsToMany(Accounts, { through: Accounts, foreignKey: 'assetValue', otherKey: 'value' });
Accounts.belongsToMany(AssetModel_1.default, { through: Accounts, foreignKey: 'value', otherKey: 'assetValue' });
exports.default = Accounts;
