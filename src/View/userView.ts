import { UserData } from "../interface"
import { UserViewData } from "../interface/userView.interface"


const formatUser = (user: UserData): UserViewData => {
  const { password, session, ...restUser } = user

  return restUser
}

const formatUsers = (users: UserData[]): UserViewData[] =>
  users.map(formatUser)

export const UserView = {
  formatUser,
  formatUsers
}