"use client"
import { createContext, useContext, useState } from "react"
import { User } from "@/types/user"
import { users } from "@/db/data"

interface UserContextProps {
  isLoggedIn: boolean
  login: (username: string, password: string) => void
  logout: () => void
}

const UserContext = createContext<UserContextProps>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
})

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const isLoggedIn = !!user

  const login = (username: string, password: string) => {
    const foundUser = users.find((user) => user.username === username && user.password === password)
    if (foundUser) setUser(foundUser)
  }

  const logout = () => setUser(null)

  return (
    <UserContext.Provider value={{ isLoggedIn, login, logout }}>
      <div className="h-screen">{children}</div>
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser must be used within a UserContextProvider")
  }
  return context
}
