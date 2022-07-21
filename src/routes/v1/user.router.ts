import { Router } from "express";
import { UserController } from '../../controllers';
import { auth, validateData } from './../../middlewares';
import {
  validateCreateUserData,
  validateUpdateUserData,
  validateUpdateUsersPassword
} from './../../validations/user.validation';

export const userRouter = Router();

userRouter.post('/create-user', validateData(validateCreateUserData), UserController.createUser)

userRouter.put('/update-user', auth, validateData(validateUpdateUserData), UserController.updateUser)

userRouter.put('/update-password', auth, validateData(validateUpdateUsersPassword), UserController.updatePassword)
