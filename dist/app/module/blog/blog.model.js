"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogModel = void 0;
// src/app/module/blog/blog.model.ts
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    summary: { type: String, required: true },
    publishedAt: { type: Date },
    content: { type: String, required: true },
    images: [{ type: String, required: false }]
}, {
    timestamps: true,
});
exports.BlogModel = (0, mongoose_1.model)('Blog', blogSchema);
