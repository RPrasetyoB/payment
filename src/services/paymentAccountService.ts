import { JwtPayload } from "jsonwebtoken";
import { deleteAccount, getAccountList, postCreateAccount } from "../dao/paymentAccountDao";
import ErrorHandler from "../utils/standardError";
import { loggedUser } from "../utils/decodedToken";

// ------ create payment account ------
const createPaymentAccountService = async (
  token: JwtPayload | null,
  accountName: string,
  accountNumber: string,
  type: string
) => {
  const { userId } = loggedUser(token);
  try {
    const createAccount = await postCreateAccount(userId, accountName, accountNumber, type);
    return {
      success: true,
      message: "Payment account added successfully",
      data: createAccount,
    };
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

// ------ get user's all payment account ------
const getPaymentAccountListService = async (token: JwtPayload | null) => {
  const { userId } = loggedUser(token);
  try {
    const accountList = await getAccountList(userId);
    if (!accountList || accountList?.length === 0) {
      throw new ErrorHandler({
        success: false,
        status: 404,
        message: "No payment accounts found. Please register a payment account.",
      });
    }
    return {
      success: true,
      message: "Payment account list retrieved successfully",
      data: accountList,
    };
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

// ------ delete payment account ------
const deletePaymentAccountService = async (id: number) => {
  try {
    const delAccount = await deleteAccount(id);
    if (!delAccount) {
      throw new ErrorHandler({
        success: false,
        status: 404,
        message: "payment account not found.",
      });
    }
    return {
      success: true,
      message: "Payment account deleted successfully",
      data: delAccount,
    };
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

export { createPaymentAccountService, getPaymentAccountListService, deletePaymentAccountService };
