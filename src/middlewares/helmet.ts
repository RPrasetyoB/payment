import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import helmet from "@fastify/helmet";

const helmetApp = async (fastify: FastifyInstance) => {
  await fastify.register(helmet, { contentSecurityPolicy: false });
};

export default helmetApp;
