import { UserData, UserWithoutIdAndPassword } from './../interface/user.interface';
import { User } from './../models/User.model';
import { getRepository } from "typeorm"
import { UserInitialData } from '../interface';
import { encoder } from '../utils';


const createUser = async (userData: UserInitialData) => {
  const repository = getRepository(User)

  const password = await encoder.codify(userData.password)
  const userCreated = repository.create({ ...userData, password })

  const user = await repository.save(userCreated)

  return user
}


const findUserByEmail = async (email: string) => {
  const repository = getRepository(User)
  const user = await repository.findOne({ where: { email } })

  if (!user)
    throw new Error('user not found')

  return user
}

const findUserById = async (id: string) => {
  const repository = getRepository(User)
  const user = await repository.findOne({ where: { id } })

  if (!user)
    throw new Error()

  return user
}

const updateUser = async (id: string, userData: UserWithoutIdAndPassword) => {
  const repository = getRepository(User)
  const findingUser = await findUserById(id)
  const updateAt = Date.now()

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

  await getRepository(User).remove(user);

  return true;
}


const updatePassword = async (newPassword: string, oldPassword: string, user?: UserData) => {
  const repository = getRepository(User)

  if (!user)
    // throw new NotFoundError(ErrorMessage.USER_NOT_FOUND)
    throw new Error()

  const isRightPassword =
    await encoder.verifyPassword(oldPassword, user.password)

  if (!isRightPassword)
    // throw new InvalidPasswordError()
    throw new Error()

  const password = await encoder.codify(newPassword)

  Object.assign(user, { password })

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