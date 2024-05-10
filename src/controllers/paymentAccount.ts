import { Request, Response, NextFunction } from "express";
import { getToken, loggedUser } from "../utils/decodedToken";
import {
  createPaymentAccountService,
  deletePaymentAccountService,
  getPaymentAccountListService,
} from "../services/paymentAccountService";

// ------ create payment account ------
const createPaymentAccount = async (req: Request, res: Response, next: NextFunction) => {
  const { account_name, account_number, type } = req.body;
  const token = getToken(req);
  try {
    const result = await createPaymentAccountService(token, account_name, account_number, type);
    if (result.success) {
      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};

// ------ get user's payment account list ------
const getAllAccount = async (req: Request, res: Response, next: NextFunction) => {
  const token = getToken(req);
  try {
    const result = await getPaymentAccountListService(token);
    if (result.success) {
      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};

// ------ delete user's payment account ------
const deletePaymentAccount = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const result = await deletePaymentAccountService(parseInt(id));
    if (result.success) {
      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};

export { createPaymentAccount, getAllAccount, deletePaymentAccount };
