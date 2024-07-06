// src/app/module/description/description.controller.ts
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendSuccessResponse from '../../utils/sendResponse';
import { IDescription } from './description.inteface';
import { descriptionServices } from './description.service';


const createDescriptionController = catchAsync(
    async (req: Request, res: Response) => {
        const descriptionData: IDescription = req.body;
        const description = await descriptionServices.createDescription(descriptionData);
        sendSuccessResponse(res, {
            statusCode: 201,
            success: true,
            message: 'Description created successfully',
            data: description,
        });
    }
);

const getDescriptionsController = catchAsync(
    async (req: Request, res: Response) => {
        const descriptions = await descriptionServices.getDescriptions();
        sendSuccessResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Descriptions fetched successfully',
            data: descriptions,
        });
    }
);

const getDescriptionByIdController = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const description = await descriptionServices.getDescriptionById(id);
        if (!description) {
            return res.status(404).json({
                success: false,
                message: 'Description not found',
            });
        }
        sendSuccessResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Description fetched successfully',
            data: description,
        });
    }
);

const updateDescriptionController = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const descriptionData: IDescription = req.body;
        const description = await descriptionServices.updateDescription(id, descriptionData);
        if (!description) {
            return res.status(404).json({
                success: false,
                message: 'Description not found',
            });
        }
        sendSuccessResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Description updated successfully',
            data: description,
        });
    }
);

const deleteDescriptionController = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const description = await descriptionServices.deleteDescription(id);
        if (!description) {
            return res.status(404).json({
                success: false,
                message: 'Description not found',
            });
        }
        sendSuccessResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Description deleted successfully',
            data: description,
        });
    }
);


export const descriptionController = {
    createDescriptionController,
    getDescriptionsController,
    getDescriptionByIdController,
    updateDescriptionController,
    deleteDescriptionController
}