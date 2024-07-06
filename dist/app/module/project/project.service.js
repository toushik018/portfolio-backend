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
exports.projectService = void 0;
const project_model_1 = require("./project.model");
const createProject = (projectData) => __awaiter(void 0, void 0, void 0, function* () {
    const project = new project_model_1.ProjectModel(projectData);
    return yield project.save();
});
const getProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield project_model_1.ProjectModel.find().exec();
});
const getProjectById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield project_model_1.ProjectModel.findById(id).exec();
});
const updateProject = (id, projectData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield project_model_1.ProjectModel.findByIdAndUpdate(id, projectData, { new: true }).exec();
});
const deleteProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield project_model_1.ProjectModel.findByIdAndDelete(id).exec();
});
exports.projectService = {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject
};
