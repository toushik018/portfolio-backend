// src/app/module/description/description.model.ts
import { Schema, model } from 'mongoose';
import { IDescription } from './description.inteface';



const descriptionSchema = new Schema<IDescription>(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

export const DescriptionModel = model<IDescription>('Description', descriptionSchema);
