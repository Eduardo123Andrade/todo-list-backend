import jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { environmentKeys } from "../config";
import { SessionTypeEnum, UserData } from '../interface';
import { Session } from '../models';
import { SessionData } from './../interface/session.interface';

const generateToken = (
  userId: string,
  expires: Date,
  type: SessionTypeEnum,
  secret = environmentKeys.jwtSecret ?? ""
) => {
  const milliseconds = 1000;
  const expiresInMinutes = expires.valueOf() / milliseconds;

  const payload = {
    sub: userId,
    exp: expiresInMinutes,
    type,
  };
  return jwt.sign(payload, secret);
};

const saveToken = async (sessionData: Session): Promise<Session> => {
  const data = sessionData;

  const repository = getRepository(Session);
  const session = repository.create(data);
  const result = await repository.save(session);

  return result;
};

const getSessionByTokenAndUserId = async (
  token: string,
  userId: string
): Promise<Session> => {
  const repository = getRepository(Session);
  const session = await repository.findOne({ where: { token, user: userId } });

  // if (!session) throw new CustomError(httpStatus.NOT_FOUND, 'Session not found')
  if (!session) throw new Error()

  return session;
};

const generateAuthToken = async (user: UserData) => {
  const minutesInMilliseconds = 60000;

  const dateMoment = new Date();
  const expiresDate = new Date(
    dateMoment.valueOf() - dateMoment.getTimezoneOffset() * minutesInMilliseconds
  );

  const hoursToExpires = 12;
  expiresDate.setHours(expiresDate.getHours() + hoursToExpires);
  const token = generateToken(user.id, expiresDate, SessionTypeEnum.ACCESS);
  const data: SessionData = {
    token,
    expiresDate,
    user: user,
    type: SessionTypeEnum.ACCESS,
  };
  const savedToken = await saveToken(data as Session);

  return {
    access: {
      token: savedToken.token,
      expires: savedToken.expiresDate,
    },
  };
};


export const SessionService = {
  getSessionByTokenAndUserId,
  generateAuthToken
}