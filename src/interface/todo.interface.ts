export interface ToDoInitialData {
  title: string
  description: string
}

export enum Status {
  TODO = "TODO",
  DONE = "DONE",
  ABANDONED = "ABANDONED",
}

export interface ToDoData {
  id: string
  title: string
  description: string
  status: Status
  createAt: string
  updateAt: string
}