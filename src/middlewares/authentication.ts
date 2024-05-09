import { Request, Response, NextFunction } from 'express';
import { getToken } from '../utils/decodedToken';

declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}

const auth = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const decodedToken = getToken(req) as ExtendedJwtPayload;
        if (!decodedToken) {
            return res.status(401).send({ message: "Unauthorized, please login" });
        }
        try {
            req.user = decodedToken;
            next();
        } catch (error) {
            res.status(401).send({ message: "Invalid Access" });
        }
    };
};

const authentication = auth();

export default authentication;