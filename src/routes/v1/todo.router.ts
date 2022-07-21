import { Router } from "express";
import { ToDoController } from '../../controllers'

export const todoRouter = Router()

todoRouter.post('/create-todo-list', ToDoController.createToDoList)

todoRouter.delete('/delete-task/:id', ToDoController.deleteTask)

todoRouter.put('/edit-task/:id', ToDoController.editTask)

todoRouter.put('/finish-task/:id', ToDoController.finishTask)

todoRouter.get('/get-todo-list/:userId', ToDoController.getTodoList)
