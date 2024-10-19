import { useUser } from "@/contexts/useUserContext"
import React from "react"

const Homepage: React.FC = () => {
  const { logout } = useUser()
  return <div className="h-screen" onClick={logout}>Homepage</div>
}

export default Homepage
