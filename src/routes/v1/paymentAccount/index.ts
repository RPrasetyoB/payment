import { createPaymentAccount, deletePaymentAccount, getAllAccount } from "../../../controllers/paymentAccount";
import { FastifyInstance } from "fastify";
import authentication from "../../../middlewares/authentication";

const paymentAccountRouter = async (fastify: FastifyInstance) => {
  fastify.post("/", { preHandler: authentication }, createPaymentAccount);
  fastify.get("/", { preHandler: authentication }, getAllAccount);
  fastify.delete("/:id", { preHandler: authentication }, deletePaymentAccount);
};

export default paymentAccountRouter;
