"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendSuccessResponse = (res, data) => {
    var _a, _b;
    res.status((_a = data === null || data === void 0 ? void 0 : data.statusCode) !== null && _a !== void 0 ? _a : 200).json({
        success: data.success,
        statusCode: (_b = data === null || data === void 0 ? void 0 : data.statusCode) !== null && _b !== void 0 ? _b : 200,
        message: data.message,
        data: data.data,
    });
};
exports.default = sendSuccessResponse;
