import cors from "@fastify/cors";
import { FastifyInstance } from "fastify";

const corsMiddleware = async (app: FastifyInstance) => {
  await app.register(cors, {
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });
};

export default corsMiddleware;
