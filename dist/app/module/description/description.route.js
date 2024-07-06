"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descriptionRoutes = void 0;
// src/app/module/description/description.routes.ts
const express_1 = require("express");
const description_controller_1 = require("./description.controller");
const router = (0, express_1.Router)();
router.post('/', description_controller_1.descriptionController.createDescriptionController);
router.get('/', description_controller_1.descriptionController.getDescriptionsController);
router.get('/:id', description_controller_1.descriptionController.getDescriptionByIdController);
router.put('/:id', description_controller_1.descriptionController.updateDescriptionController);
router.delete('/:id', description_controller_1.descriptionController.deleteDescriptionController);
exports.descriptionRoutes = router;
