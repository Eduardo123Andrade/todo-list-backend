import Cors from "cors";
import express from "express";
import "express-async-errors";
import Passport from "passport";
import { environmentKeys, jwtStrategy } from './config';
import { corsConfig } from "./config/cors.config";
import createConnection from "./database/connection";
import { errorHandler } from "./errors/handler";
import { router } from "./routes/index";

createConnection()
    .then(() => {
        if (environmentKeys.nodeEnv !== "test")
            console.log('Connected to DB')
    })
    .catch((error) => console.log("Something wrong", error));

const app = express();

app.use(express.json());

app.use(Cors(corsConfig));

app.use(Passport.initialize())
Passport.use('jwt', jwtStrategy)

app.use(router);
app.use(errorHandler);

export default app;

