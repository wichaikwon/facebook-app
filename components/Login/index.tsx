"use client"
import { useUser } from "@/contexts/useUserContext"
import React, { Fragment, useState } from "react"
import LoginFooter from "./LoginFooter"
import Image from "next/image"

const Login: React.FC = () => {
  const { isLoggedIn, login, logout } = useUser()
  const [isEmail, setIsEmail] = useState("")
  const [isPassword, setIsPassword] = useState("")
  return (
    <Fragment>
      <div className="flex h-screen flex-col place-content-between">
        <div className="flex h-screen w-full md:items-center justify-center bg-[#f2f4f7] p-8">
          <div className="flex flex-col gap-8 md:flex-row  lg:gap-16 ">
            <div className="text-center md:text-left hidden md:block pt-8">
              <Image src={"/facebook_logo.svg"} alt="facebook_logo" width={320} height={100} />
              <span className="text-3xl text-left">
                Facebook helps you connect and share <br  /> with the people in your life.
              </span>
            </div>
            <div className="min-h-80 min-w-96">
              <div className="flex flex-col gap-3 rounded-lg bg-white p-4 text-lg shadow-lg">
                <input
                  type="email"
                  value={isEmail}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsEmail(e.target.value)}
                  className="rounded-md border p-3 outline-blue-500"
                  placeholder="Email address or phone number"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={isPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setIsPassword(e.target.value)
                  }
                  className="rounded-md border p-3 outline-blue-500"
                />
                <button
                  onClick={() => (isLoggedIn ? logout : login(isEmail, isPassword))}
                  className="rounded-md bg-blue-600 p-4 text-xl font-bold text-white hover:bg-blue-500"
                >
                  Log in
                </button>
                <span className="flex justify-center text-xs text-blue-600">
                  Forgetten password ?
                </span>
                <div className=" h-0.5 bg-gray-200" />
                <div className="flex justify-center">
                  <button className="w-fit rounded-md bg-green-500 p-4 font-bold text-white hover:bg-green-600">
                    Create new account
                  </button>
                </div>
              </div>
              <div className="flex justify-center p-4">
                <span>
                  <button className="font-bold">Create a Page </button> for a celebrity,brand or
                  business
                </span>
              </div>
            </div>
          </div>
        </div>
        <LoginFooter />
      </div>
    </Fragment>
  )
}

export default Login
