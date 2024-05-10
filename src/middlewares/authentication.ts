import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import { getToken } from "../utils/decodedToken";

declare module "fastify" {
  interface FastifyRequest {
    user?: User;
  }
}

const auth = () => {
  return async (req: FastifyRequest, res: FastifyReply, next: () => void) => {
    const decodedToken = getToken(req) as User;
    if (!decodedToken) {
      res.code(401).send({ message: "Unauthorized, please login" });
      return;
    }
    try {
      req.user = decodedToken;
      next();
    } catch (error) {
      res.code(401).send({ message: "Invalid Access" });
    }
  };
};

const authentication = (app: FastifyInstance) => {
  app.addHook("onRequest", async (request: FastifyRequest, reply: FastifyReply) => {
    auth()(request, reply, () => {});
  });
};

export default authentication;
