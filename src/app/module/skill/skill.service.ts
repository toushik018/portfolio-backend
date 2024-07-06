import { Skill } from './skill.model';
import { ISkill } from './skill.interface';

// Create a new skill
const createSkill = async (skillData: ISkill): Promise<ISkill> => {
    const skill = new Skill(skillData);
    return await skill.save();
};

// Get all skills
const getSkills = async (): Promise<ISkill[]> => {
    return await Skill.find();
};

// Get a skill by ID
const getSkillById = async (id: string): Promise<ISkill | null> => {
    return await Skill.findById(id);
};

// Update a skill by ID
const updateSkill = async (id: string, skillData: Partial<ISkill>): Promise<ISkill | null> => {
    return await Skill.findByIdAndUpdate(id, skillData, { new: true });
};

// Delete a skill by ID
const deleteSkill = async (id: string): Promise<ISkill | null> => {
    return await Skill.findByIdAndDelete(id);
};

export const skillServices = {
    createSkill,
    getSkills,
    getSkillById,
    updateSkill,
    deleteSkill
};
