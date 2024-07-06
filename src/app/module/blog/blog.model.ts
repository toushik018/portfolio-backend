// src/app/module/blog/blog.model.ts
import { Schema, model } from 'mongoose';
import { IBlog } from './blog.interface';


const blogSchema = new Schema<IBlog>(
    {
        title: { type: String, required: true },
        summary: { type: String, required: true },
        publishedAt: { type: Date },
        content: { type: String, required: true },
        images: [{ type: String, required: false }]
    },
    {
        timestamps: true,
    }
);

export const BlogModel = model<IBlog>('Blog', blogSchema);
