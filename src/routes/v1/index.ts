import authRouter from "./auth";
import userRouter from "./user";
import paymentRouter from "./payment";
import { FastifyInstance } from "fastify";
import paymentAccountRouter from "./paymentAccount";

const v1Router = async (fastify: FastifyInstance) => {
  fastify.register(authRouter, { prefix: "/auth" });
  fastify.register(userRouter, { prefix: "/user" });
  fastify.register(paymentAccountRouter, { prefix: "/payment-account" });
  fastify.register(paymentRouter, { prefix: "/payment" });
};

export default v1Router;
