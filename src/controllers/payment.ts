import { FastifyRequest, FastifyReply } from "fastify";
import errorCatchPlugin from "../middlewares/errorHandler";
import Joi from "joi";
import { getToken } from "../utils/decodedToken";
import {
  completedPaymentTransferService,
  completedWithdrawService,
  createPaymentTransferService,
  createWithdrawService,
  getPaymentHistoryService,
  processingPaymentTransferService,
  processingWithdrawService,
} from "../services/paymentService";

const createPaymentTransferSchema = Joi.object({
  payment_account_id: Joi.number().required(),
  amount: Joi.number().required(),
  currency: Joi.string().required(),
  to_address: Joi.string().required(),
});

const createWithdrawalSchema = Joi.object({
  payment_account_id: Joi.number().required(),
  amount: Joi.number().required(),
  currency: Joi.string().required(),
});

// ------ create payment transfer ------
const createPaymentTransfer = async (req: FastifyRequest, res: FastifyReply) => {
  const { payment_account_id, amount, currency, to_address } = req.body as {
    payment_account_id: number;
    amount: number;
    currency: string;
    to_address: string;
  };
  const token = getToken(req);
  try {
    const { error } = createPaymentTransferSchema.validate(req.body);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const result = await createPaymentTransferService(token, payment_account_id, amount, currency, to_address);
    if (result?.success) {
      res.status(200).send({
        success: true,
        message: result?.message,
        data: result?.data,
      });
      setTimeout(async () => {
        await processingPaymentTransferService(result.data.id);
      }, 5000);
      setTimeout(async () => {
        await completedPaymentTransferService(result.data.id);
      }, 30000);
    }
  } catch (error: any) {
    errorCatchPlugin(error, req, res);
  }
};

// ------ create withdrawal ------
const createWithdrawal = async (req: FastifyRequest, res: FastifyReply) => {
  const { payment_account_id, amount, currency } = req.body as {
    payment_account_id: number;
    amount: number;
    currency: string;
  };
  const token = getToken(req);
  try {
    const { error } = createWithdrawalSchema.validate(req.body);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const result = await createWithdrawService(token, payment_account_id, amount, currency);
    if (result?.success) {
      res.status(200).send({
        success: true,
        message: result?.message,
        data: result?.data,
      });
      setTimeout(async () => {
        await processingWithdrawService(result.data.id);
      }, 5000);
      setTimeout(async () => {
        await completedWithdrawService(result.data.id);
      }, 30000);
    }
  } catch (error: any) {
    errorCatchPlugin(error, req, res);
  }
};

// ------ get user's payment history list ------
const getAllPaymentHistory = async (req: FastifyRequest, res: FastifyReply) => {
  const token = getToken(req);
  try {
    const result = await getPaymentHistoryService(token);
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

export { createPaymentTransfer, createWithdrawal, getAllPaymentHistory };
