import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { ToDoService } from '../service'


const createToDoList = async (request: Request, response: Response) => {
  const { toDoList } = request.body

  const todoList = await ToDoService.createToDoList(toDoList)

  return response.status(httpStatus.CREATED).json(todoList)
}

const editTask = async (request: Request, response: Response) => {
  const { id, ...rest } = request.body

  const task = await ToDoService.editTask(id, rest)

  return response.status(httpStatus.OK).json({ task })
}

const deleteTask = async (request: Request, response: Response) => {
  const { id } = request.params

  const deleted = await ToDoService.deleteTask(id)

  return response.status(httpStatus.OK).json({ deleted })
}

const finishTask = async (request: Request, response: Response) => {
  const { id } = request.params

  const task = await ToDoService.finishTask(id)

  return response.status(httpStatus.OK).json({ task })
}

const getTodoList = async (request: Request, response: Response) => {
  const { userId } = request.params

  const todoList = await ToDoService.getTodoList(userId)

  return response.status(httpStatus.OK).json(todoList)
}


export const ToDoController = {
  createToDoList,
  editTask,
  deleteTask,
  finishTask,
  getTodoList
}