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
    assetValue: {
        type: (0, sequelize_1.DECIMAL)(10, 2),
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
// Accounts.belongsTo(Users, { foreignKey: 'userId' });
// Accounts.belongsTo(Assets, { foreignKey: 'assetId' });
// Users.hasMany(Accounts, { foreignKey: 'userId' });
// Assets.hasMany(Accounts, { foreignKey: 'assetId' });
UserModel_1.default.belongsToMany(AssetModel_1.default, { through: Accounts, foreignKey: 'assetId', otherKey: 'userId' });
AssetModel_1.default.belongsToMany(UserModel_1.default, { through: Accounts, foreignKey: 'userId', otherKey: 'assetId' });
exports.default = Accounts;
