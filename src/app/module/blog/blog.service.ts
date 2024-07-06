// src/app/module/blog/blog.service.ts
import { IBlog } from './blog.interface';
import { BlogModel } from './blog.model';

const createBlog = async (blogData: IBlog): Promise<IBlog> => {
    const blog = new BlogModel(blogData);
    return await blog.save();
};

const getBlogs = async (): Promise<IBlog[]> => {
    return await BlogModel.find().exec();
};


const getBlogById = async (id: string): Promise<IBlog | null> => {
    return await BlogModel.findById(id).exec();
};

const updateBlog = async (id: string, blogData: IBlog): Promise<IBlog | null> => {
    return await BlogModel.findByIdAndUpdate(id, blogData, { new: true }).exec();
};

const deleteBlog = async (id: string): Promise<IBlog | null> => {
    return await BlogModel.findByIdAndDelete(id).exec();
};

export const blogService = {
    createBlog,
    getBlogs,
    updateBlog,
    getBlogById,
    deleteBlog
}