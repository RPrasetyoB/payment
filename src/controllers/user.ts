import { Request, Response, NextFunction } from "express";
import {
  getUserByTokenService,
  getUserListService,
  updateUserService,
} from "../services/userService";
import { getToken, loggedUser } from "../utils/decodedToken";

// ------ get user list ------
const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getUserListService();
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

// ------ update user ------
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { name, password } = req.body;
  const token = getToken(req);
  try {
    const result = await updateUserService(id, token, name, password);
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

// ------ get user ------
const getUserProfileByToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = loggedUser(req.user!);
  try {
    const result = await getUserByTokenService(userId);
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

export { getAllUser, updateUser, getUserProfileByToken };
