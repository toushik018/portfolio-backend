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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlogController = exports.updateBlogController = exports.getBlogByIdController = exports.getBlogsController = exports.createBlogController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const blog_service_1 = require("./blog.service");
exports.createBlogController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogData = req.body;
    const blog = yield blog_service_1.blogService.createBlog(blogData);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: 'Blog created successfully',
        data: blog,
    });
}));
exports.getBlogsController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield blog_service_1.blogService.getBlogs();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Blogs fetched successfully',
        data: blogs,
    });
}));
exports.getBlogByIdController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const blog = yield blog_service_1.blogService.getBlogById(id);
    if (!blog) {
        return res.status(404).json({
            success: false,
            message: 'Blog not found',
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Blog fetched successfully',
        data: blog,
    });
}));
exports.updateBlogController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const blogData = req.body;
    const blog = yield blog_service_1.blogService.updateBlog(id, blogData);
    if (!blog) {
        return res.status(404).json({
            success: false,
            message: 'Blog not found',
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Blog updated successfully',
        data: blog,
    });
}));
exports.deleteBlogController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const blog = yield blog_service_1.blogService.deleteBlog(id);
    if (!blog) {
        return res.status(404).json({
            success: false,
            message: 'Blog not found',
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Blog deleted successfully',
        data: blog,
    });
}));
