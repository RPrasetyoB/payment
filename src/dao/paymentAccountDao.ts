import { access } from "fs";
import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/standardError";

const postCreateAccount = async (userId: string, accountName: string, accountNumber: string, type: string) => {
  try {
    const newAccount = await prisma.paymentAccount.create({
      data: {
        user_id: userId,
        account_name: accountName,
        account_number: accountNumber,
        type: type,
      },
    });

    return newAccount;
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

export { postCreateAccount, getAccountList, deleteAccount };
