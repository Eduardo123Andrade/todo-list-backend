import { Status } from '../interface'
import { ValidateError } from '../utils'
import * as Yup from 'yup'

const todoListShape = Yup.array().of(
  Yup.object().shape({
    title: Yup.string().required(ValidateError.TITLE_IS_REQUIRED),
    description: Yup.string().required(ValidateError.DESCRIPTION_IS_REQUIRED),
    status: Yup.string()
      .oneOf([Status.TODO, Status.DONE, Status.ABANDONED], ValidateError.ACCEPT_STATUS_VALUE)
      .required(ValidateError.STATUS_IS_REQUIRED)
  })
)

export const validateEditTask = Yup.object().shape({
  title: Yup.string().required(ValidateError.TITLE_IS_REQUIRED),
  description: Yup.string().required(ValidateError.DESCRIPTION_IS_REQUIRED),
  status: Yup.string()
    .oneOf([Status.TODO, Status.DONE, Status.ABANDONED], ValidateError.ACCEPT_STATUS_VALUE)
    .required(ValidateError.STATUS_IS_REQUIRED)
})

export const validateCreateToDoList = Yup.object().shape({
  toDoList: todoListShape.required(ValidateError.TODO_LIST_IS_REQUIRED)
});
