"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = void 0;
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    repo: { type: String, required: true },
    live: { type: String, required: true },
    thumbnail: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: String, required: true }],
}, {
    timestamps: true,
});
exports.ProjectModel = (0, mongoose_1.model)('Project', projectSchema);
