// src/app/module/blog/blog.interface.ts
export interface IBlog {
    title: string;
    summary: string;
    publishedAt: Date;
    content: string;
    images: string[];
    createdAt?: Date;
    updatedAt?: Date;
}
