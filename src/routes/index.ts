import { Router } from "express";
import { router as routerv1 } from "./v1/index";

export const router = Router();

router.use('/v1', routerv1);
