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
exports.descriptionController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const description_service_1 = require("./description.service");
const createDescriptionController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const descriptionData = req.body;
    const description = yield description_service_1.descriptionServices.createDescription(descriptionData);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: 'Description created successfully',
        data: description,
    });
}));
const getDescriptionsController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const descriptions = yield description_service_1.descriptionServices.getDescriptions();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Descriptions fetched successfully',
        data: descriptions,
    });
}));
const getDescriptionByIdController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const description = yield description_service_1.descriptionServices.getDescriptionById(id);
    if (!description) {
        return res.status(404).json({
            success: false,
            message: 'Description not found',
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Description fetched successfully',
        data: description,
    });
}));
const updateDescriptionController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const descriptionData = req.body;
    const description = yield description_service_1.descriptionServices.updateDescription(id, descriptionData);
    if (!description) {
        return res.status(404).json({
            success: false,
            message: 'Description not found',
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Description updated successfully',
        data: description,
    });
}));
const deleteDescriptionController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const description = yield description_service_1.descriptionServices.deleteDescription(id);
    if (!description) {
        return res.status(404).json({
            success: false,
            message: 'Description not found',
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Description deleted successfully',
        data: description,
    });
}));
exports.descriptionController = {
    createDescriptionController,
    getDescriptionsController,
    getDescriptionByIdController,
    updateDescriptionController,
    deleteDescriptionController
};
