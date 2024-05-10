import { userLogin, userRegister } from "../../../controllers/auth";
import { FastifyInstance, FastifyReply, FastifyRequest, FastifyError } from "fastify";

const authRouter = async (fastify: FastifyInstance) => {
  fastify.post("/login", async (req: FastifyRequest, res: FastifyReply) => {
    await userLogin(req, res);
  });

  fastify.post("/register", async (req: FastifyRequest, res: FastifyReply) => {
    await userRegister(req, res);
  });
};

export default authRouter;
