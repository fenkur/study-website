import { Router } from 'express';
import { signUp, signIn } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/register', signUp);
authRouter.post('/sign-in', signIn);

export default authRouter;