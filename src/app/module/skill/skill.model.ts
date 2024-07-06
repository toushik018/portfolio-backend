import { Schema, model } from 'mongoose';
import { ISkill } from './skill.interface';

const skillSchema = new Schema<ISkill>({
    title: { type: String, required: true },
    url: { type: String, required: true },
    category: { type: String, required: true },
}, {
    timestamps: true,
});

export const Skill = model<ISkill>('Skill', skillSchema);
