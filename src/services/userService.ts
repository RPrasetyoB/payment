import ErrorHandler from "../utils/standardError";
import { getAllUser, getProfile, getUser, putUpdateUser } from "../dao/userDao";
import bcryptjs from "bcryptjs";
import { loggedUser } from "../utils/decodedToken";
import { JwtPayload } from "jsonwebtoken";

// ------ get user detail ------
const getUserDetailService = async (token: JwtPayload | null) => {
  const { userId } = loggedUser(token);
  try {
    const user = await getProfile(userId);
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

// ------ get all user detail ------
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

export { getUserDetailService, getUserListService };
