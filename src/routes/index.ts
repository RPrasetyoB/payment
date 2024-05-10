import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import v1Router from "./v1";

const router = async (fastify: FastifyInstance) => {
  fastify.get("/", async (req: FastifyRequest, res: FastifyReply) => {
    return {
      success: true,
      message: "Welcome to Renaldi Payment API",
      version: "1.0.0",
    };
  });

  fastify.setErrorHandler((error: Error, req: FastifyRequest, res: FastifyReply) => {
    res.status(500).send({ success: false, message: error.message });
  });

  fastify.register(v1Router, { prefix: "/api/v1" });
};

export default router;
