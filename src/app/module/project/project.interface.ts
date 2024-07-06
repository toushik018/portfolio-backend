// src/app/module/project/project.interface.ts
export interface IProject {
    title: string;
    repo: string;
    live: string;
    thumbnail: string;
    description: string;
    tags: string[];
    createdAt?: Date;
    updatedAt?: Date;
}
