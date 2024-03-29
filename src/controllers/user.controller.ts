import { UserView } from './../View/userView';
import { Request, Response } from "express";
import httpStatus from 'http-status';
import { UserData, UserInitialData } from "../interface";
import { UserService } from "../service";



const formatInitialData = (request: Request): UserInitialData => {
  const { name, email, password } = request.body
  return { name, email, password }
}

const createUser = async (request: Request, response: Response) => {
  const userData = formatInitialData(request)

  const createdUser = await UserService.createUser(userData)

  const user = UserView.formatUser(createdUser)

  return response.status(httpStatus.CREATED).json({ user })
}

const findUserById = async (request: Request, response: Response) => {
  const { userId } = request.params

  const findingUser = await UserService.findUserById(userId)
  const user = UserView.formatUser(findingUser)

  return response.status(httpStatus.OK).json({ user })
}

const deleteUser = async (request: Request, response: Response) => {
  const { userId } = request.params

  const deleted = await UserService.deleteUser(userId)

  return response.status(httpStatus.OK).json({ deleted })
}

const listUsers = async (_request: Request, response: Response) => {
  const users = await UserService.listUsers()

  return response.status(httpStatus.OK).json({ users })
}

const updateUser = async (request: Request, response: Response) => {
  const { name, email } = request.body
  const { id } = request.user as any

  const updatedUser = await UserService.updateUser(id, { email, name })

  const user = UserView.formatUser(updatedUser)

  return response.status(httpStatus.OK).json({ user })
}

const updatePassword = async (request: Request, response: Response) => {
  const { oldPassword, newPassword } = request.body
  const { id } = request.user as any

  const user = await UserService.updatePassword(id, newPassword, oldPassword)

  return response.status(httpStatus.OK).json({ isUpdated: !!user })
}

export const UserController = {
  createUser,
  findUserById,
  deleteUser,
  listUsers,
  updateUser,
  updatePassword
}