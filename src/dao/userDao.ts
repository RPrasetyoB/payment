import { disconnectDB, prisma } from "../config/db/dbConnection";
import { nanoid } from "../utils/nanoId";
import ErrorHandler from "../utils/standardError";

const getAllUser = async () => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        PaymentAccounts: true,
        PaymentHistories: true,
      },
    });
    return users;
  } catch (error: any) {
    console.error(error);
    return null;
  } finally {
    await disconnectDB();
  }
};

const postCreateUser = async (name: string, password: string) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        id: nanoid(),
        name: name,
        password: password,
      },
    });

    return newUser;
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

const getUser = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  } catch (error: any) {
    console.error(error);
    return null;
  } finally {
    await disconnectDB();
  }
};

const getProfile = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        PaymentAccounts: true,
        PaymentHistories: true,
      },
    });
    return user;
  } catch (error: any) {
    console.error(error);
    return null;
  } finally {
    await disconnectDB();
  }
};

const putUpdateUser = async (
  user_id: string,
  name: string,
  password: string
) => {
  let userDataToUpdate: any = { name: name };
  if (password !== undefined && password !== null) {
    userDataToUpdate.password = password;
  }
  try {
    const updateUser = await prisma.user.update({
      where: { id: user_id },
      data: userDataToUpdate,
    });
    return updateUser;
  } catch (error: any) {
    console.error(error);
    return null;
  } finally {
    await disconnectDB();
  }
};

export { getAllUser, postCreateUser, getUser, getProfile, putUpdateUser };
