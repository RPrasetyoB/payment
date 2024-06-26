import { FastifyRequest, FastifyReply } from "fastify";
import errorCatchPlugin from "../middlewares/errorHandler";
import Joi from "joi";
import { userLoginService, userRegistrationService } from "../services/authService";

const userRegisterSchema = Joi.object({
  name: Joi.string().min(3).required(),
  password: Joi.string().min(6).required(),
});

const userLoginSchema = Joi.object({
  id: Joi.string().required(),
  password: Joi.string().required(),
});

// ------ Create user ------
const userRegister = async (req: FastifyRequest, res: FastifyReply) => {
  const { name, password } = req.body as { name: string; password: string };
  try {
    const { error } = userRegisterSchema.validate(req.body);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const result = await userRegistrationService(name, password);
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

// ------ Login user ------
const userLogin = async (req: FastifyRequest, res: FastifyReply) => {
  const { id, password } = req.body as { id: string; password: string };
  try {
    const { error } = userLoginSchema.validate(req.body);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const result = await userLoginService(id, password);
    if (result?.success) {
      res.status(200).send({
        success: true,
        message: result.message,
        token: result.data,
      });
    }
  } catch (error: any) {
    errorCatchPlugin(error, req, res);
  }
};

export { userRegister, userLogin };
