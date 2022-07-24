"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/conta', routes_1.user);
app.use('/ativos', routes_1.asset);
app.use('/investimentos', routes_1.investment);
app.use('/', routes_1.authentication);
exports.default = app;
