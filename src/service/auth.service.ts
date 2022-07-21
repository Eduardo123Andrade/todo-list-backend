import { UserData } from 'src/interface';
import { encoder } from '../utils';
import { UserService } from './user.service';

export const login = async (email: string, password: string): Promise<UserData> => {
  const user = await UserService.findUserByEmail(email);

  const result = await encoder.verifyPassword(password, user.password);
  if (!result)
    throw new Error()

  return user;
};

export const AuthService = {
  login,
};
