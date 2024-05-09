import cors from "cors";
import { Application } from "express";


const corsMiddleware = (app: Application) => {
    app.use(cors());
    app.options('*', cors());
};

export default corsMiddleware;