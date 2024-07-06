import { Router } from 'express';
import { skillControllers } from './skill.controller';


const router = Router();

router.post('/', skillControllers.addSkill);
router.get('/', skillControllers.getAllSkills);
router.get('/:id', skillControllers.getSkill);
router.put('/:id', skillControllers.updateSkill);
router.delete('/:id', skillControllers.deleteSkill);

export const skillRoutes = router;
