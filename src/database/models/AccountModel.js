"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Accounts extends sequelize_1.Model {
}
Accounts.init({
    userId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    assetId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
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
    modelName: 'accounts'
});
exports.default = Accounts;
