// src/app/module/blog/blog.controller.ts
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendSuccessResponse from '../../utils/sendResponse';
import { blogService } from './blog.service';



export const createBlogController = catchAsync(async (req: Request, res: Response) => {
    const blogData = req.body;
    const blog = await blogService.createBlog(blogData);
    sendSuccessResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Blog created successfully',
        data: blog,
    });
}
);


export const getBlogsController = catchAsync(
    async (req: Request, res: Response,) => {
        const blogs = await blogService.getBlogs();
        sendSuccessResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Blogs fetched successfully',
            data: blogs,
        });
    }
);

export const getBlogByIdController = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const blog = await blogService.getBlogById(id);
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found',
            });
        }
        sendSuccessResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Blog fetched successfully',
            data: blog,
        });
    }
);

export const updateBlogController = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const blogData = req.body;
        const blog = await blogService.updateBlog(id, blogData);
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found',
            });
        }
        sendSuccessResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Blog updated successfully',
            data: blog,
        });
    }
);

export const deleteBlogController = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const blog = await blogService.deleteBlog(id);
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found',
            });
        }
        sendSuccessResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Blog deleted successfully',
            data: blog,
        });
    }
);