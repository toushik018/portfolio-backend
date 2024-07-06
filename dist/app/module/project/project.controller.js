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
exports.projectControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const project_service_1 = require("./project.service");
const createProjectController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projectData = req.body;
    const project = yield project_service_1.projectService.createProject(projectData);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: 'Project created successfully',
        data: project,
    });
}));
const getProjectsController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield project_service_1.projectService.getProjects();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Projects fetched successfully',
        data: projects,
    });
}));
const getProjectByIdController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const project = yield project_service_1.projectService.getProjectById(id);
    if (!project) {
        return res.status(404).json({
            success: false,
            message: 'Project not found',
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Project fetched successfully',
        data: project,
    });
}));
const updateProjectController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const projectData = req.body;
    const project = yield project_service_1.projectService.updateProject(id, projectData);
    if (!project) {
        return res.status(404).json({
            success: false,
            message: 'Project not found',
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Project updated successfully',
        data: project,
    });
}));
const deleteProjectController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const project = yield project_service_1.projectService.deleteProject(id);
    if (!project) {
        return res.status(404).json({
            success: false,
            message: 'Project not found',
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Project deleted successfully',
        data: project,
    });
}));
exports.projectControllers = {
    createProjectController,
    getProjectsController,
    getProjectByIdController,
    deleteProjectController,
    updateProjectController
};
