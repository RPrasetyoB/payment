import jwt, { JwtPayload } from "jsonwebtoken";
import JWT_SIGN from "../config/jwt/jwt";
import { FastifyRequest } from "fastify";

export const getToken = (req: FastifyRequest): JwtPayload | null => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return null;
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SIGN!) as JwtPayload;
    return decoded;
  } catch (error) {
    return null;
  }
};

export const loggedUser = (decodedToken: JwtPayload | null) => {
  return {
    userId: decodedToken?.id,
  };
};
