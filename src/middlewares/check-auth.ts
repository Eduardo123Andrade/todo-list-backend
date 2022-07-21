import { SessionService } from './../service/session.service';
import { Request, Response } from "express";
import passport from "passport";
import { UserData } from "../interface";

const verifyCallback = (
  req: Request,
  resolve: Function,
  reject: Function
) => async (err: Error, user: UserData, info: any) => {
  const { authorization } = req.headers;

  console.log({
    err,
    info, 
    user,
    authorization
  })

  if (err || info || !user || !authorization) {
    return reject(
      // new AuthError(httpStatus.UNAUTHORIZED, "Usuario não autenticado")
      new Error("Usuario não autenticado")
    );
  }
  const token = authorization.split(" ")[1];

  let id = getUserId(user);
  if (id) {
    let session = await SessionService.getSessionByTokenAndUserId(token, id);

    if (session) {
      const date = new Date();
      const sessionExpiresDate = new Date(session.expiresDate);

      if (sessionExpiresDate < date) {
        // return reject(new AuthError(httpStatus.UNAUTHORIZED, "Token expirado"));
        return reject(new Error('error test'));
      }
    }
  }

  req.user = user;

  resolve();
};

const getUserId = (user: UserData): string => user.id;

export const auth = async (req: Request, res: Response, next: Function) => {
  return new Promise((resolve, reject) => {
    passport.authenticate(
      "jwt",
      { session: false },
      verifyCallback(req, resolve, reject)
    )(req, res, next);
  })
    .then(() => next())
    .catch((err) => next(err));
};
