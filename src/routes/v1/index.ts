import { Router } from "express";
import { healthCheckRouter } from "./health-check.router";
import { todoRouter } from "./todo.router";
import { userRouter } from "./user.router";

export const router = Router();

router.use('/user', userRouter)
router.use('/health-check', healthCheckRouter)
router.use('/todo', todoRouter)