import ErrorHandler from "../utils/standardError";
import { getAllUser, getProfile, getUser, putUpdateUser } from "../dao/userDao";
import bcryptjs from "bcryptjs";
import { loggedUser } from "../utils/decodedToken";
import { JwtPayload } from "jsonwebtoken";

// ------ update user ------
const updateUserService = async (
  user_id: string,
  token: JwtPayload | null,
  name: string,
  password: string
) => {
  if (name && name.length < 3) {
    throw new ErrorHandler({
      success: false,
      message: "Name must be at least 3 characters long",
      status: 400,
    });
  }
  if (password && password.length < 6) {
    throw new ErrorHandler({
      success: false,
      message: "Password must be at least 6 characters long",
      status: 400,
    });
  }
  const { userId } = loggedUser(token);
  if (user_id !== userId) {
    throw new ErrorHandler({
      success: false,
      message: "Unauthorized to update user",
      status: 401,
    });
  }
  try {
    const user = await getUser(user_id);
    if (!user) {
      throw new ErrorHandler({
        success: false,
        message: "user not found",
        status: 404,
      });
    }
    let hashedPassword = user.password;
    if (password) {
      hashedPassword = await bcryptjs.hash(password, 10);
    }
    const updateUser = await putUpdateUser(user_id, name, hashedPassword);

    return {
      success: true,
      message: "User updated successfully",
      data: updateUser,
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

const getUserByTokenService = async (user_id: string) => {
  try {
    const user = await getProfile(user_id);
    if (!user) {
      throw new ErrorHandler({
        success: false,
        message: "user not found",
        status: 404,
      });
    }
    return {
      success: true,
      message: "User retrieved successfully",
      data: user,
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

const getUserListService = async () => {
  try {
    const users = await getAllUser();
    if (users?.length === 0) {
      throw new ErrorHandler({
        success: false,
        message: "User list not found or empty list",
        status: 404,
      });
    }
    return {
      success: true,
      message: "User list retrieved successfully",
      data: users,
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

export { updateUserService, getUserByTokenService, getUserListService };
