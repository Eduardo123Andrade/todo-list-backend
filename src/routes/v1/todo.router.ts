import { validateEditTask } from './../../validations/todo-list.validation';
import { validateData } from './../../middlewares/validate';
import { Router } from "express";
import { ToDoController } from '../../controllers'
import { validateCreateToDoList } from '../../validations';

export const todoRouter = Router()

todoRouter.post('/create-todo-list', validateData(validateCreateToDoList), ToDoController.createToDoList)

todoRouter.delete('/delete-task/:id', ToDoController.deleteTask)

todoRouter.put('/edit-task/:id', validateData(validateEditTask), ToDoController.editTask) //put validation

todoRouter.put('/finish-task/:id', ToDoController.finishTask)

todoRouter.get('/get-todo-list', ToDoController.getTodoList)
