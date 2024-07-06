// src/app/module/project/project.routes.ts
import { Router } from 'express';
import { projectControllers } from './project.controller';

const router = Router();
router.get('/', projectControllers.getProjectsController);
router.post('/', projectControllers.createProjectController);
router.get('/:id', projectControllers.getProjectByIdController);
router.put('/project/:id', projectControllers.updateProjectController);
router.delete('/:id', projectControllers.deleteProjectController);

export const projectRoute = router;
