export interface UserInitialData  {
  name: string
  email: string
  password: string
}

export interface UserWithoutIdAndPassword {
  name: string,
  email: string,
}