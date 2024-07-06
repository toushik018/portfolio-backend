import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendSuccessResponse from "../../utils/sendResponse";
import { projectService } from "./project.service";

const createProjectController = catchAsync(
    async (req: Request, res: Response) => {
        const projectData = req.body;
        const project = await projectService.createProject(projectData);
        sendSuccessResponse(res, {
            statusCode: 201,
            success: true,
            message: 'Project created successfully',
            data: project,
        });
    }
);


const getProjectsController = catchAsync(
    async (req: Request, res: Response) => {
        const projects = await projectService.getProjects();
        sendSuccessResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Projects fetched successfully',
            data: projects,
        });
    }
);



const getProjectByIdController = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const project = await projectService.getProjectById(id);
        if (!project) {
            return res.status(404).json({
                success: false,
                message: 'Project not found',
            });
        }
        sendSuccessResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Project fetched successfully',
            data: project,
        });
    }
);

const updateProjectController = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const projectData = req.body;
        const project = await projectService.updateProject(id, projectData);
        if (!project) {
            return res.status(404).json({
                success: false,
                message: 'Project not found',
            });
        }
        sendSuccessResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Project updated successfully',
            data: project,
        });
    }
);

const deleteProjectController = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const project = await projectService.deleteProject(id);
        if (!project) {
            return res.status(404).json({
                success: false,
                message: 'Project not found',
            });
        }
        sendSuccessResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Project deleted successfully',
            data: project,
        });
    }
);


export const projectControllers = {
    createProjectController,
    getProjectsController,
    getProjectByIdController,
    deleteProjectController,
    updateProjectController
}