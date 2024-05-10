import express from "express";
import authRouter from "./auth";
import userRouter from "./user";
import authentication from "../../middlewares/authentication";
import paymentAccount from "./paymentAccount";

const v1Router = express.Router();

v1Router.use("/auth", authRouter);
v1Router.use("/user", userRouter);
v1Router.use("/payment-account", authentication, paymentAccount);

export default v1Router;
