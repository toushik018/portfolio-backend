// src/app/module/blog/blog.routes.ts
import { Router } from 'express';
import { createBlogController, deleteBlogController, getBlogByIdController, getBlogsController, updateBlogController } from './blog.controller';

const router = Router();
router.get('/', getBlogsController)
router.post('/', createBlogController);
router.get('/:id', getBlogByIdController);
router.put('/:id', updateBlogController);
router.delete('/:id', deleteBlogController);

export const blogRoutes = router;