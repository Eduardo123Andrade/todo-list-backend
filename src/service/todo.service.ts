import { ToDoInitialData, ToDoData } from './../interface/todo.interface';
import { getRepository } from 'typeorm';
import { ToDo } from './../models/ToDo.model';


const createToDoList = async (toDos: ToDoInitialData[]) => {
  const repository = getRepository(ToDo)
  const createdTodoList = repository.create(toDos)

  const todoList = await repository.save(createdTodoList)

  return todoList
}

const findTaskById = async (id: string) => {
  const repository = getRepository(ToDo)
  const findingTodoItem = await repository.findOne({ where: { id } })

  if (!findingTodoItem)
    throw new Error()

  return findingTodoItem
}

const editTask = async (id: string, toDo: ToDoData) => {
  const repository = getRepository(ToDo)
  const updateAt = Date.now()
  const findingTask = await findTaskById(id)

  Object.assign(findingTask, { ...toDo, updateAt })

  const todoItem = await repository.save(findingTask)

  return todoItem
}

const deleteTask = async (id: string) => {
  const repository = getRepository(ToDo)
  const toDoItem = await findTaskById(id)
  const x = await repository.delete(toDoItem)
  console.log({ x })
  return true
}

const finishTask = async (id: string) => {
  const repository = getRepository(ToDo)
  const updateAt = Date.now()
  const findingTask = await findTaskById(id)

  Object.assign(findingTask, { updateAt, status: 'DONE' })

  const todoItem = await repository.save(findingTask)

  return todoItem
}

const getTodoList = async (userId: string) => {
  const repository = getRepository(ToDo)
  const todoList = await repository.find({ where: { user: userId } })

  return todoList
}

export const ToDoService = {
  createToDoList,
  editTask,
  deleteTask,
  finishTask,
  getTodoList
}