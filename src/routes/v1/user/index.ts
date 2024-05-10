import { FastifyInstance } from "fastify";
import { getAllUser, getUserProfileByToken } from "../../../controllers/user";
import authentication from "../../../middlewares/authentication";

const userRouter = async (fastify: FastifyInstance) => {
  fastify.get("/profile", { preHandler: authentication }, getUserProfileByToken);
  fastify.get("/", getAllUser);
};

export default userRouter;
