"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRoute = void 0;
// src/app/module/project/project.routes.ts
const express_1 = require("express");
const project_controller_1 = require("./project.controller");
const router = (0, express_1.Router)();
router.get('/', project_controller_1.projectControllers.getProjectsController);
router.post('/', project_controller_1.projectControllers.createProjectController);
router.get('/:id', project_controller_1.projectControllers.getProjectByIdController);
router.put('/project/:id', project_controller_1.projectControllers.updateProjectController);
router.delete('/:id', project_controller_1.projectControllers.deleteProjectController);
exports.projectRoute = router;
