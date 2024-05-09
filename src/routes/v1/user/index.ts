import express from "express";
import { getAllUser, getUserProfileByToken } from "../../../controllers/user";
import authentication from "../../../middlewares/authentication";

const userRouter = express.Router();

userRouter.get("/profile", authentication, getUserProfileByToken);
userRouter.get("/", getAllUser);

export default userRouter;
