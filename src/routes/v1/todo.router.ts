import { Router } from "express";
import { ToDoController } from '../../controllers'

export const todoRouter = Router()

todoRouter.post('/create-todo-list', ToDoController.createToDoList) // put validation

todoRouter.delete('/delete-task/:id', ToDoController.deleteTask)

todoRouter.put('/edit-task/:id', ToDoController.editTask) //put validation

todoRouter.put('/finish-task/:id', ToDoController.finishTask)

todoRouter.get('/get-todo-list', ToDoController.getTodoList)
