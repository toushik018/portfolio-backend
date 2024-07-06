"use strict";
// src/app/module/description/description.service.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.descriptionServices = void 0;
const description_model_1 = require("./description.model");
const createDescription = (descriptionData) => __awaiter(void 0, void 0, void 0, function* () {
    const description = new description_model_1.DescriptionModel(descriptionData);
    return yield description.save();
});
const getDescriptions = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield description_model_1.DescriptionModel.find().exec();
});
const getDescriptionById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield description_model_1.DescriptionModel.findById(id).exec();
});
const updateDescription = (id, descriptionData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield description_model_1.DescriptionModel.findByIdAndUpdate(id, descriptionData, { new: true }).exec();
});
const deleteDescription = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield description_model_1.DescriptionModel.findByIdAndDelete(id).exec();
});
exports.descriptionServices = {
    createDescription,
    getDescriptions,
    getDescriptionById,
    updateDescription,
    deleteDescription
};
