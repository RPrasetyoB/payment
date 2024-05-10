import { FastifyRequest, FastifyReply } from "fastify";
import { getToken } from "../utils/decodedToken";

declare module "fastify" {
  interface FastifyRequest {
    user?: User;
  }
}

const authentication = (req: FastifyRequest, res: FastifyReply, next: () => void) => {
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

export default authentication;
