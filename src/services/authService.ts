import ErrorHandler from "../utils/standardError";
import { getUser, postCreateUser } from "../dao/userDao";
import bcryptjs from "bcryptjs";
import * as jwt from "jsonwebtoken";
import JWT_SIGN from "../config/jwt/jwt";

// ------ Register ------
const userRegistrationService = async (name: string, password: string) => {
  if (!name) {
    throw new ErrorHandler({
      success: false,
      message: "Name cannot be empty",
      status: 400,
    });
  }
  if (name.length < 3) {
    throw new ErrorHandler({
      success: false,
      message: "Name must be at least 3 characters long",
      status: 400,
    });
  }
  if (password.length < 6) {
    throw new ErrorHandler({
      success: false,
      message: "Password must be at least 6 characters long",
      status: 400,
    });
  }
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
const userLoginnService = async (id: string, password: string) => {
  if (!id) {
    throw new ErrorHandler({
      success: false,
      message: "id cannot be empty",
      status: 400,
    });
  }
  try {
    const user = await getUser(id);
    if (!user) {
      throw new ErrorHandler({
        success: false,
        message: "ID or password invalid",
        status: 401,
      });
    }
    const isPasswordValid = await bcryptjs.compare(
      password,
      user.password || ""
    );
    if (!isPasswordValid) {
      throw new ErrorHandler({
        success: false,
        message: "ID or password invalid",
        status: 401,
      });
    }
    const expirationTime = 60 * 60 * 24;
    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
      },
      JWT_SIGN!,
      { expiresIn: expirationTime }
    );
    return {
      success: true,
      message: "Successfully logged in",
      data: token,
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

export { userRegistrationService, userLoginnService };
