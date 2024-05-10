import { FastifyRequest, FastifyReply } from "fastify";
import errorCatchPlugin from "../middlewares/errorHandler";
import Joi from "joi";
import { getToken } from "../utils/decodedToken";
import {
  createPaymentAccountService,
  deletePaymentAccountService,
  getPaymentAccountListService,
} from "../services/paymentAccountService";

const createPaymentAccountSchema = Joi.object({
  account_name: Joi.string().required(),
  account_number: Joi.string().required(),
  type: Joi.string().required(),
});

// ------ create payment account ------
const createPaymentAccount = async (req: FastifyRequest, res: FastifyReply) => {
  const { account_name, account_number, type } = req.body as {
    account_name: string;
    account_number: string;
    type: string;
  };
  const token = getToken(req);
  try {
    const { error } = createPaymentAccountSchema.validate(req.body);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const result = await createPaymentAccountService(token, account_name, account_number, type);
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

// ------ get user's payment account list ------
const getAllAccount = async (req: FastifyRequest, res: FastifyReply) => {
  const token = getToken(req);
  try {
    const result = await getPaymentAccountListService(token);
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

// ------ delete user's payment account ------
const deletePaymentAccount = async (req: FastifyRequest, res: FastifyReply) => {
  const { id } = req.params as { id: string };
  try {
    const result = await deletePaymentAccountService(parseInt(id));
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

export { createPaymentAccount, getAllAccount, deletePaymentAccount };
