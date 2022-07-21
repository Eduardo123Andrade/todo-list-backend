import { ValidateError } from '../utils';
import * as Yup from 'yup';

export const validateCreateUserData = Yup.object().shape({
    name: Yup.string().required(ValidateError.NAME_IS_REQUIRED),
    email: Yup.string().required(ValidateError.EMAIL_IS_REQUIRED),
    password: Yup.string().required(ValidateError.PASSWORD_IS_REQUIRED),
})

export const validateUpdateUserData = Yup.object().shape({
  name: Yup.string().required(ValidateError.NAME_IS_REQUIRED),
  email: Yup.string().required(ValidateError.EMAIL_IS_REQUIRED),
})

export const validateUpdateUsersPassword = Yup.object().shape({
  oldPassword: Yup.string().required(ValidateError.OLD_PASSWORD_IS_REQUIRED) ,
  newPassword: Yup.string().required(ValidateError.NEW_PASSWORD_IS_REQUIRED) ,
})