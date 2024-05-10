import { FastifyRequest, FastifyReply } from "fastify";
import errorCatchPlugin from "../middlewares/errorHandler";
import { getToken } from "../utils/decodedToken";
import { getUserDetailService, getUserListService } from "../services/userService";

// ------ get user list ------
const getAllUser = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    const result = await getUserListService();
    if (result.success) {
      res.status(200).send({
        success: true,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error: any) {
    errorCatchPlugin(error, req, res);
  }
};

// ------ get user ------
const getUserProfileByToken = async (req: FastifyRequest, res: FastifyReply) => {
  const token = getToken(req);
  try {
    const result = await getUserDetailService(token);
    if (result.success) {
      res.status(200).send({
        success: true,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error: any) {
    errorCatchPlugin(error, req, res);
  }
};

export { getAllUser, getUserProfileByToken };
