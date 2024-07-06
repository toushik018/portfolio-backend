import { IProject } from "./project.interface";
import { ProjectModel } from "./project.model";

const createProject = async (projectData: IProject): Promise<IProject> => {
    const project = new ProjectModel(projectData);
    return await project.save();
};

const getProjects = async (): Promise<IProject[]> => {
    return await ProjectModel.find().exec();
}

const getProjectById = async (id: string): Promise<IProject | null> => {
    return await ProjectModel.findById(id).exec();
};

const updateProject = async (id: string, projectData: IProject): Promise<IProject | null> => {
    return await ProjectModel.findByIdAndUpdate(id, projectData, { new: true }).exec();
};

const deleteProject = async (id: string): Promise<IProject | null> => {
    return await ProjectModel.findByIdAndDelete(id).exec();
};

export const projectService = {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject
}