"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptionModel = void 0;
// src/app/module/description/description.model.ts
const mongoose_1 = require("mongoose");
const descriptionSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
}, {
    timestamps: true,
});
exports.DescriptionModel = (0, mongoose_1.model)('Description', descriptionSchema);
