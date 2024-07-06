"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skill = void 0;
const mongoose_1 = require("mongoose");
const skillSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    category: { type: String, required: true },
}, {
    timestamps: true,
});
exports.Skill = (0, mongoose_1.model)('Skill', skillSchema);
