import express from 'express';
import { userLogin, userRegister } from '../../../controllers/auth';

const authRouter = express.Router()

authRouter.post('/login', userLogin);
authRouter.post('/register', userRegister);

export default authRouter;