"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Assets extends sequelize_1.Model {
}
Assets.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    ticker: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    value: {
        type: (0, sequelize_1.DECIMAL)(10, 2),
        allowNull: false,
    },
    quantity: {
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
    modelName: 'assets'
});
exports.default = Assets;
