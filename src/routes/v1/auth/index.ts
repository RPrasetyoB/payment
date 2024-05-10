import { userLogin, userRegister } from "../../../controllers/auth";
import { FastifyInstance } from "fastify";

const authRouter = async (fastify: FastifyInstance) => {
  fastify.post("/login", userLogin);
  fastify.post("/register", userRegister);
};

export default authRouter;
