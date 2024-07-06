// src/app/module/description/description.service.ts

import { IDescription } from './description.inteface';
import { DescriptionModel } from './description.model';

const createDescription = async (descriptionData: IDescription): Promise<IDescription> => {
    const description = new DescriptionModel(descriptionData);
    return await description.save();
};

const getDescriptions = async (): Promise<IDescription[]> => {
    return await DescriptionModel.find().exec();
};

const getDescriptionById = async (id: string): Promise<IDescription | null> => {
    return await DescriptionModel.findById(id).exec();
};

const updateDescription = async (id: string, descriptionData: IDescription): Promise<IDescription | null> => {
    return await DescriptionModel.findByIdAndUpdate(id, descriptionData, { new: true }).exec();
};

const deleteDescription = async (id: string): Promise<IDescription | null> => {
    return await DescriptionModel.findByIdAndDelete(id).exec();
};


export const descriptionServices = {
    createDescription,
    getDescriptions,
    getDescriptionById,
    updateDescription,
    deleteDescription
} 