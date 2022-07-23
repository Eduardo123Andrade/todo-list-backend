import { CustomError } from '../errors';
import { UserData } from '../interface';
import { encoder, ErrorData } from '../utils';
import { UserService } from './user.service';

export const login = async (email: string, password: string): Promise<UserData> => {
  const user = await UserService.findUserByEmail(email);

  const result = await encoder.verifyPassword(password, user.password);
  if (!result)
    throw new CustomError(ErrorData.AccessDenied.status, ErrorData.AccessDenied.message)

  return user;
};

export const AuthService = {
  login,
};
