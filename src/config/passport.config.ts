import { UserService } from '../service';
import { SessionTypeEnum } from '../interface';
import {
  ExtractJwt,
  Strategy as JwtStrategy,
  VerifiedCallback
} from "passport-jwt";
import { environmentKeys } from "./env.config";

const jwtOptions = {
  secretOrKey: environmentKeys.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload: any, done: VerifiedCallback) => {
  try {
    if (payload.type !== SessionTypeEnum.ACCESS)
      // throw new CustomError(httpStatus.IM_A_TEAPOT, "Invalid token type");
      throw new Error();

    const user = await UserService.findUserById(payload.sub);

    done(null, user);
  } catch (err) {
    done(err, false);
  }
};

export const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);
