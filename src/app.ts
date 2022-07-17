import express from "express";
import "express-async-errors";
import "./database/connection";
import { router } from "./routes/index";
import Cors from "cors";
import { errorHandler } from "./errors/handler";
import { corsConfig } from "./config/cors.config";

const app = express();

app.use(express.json());

app.use(Cors(corsConfig));

app.use(router);
app.use(errorHandler);

export default app;

