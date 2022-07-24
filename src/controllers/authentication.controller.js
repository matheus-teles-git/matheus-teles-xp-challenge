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
const generate_token_1 = __importDefault(require("../authentication/generate.token"));
const authentication_service_1 = __importDefault(require("../services/authentication.service"));
class AuthenticationController {
    constructor(authenticationService = new authentication_service_1.default()) {
        this.authenticationService = authenticationService;
        this.login = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const payload = request.body;
            const login = yield this.authenticationService.authenticate(payload);
            if (login === null) {
                return response.status(403).json({ message: 'Incorrect Email or Password' });
            }
            const token = (0, generate_token_1.default)(login);
            return response.status(200).json({ token });
        });
    }
}
exports.default = AuthenticationController;
