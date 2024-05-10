import { Request, Response, NextFunction } from "express";
import { userLoginnService, userRegistrationService } from "../services/authService";

// ------ Create user ------
const userRegister = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, password } = req.body;
    const result = await userRegistrationService(name, password);
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

// ------ login user ------
const userLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id, password } = req.body;
    const result = await userLoginnService(id, password);
    if (result.success) {
      res.status(200).json({
        success: true,
        message: result.message,
        token: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};

export { userRegister, userLogin };
