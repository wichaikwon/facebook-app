"use client"

import Navbar from "@/components/Navigations/Navbar"
import { createContext, useState } from "react"
import { useUser } from "./useUserContext"
import LeftSidebar from "@/components/Navigations/LeftSidebar"
import RightSidebar from "@/components/Navigations/RightSidebar"

interface LayoutContextProps {
  currentState: string
  onChangeState: (state: string) => void
}
export const LayoutContext = createContext<LayoutContextProps>({
  currentState: "home_page",
  onChangeState: () => {},
})

interface LayoutProviderProps {
  children: React.ReactNode
}

export const LayoutContextProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [currentState, setCurrentState] = useState("home_page")
  const { isLoggedIn } = useUser()
  const onChangeState = (state: string) => {
    setCurrentState(state)
  }
  return (
    <LayoutContext.Provider value={{ currentState, onChangeState }}>
      {isLoggedIn ? (
        <div>{children}</div>
      ) : (
        <div className="bg-[#18191A] text-white">
          <Navbar />
          <div className="flex justify-between h-screen "><LeftSidebar />{children} <RightSidebar /></div>
        </div>
      )}
    </LayoutContext.Provider>
  )
}
