import { createPaymentTransfer, createWithdrawal, getAllPaymentHistory } from "../../../controllers/payment";
import { FastifyInstance } from "fastify";
import authentication from "../../../middlewares/authentication";

const paymentRouter = async (fastify: FastifyInstance) => {
  fastify.get("/history", { preHandler: authentication }, getAllPaymentHistory);
  fastify.post("/send", { preHandler: authentication }, createPaymentTransfer);
  fastify.post("/withdraw", { preHandler: authentication }, createWithdrawal);
};

export default paymentRouter;
