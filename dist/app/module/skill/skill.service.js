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
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillServices = void 0;
const skill_model_1 = require("./skill.model");
// Create a new skill
const createSkill = (skillData) => __awaiter(void 0, void 0, void 0, function* () {
    const skill = new skill_model_1.Skill(skillData);
    return yield skill.save();
});
// Get all skills
const getSkills = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield skill_model_1.Skill.find();
});
// Get a skill by ID
const getSkillById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield skill_model_1.Skill.findById(id);
});
// Update a skill by ID
const updateSkill = (id, skillData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield skill_model_1.Skill.findByIdAndUpdate(id, skillData, { new: true });
});
// Delete a skill by ID
const deleteSkill = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield skill_model_1.Skill.findByIdAndDelete(id);
});
exports.skillServices = {
    createSkill,
    getSkills,
    getSkillById,
    updateSkill,
    deleteSkill
};
