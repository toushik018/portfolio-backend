import { Request, Response } from 'express';
import { skillServices } from './skill.service';
import catchAsync from '../../utils/catchAsync';
import sendSuccessResponse from '../../utils/sendResponse';

const addSkill = catchAsync(async (req: Request, res: Response) => {
    console.log(req.body);
    const skill = await skillServices.createSkill(req.body);
    sendSuccessResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Skill added successfully',
        data: skill,
    });
});

const getAllSkills = catchAsync(async (req: Request, res: Response) => {
    const skills = await skillServices.getSkills();
    sendSuccessResponse(res, {
        statusCode: 200,
        success: true,
        data: skills,
    });
});

const getSkill = catchAsync(async (req: Request, res: Response) => {
    const skill = await skillServices.getSkillById(req.params.id);
    sendSuccessResponse(res, {
        statusCode: 200,
        success: true,
        data: skill,
    });
});

const updateSkill = catchAsync(async (req: Request, res: Response) => {
    const skill = await skillServices.updateSkill(req.params.id, req.body);
    sendSuccessResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Skill updated successfully',
        data: skill,
    });
});

const deleteSkill = catchAsync(async (req: Request, res: Response) => {
    const skill = await skillServices.deleteSkill(req.params.id);
    sendSuccessResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Skill deleted successfully',
        data: skill,
    });
});


export const skillControllers = {
    addSkill,
    getAllSkills,
    updateSkill,
    deleteSkill,
    getSkill
}