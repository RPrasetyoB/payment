import { FastifyReply, FastifyRequest } from "fastify";
import ErrorHandler from "../utils/standardError";

const errorCatchPlugin = (err: ErrorHandler, req: FastifyRequest, res: FastifyReply) => {
  const status = err.status || 500;
  const message = err.message || "An error occurred";
  const success = err.success || false;

  res.status(status).send({ success, message });
};

export default errorCatchPlugin;
