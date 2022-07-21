import { UserData } from "src/interface"
import { UserViewData } from "src/interface/userView.interface"


const formatUser = (user: UserData): UserViewData => {
  const { password, ...restUser } = user

  return restUser
}

const formatUsers = (users: UserData[]): UserViewData[] =>
  users.map(formatUser)

export const UserView = {
  formatUser,
  formatUsers
}