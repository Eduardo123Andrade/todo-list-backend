import { UserView } from './../View/userView';
import { SessionService } from './../service/session.service';
import { Request, Response } from "express";
import httpStatus from "http-status";
import { AuthService } from "../service";

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await AuthService.login(email, password);

  if (!user)
    // throw new AuthError()
    throw new Error()

  const token = await SessionService.generateAuthToken(user);

  const formattedUser = UserView.formatUser(user)

  return res.status(httpStatus.OK).json({ user: formattedUser, token });
};

export const AuthController = {
  login,
};
