// src/app/module/description/description.routes.ts
import { Router } from 'express';
import { descriptionController } from './description.controller';
const router = Router();

router.post('/', descriptionController.createDescriptionController);
router.get('/', descriptionController.getDescriptionsController);
router.get('/:id', descriptionController.getDescriptionByIdController);
router.put('/:id', descriptionController.updateDescriptionController);
router.delete('/:id', descriptionController.deleteDescriptionController);

export const descriptionRoutes = router;
