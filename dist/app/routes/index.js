"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_route_1 = require("../module/blog/blog.route");
const experience_route_1 = require("../module/experience/experience.route");
const project_route_1 = require("../module/project/project.route");
const description_route_1 = require("../module/description/description.route");
const skill_route_1 = require("../module/skill/skill.route");
const router = express_1.default.Router();
const routes = [
    {
        path: '/blog',
        route: blog_route_1.blogRoutes,
    },
    {
        path: '/experince',
        route: experience_route_1.experinceRoutes,
    },
    {
        path: '/project',
        route: project_route_1.projectRoute,
    },
    {
        path: '/description',
        route: description_route_1.descriptionRoutes,
    },
    {
        path: '/skills',
        route: skill_route_1.skillRoutes,
    },
];
routes.forEach((routeEle) => {
    router.use(routeEle.path, routeEle.route);
});
exports.default = router;
