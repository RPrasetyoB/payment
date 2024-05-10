import ErrorHandler from "../utils/standardError";
import { getUser, postCreateUser } from "../dao/userDao";
import bcryptjs from "bcryptjs";
import * as jwt from "jsonwebtoken";
import JWT_SIGN from "../config/jwt/jwt";

// ------ Register ------
const userRegistrationService = async (name: string, password: string) => {
  try {
    const hashedPassword = await bcryptjs.hash(password, 10);
    const createUser = await postCreateUser(name, hashedPassword);
    return {
      success: true,
      message: "User registered successfully",
      data: createUser,
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

// ------ Login ------
const userLoginService = async (id: string, password: string) => {
  try {
    const user = await getUser(id);
    if (!user) {
      throw new ErrorHandler({
        success: false,
        message: "ID or password invalid",
        status: 401,
      });
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password || "");
    if (!isPasswordValid) {
      throw new ErrorHandler({
        success: false,
        message: "ID or password invalid",
        status: 401,
      });
    }
    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
      },
      JWT_SIGN!
    );
    return {
      success: true,
      message: "Successfully logged in",
      data: token,
    };
  } catch (error: any) {
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

export { userRegistrationService, userLoginService };
