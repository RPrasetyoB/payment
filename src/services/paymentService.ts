import { JwtPayload } from "jsonwebtoken";
import ErrorHandler from "../utils/standardError";
import { loggedUser } from "../utils/decodedToken";
import {
  getPaymentHistoryList,
  postCreateTransfer,
  postCreateWithdraw,
  putTransactionCompleted,
  putTransactionProcessing,
} from "../dao/paymentDao";

// ------ create payment transfer ------
const createPaymentTransferService = async (
  token: JwtPayload | null,
  payment_account_id: number,
  amount: number,
  currency: string,
  to_address: string
) => {
  const { userId } = loggedUser(token);
  try {
    const createTransfer = await postCreateTransfer(userId, payment_account_id, amount, currency, to_address);
    console.log("Transaction in progress, status:", createTransfer.status);
    if (createTransfer) {
      return {
        success: true,
        message: "Payment / transaction added successfully",
        data: createTransfer,
      };
    }
  } catch (error: any) {
    console.error("transaction processing failed:", error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

// ------ update payment progress ------
const processingPaymentTransferService = async (id: number) => {
  try {
    const updateTransfer = await putTransactionProcessing(id);
    console.log("Transaction in progress, status:", updateTransfer.status);
    console.log("Please wait, this process may take up to 30 seconds to complete.");
    if (updateTransfer) {
      return {
        success: true,
        message: "Payment / transaction updated successfully",
        data: updateTransfer,
      };
    }
  } catch (error: any) {
    console.error("transaction processing failed:", error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

// ------ update payment progress ------
const completedPaymentTransferService = async (id: number) => {
  try {
    const updateTransfer = await putTransactionCompleted(id);
    if (updateTransfer) {
      console.log("Transaction completed, status:", updateTransfer.status);
      return {
        success: true,
        message: "Payment / transaction completed successfully",
        data: updateTransfer,
      };
    }
  } catch (error: any) {
    console.error("transaction processing failed:", error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

// ------ create withdraw ------
const createWithdrawService = async (
  token: JwtPayload | null,
  payment_account_id: number,
  amount: number,
  currency: string
) => {
  const { userId } = loggedUser(token);
  try {
    const createWithdraw = await postCreateWithdraw(userId, payment_account_id, amount, currency);
    if (createWithdraw) {
      console.log("Withdrawal in progress, status:", createWithdraw.status);
      return {
        success: true,
        message: "Withdrawal added successfully",
        data: createWithdraw,
      };
    }
  } catch (error: any) {
    console.error("transaction processing failed:", error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

// ------ update withdraw progress ------
const processingWithdrawService = async (id: number) => {
  try {
    const updateWithdraw = await putTransactionProcessing(id);
    if (updateWithdraw) {
      console.log("Withdrawal in progress, status:", updateWithdraw.status);
      console.log("Please wait, this process may take up to 30 seconds to complete.");
      return {
        success: true,
        message: "Withdrawal updated successfully",
        data: updateWithdraw,
      };
    }
  } catch (error: any) {
    console.error("transaction processing failed:", error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

// ------ update withdraw progress ------
const completedWithdrawService = async (id: number) => {
  try {
    const updateWithdraw = await putTransactionCompleted(id);
    if (updateWithdraw) {
      console.log("Withdrawal completed, status:", updateWithdraw.status);
      return {
        success: true,
        message: "Withdrawal completed successfully",
        data: updateWithdraw,
      };
    }
  } catch (error: any) {
    console.error("transaction processing failed:", error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

// ------ get all payment history ------
const getPaymentHistoryService = async (token: JwtPayload | null) => {
  const { userId } = loggedUser(token);
  try {
    const paymentList = await getPaymentHistoryList(userId);
    return {
      success: true,
      message: "Payment history list retrieved successfully",
      data: paymentList,
    };
  } catch (error: any) {
    console.error("transaction processing failed:", error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

export {
  createPaymentTransferService,
  processingPaymentTransferService,
  completedPaymentTransferService,
  createWithdrawService,
  processingWithdrawService,
  completedWithdrawService,
  getPaymentHistoryService,
};
