import { model, Schema } from "mongoose";
import { IProject } from "./project.interface";

const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    repo: { type: String, required: true },
    live: { type: String, required: true },
    thumbnail: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: String, required: true }],
},
    {
        timestamps: true,
    }
)



export const ProjectModel = model<IProject>('Project', projectSchema);