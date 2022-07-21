import { ToDoData } from './../interface/todo.interface';
import { UserData } from 'src/interface';
import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { ToDoService } from '../service'


const createToDoList = async (request: Request, response: Response) => {
  const { toDoList } = request.body
  const { id: user } = request.user as UserData

  const mappedToDoList = toDoList.map((task: ToDoData) => {
    return {
      ...task,
      user,
    }
  })

  const todoList = await ToDoService.createToDoList(mappedToDoList)

  return response.status(httpStatus.CREATED).json(todoList)
}

const editTask = async (request: Request, response: Response) => {
  const { id } = request.params
  const { ...task } = request.body

  const updatedTask = await ToDoService.editTask(id, task)

  return response.status(httpStatus.OK).json({ task: updatedTask })
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

  const { id: userId } = request.user as UserData
  
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