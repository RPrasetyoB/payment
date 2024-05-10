import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/standardError";

const postCreateTransfer = async (
  userId: string,
  paymentAccountId: number,
  amount: number,
  currency: string,
  to: string
) => {
  try {
    const newTransfer = await prisma.paymentHistory.create({
      data: {
        user_id: userId,
        payment_account_id: paymentAccountId,
        transaction_type: "transfer",
        amount: amount,
        currency: currency,
        to_address: to,
        status: "started",
      },
    });

    return newTransfer;
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  } finally {
    await disconnectDB();
  }
};

const putTransactionProcessing = async (id: number) => {
  try {
    const updateTransfer = await prisma.paymentHistory.update({
      where: { id: id },
      data: {
        status: "in-progress",
      },
    });

    if (!updateTransfer) {
      throw new ErrorHandler({
        success: false,
        status: 404,
        message: "Transaction not found",
      });
    }

    return updateTransfer;
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  } finally {
    await disconnectDB();
  }
};

const putTransactionCompleted = async (id: number) => {
  try {
    const updateTransfer = await prisma.paymentHistory.update({
      where: { id: id },
      data: {
        status: "completed",
      },
    });

    if (!updateTransfer) {
      throw new ErrorHandler({
        success: false,
        status: 404,
        message: "Transaction not found",
      });
    }

    return updateTransfer;
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  } finally {
    await disconnectDB();
  }
};

const postCreateWithdraw = async (userId: string, paymentAccountId: number, amount: number, currency: string) => {
  try {
    const newWithdraw = await prisma.paymentHistory.create({
      data: {
        user_id: userId,
        payment_account_id: paymentAccountId,
        transaction_type: "withdraw",
        amount: amount,
        currency: currency,
        status: "started",
      },
    });

    return newWithdraw;
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  } finally {
    await disconnectDB();
  }
};

const getAccountList = async (userId: string) => {
  try {
    const accountList = await prisma.paymentAccount.findMany({
      where: {
        user_id: userId,
      },
    });
    return accountList;
  } catch (error: any) {
    console.error(error);
    return null;
  } finally {
    await disconnectDB();
  }
};

const deleteAccount = async (id: number) => {
  try {
    const account = await prisma.paymentAccount.delete({
      where: {
        id: id,
      },
    });
    return account;
  } catch (error: any) {
    console.error(error);
    return null;
  } finally {
    await disconnectDB();
  }
};

export { postCreateTransfer, putTransactionProcessing, putTransactionCompleted, postCreateWithdraw };
