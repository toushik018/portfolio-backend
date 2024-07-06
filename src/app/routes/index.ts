import express from 'express'
import { blogRoutes } from '../module/blog/blog.route'
import { experinceRoutes } from '../module/experience/experience.route'
import { projectRoute } from '../module/project/project.route'
import { descriptionRoutes } from '../module/description/description.route'
import { skillRoutes } from '../module/skill/skill.route'

const router = express.Router()

const routes = [
    {
        path: '/blog',
        route: blogRoutes,
    },
    {
        path: '/experince',
        route: experinceRoutes,
    },
    {
        path: '/project',
        route: projectRoute,
    },
    {
        path: '/description',
        route: descriptionRoutes,
    },
    {
        path: '/skills',
        route: skillRoutes,
    },
]

routes.forEach((routeEle) => {
    router.use(routeEle.path, routeEle.route)
})

export default router
