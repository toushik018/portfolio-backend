"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoutes = void 0;
// src/app/module/blog/blog.routes.ts
const express_1 = require("express");
const blog_controller_1 = require("./blog.controller");
const router = (0, express_1.Router)();
router.get('/', blog_controller_1.getBlogsController);
router.post('/', blog_controller_1.createBlogController);
router.get('/:id', blog_controller_1.getBlogByIdController);
router.put('/:id', blog_controller_1.updateBlogController);
router.delete('/:id', blog_controller_1.deleteBlogController);
exports.blogRoutes = router;
