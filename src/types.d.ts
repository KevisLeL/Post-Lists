export interface Post {
  id: number
  userId: number
  body: string
  title: string
}

export interface User {
  email: string
  password: string
  isLogged: boolean
}