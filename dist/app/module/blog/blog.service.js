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
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogService = void 0;
const blog_model_1 = require("./blog.model");
const createBlog = (blogData) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = new blog_model_1.BlogModel(blogData);
    return yield blog.save();
});
const getBlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield blog_model_1.BlogModel.find().exec();
});
const getBlogById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield blog_model_1.BlogModel.findById(id).exec();
});
const updateBlog = (id, blogData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield blog_model_1.BlogModel.findByIdAndUpdate(id, blogData, { new: true }).exec();
});
const deleteBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield blog_model_1.BlogModel.findByIdAndDelete(id).exec();
});
exports.blogService = {
    createBlog,
    getBlogs,
    updateBlog,
    getBlogById,
    deleteBlog
};
