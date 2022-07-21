export interface UserInitialData  {
  name: string
  email: string
  password: string
}

export interface UserWithoutIdAndPassword {
  name: string,
  email: string,
}

export interface UserData {
  id: string
  name: string
  email: string
  password: string
}