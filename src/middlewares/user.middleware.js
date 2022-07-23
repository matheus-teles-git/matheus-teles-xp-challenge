"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function userValidation(request, response, next) {
    const { balance } = request.body;
    if (balance <= 0)
        return response.status(422).json({ message: 'Operation Value can\'t be equal or less than zero ' });
    next();
}
exports.default = userValidation;
