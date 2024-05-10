import authRouter from "./auth";
// import userRouter from "./user";
// import authentication from "../../middlewares/authentication";
// import paymentAccount from "./paymentAccount";
// import payment from "./payment";
import { FastifyInstance } from "fastify";

const v1Router = async (fastify: FastifyInstance) => {
  fastify.register(authRouter, { prefix: "/auth" });
  //   fastify.register(userRouter, { prefix: "/user" });
  //   fastify.register((fastify, opts, done) => {
  //     fastify.register(paymentAccount, { prefix: "/payment-account", onRequest: authentication });
  //     done();
  //   });
  //   fastify.register((fastify, opts, done) => {
  //     fastify.register(payment, { prefix: "/payment", onRequest: authentication });
  //     done();
  //   });
};

export default v1Router;
