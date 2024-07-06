"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_status_1 = __importDefault(require("http-status"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000', 'http://localhost:3001', 'https://tayeb-hossain.vercel.app', 'https://portfolio-dashboard-green.vercel.app'],
    credentials: true
}));
app.use((0, cookie_parser_1.default)());
// parsers
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', routes_1.default);
app.get('/', (req, res) => {
    res.send({
        Message: "My portfolio server is running"
    });
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: "API Not Found",
        error: {
            path: req.originalUrl,
            message: "Your API is not available"
        }
    });
});
exports.default = app;
