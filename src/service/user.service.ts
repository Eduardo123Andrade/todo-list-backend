import { getRepository } from "typeorm";
import { CustomError } from '../errors';
import { UserInitialData } from '../interface';
import { encoder } from '../utils';
import { UserWithoutIdAndPassword } from './../interface/user.interface';
import { User } from './../models/User.model';
import { ErrorData } from './../utils/';


const createUser = async (userData: UserInitialData) => {
  const repository = getRepository(User)

  const password = await encoder.codify(userData.password)
  const userCreated = repository.create({ ...userData, password })

  const user = await repository.save(userCreated)
    .catch(() => {
      throw new CustomError(ErrorData.UserAlreadyExists.status, ErrorData.UserAlreadyExists.message);
    })

  return user
}


const findUserByEmail = async (email: string) => {
  const repository = getRepository(User)
  const user = await repository.findOne({ where: { email } })

  if (!user)
    throw new CustomError(
      ErrorData.UserNotFoundError.status,
      ErrorData.UserNotFoundError.message
    )

  return user
}

const findUserById = async (id: string) => {
  const repository = getRepository(User)
  const user = await repository.findOne({ where: { id } })

  if (!user)
    throw new CustomError(
      ErrorData.UserNotFoundError.status,
      ErrorData.UserNotFoundError.message
    )

  return user
}

const updateUser = async (id: string, userData: UserWithoutIdAndPassword) => {
  const repository = getRepository(User)
  const findingUser = await findUserById(id)
  const updateAt = new Date()

  Object.assign(findingUser, { ...userData, updateAt })

  const updatedUser = await repository.save(findingUser)

  return updatedUser
}

const listUsers = async () => {
  const repository = getRepository(User)
  const users = repository.find()

  return users
}


const deleteUser = async (id: string) => {
  const user = await findUserById(id);

  const deleted = await getRepository(User).remove(user)
    .catch(() => false)

  return deleted;
}


const updatePassword = async (id: string, newPassword: string, oldPassword: string) => {
  const repository = getRepository(User)
  const user = await findUserById(id)

  const isRightPassword =
    await encoder.verifyPassword(oldPassword, user.password)

  if (!isRightPassword)
    throw new CustomError(
      ErrorData.InvalidPassword.status,
      ErrorData.InvalidPassword.message,
    )

  const password = await encoder.codify(newPassword)
  const updateAt = new Date()

  Object.assign(user, { password, updateAt })

  const updatedUser = await repository.save(user)

  return updatedUser
}

export const UserService = {
  createUser,
  findUserByEmail,
  findUserById,
  updateUser,
  listUsers,
  deleteUser,
  updatePassword,
}