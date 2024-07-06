/* eslint-disable no-unused-vars */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

import httpStatus from 'http-status';
import cookieParser from 'cookie-parser';
import router from './app/routes';



const app: Application = express();
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001', 'https://tayeb-hossain.vercel.app', 'https://portfolio-dashboard-green.vercel.app'],
    credentials: true
}));
app.use(cookieParser());

// parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);
app.get('/', (req: Request, res: Response) => {
    res.send({
        Message: "My portfolio server is running"
    })
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "API Not Found",
        error: {
            path: req.originalUrl,
            message: "Your API is not available"
        }
    })
})

export default app;