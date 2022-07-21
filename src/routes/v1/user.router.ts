import { Router } from "express";
// import { validateCreateUserData, validateUpdateUserData } from '../../validations/v1/user';
import { UserController } from '../../controllers';
import { validateData } from './../../middlewares/validate';

export const userRouter = Router();

userRouter.get('/find-user-by-id/:userId', UserController.findUserById)

// userRouter.post('/create-user', validateData(validateCreateUserData), UserController.createUser)
userRouter.post('/create-user', UserController.createUser)

// userRouter.put('/update-user', validateData(validateUpdateUserData), UserController.updateUser)
userRouter.put('/update-user', UserController.updateUser)

// userRouter.put('/update-password', validateData(validateUpdateUsersPassword), UserController.updatePassword)
userRouter.put('/update-password', UserController.updatePassword)

userRouter.delete('/delete-user/:userId', UserController.deleteUser)
