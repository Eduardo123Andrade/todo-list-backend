import { authRouter } from './auth.router';
import { Router } from "express";
import { healthCheckRouter } from "./health-check.router";
import { todoRouter } from "./todo.router";
import { userRouter } from "./user.router";
import { auth } from '../../middlewares';
import { docRouter } from './doc.router';

export const router = Router();

router.use('/auth', authRouter)
router.use('/documentation', docRouter)
router.use('/health-check', healthCheckRouter)
router.use('/user', userRouter)
router.use('/todo', auth,todoRouter)