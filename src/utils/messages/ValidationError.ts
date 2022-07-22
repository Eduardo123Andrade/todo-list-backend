import { Status } from "../../interface"

const VALIDATION_ERROR = 'Validation error'

const NAME_IS_REQUIRED = 'Name is required'
const EMAIL_IS_REQUIRED = 'Email is required'
const PASSWORD_IS_REQUIRED = 'Password is required'
const OLD_PASSWORD_IS_REQUIRED = 'Old password is required'
const NEW_PASSWORD_IS_REQUIRED = 'New password is required'
const STATUS_IS_REQUIRED = 'Status is required'
const USER_ID_IS_REQUIRED = "Users id is required"

const TITLE_IS_REQUIRED = 'Title is required'
const DESCRIPTION_IS_REQUIRED = 'Description is required'
const TODO_LIST_IS_REQUIRED = 'ToDo list is required'

const ACCEPT_STATUS_VALUE= `Status must be one of the following values: ${Status.TODO}, ${Status.DONE}, ${Status.ABANDONED}`

export const ValidateError = {
  VALIDATION_ERROR,

  USER_ID_IS_REQUIRED,
  NAME_IS_REQUIRED,
  EMAIL_IS_REQUIRED,
  PASSWORD_IS_REQUIRED,
  OLD_PASSWORD_IS_REQUIRED,
  NEW_PASSWORD_IS_REQUIRED,
  STATUS_IS_REQUIRED,
  TITLE_IS_REQUIRED,
  DESCRIPTION_IS_REQUIRED,
  TODO_LIST_IS_REQUIRED,
  ACCEPT_STATUS_VALUE,
}