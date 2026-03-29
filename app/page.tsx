"use client"

import { useState } from "react"
import { ChatScreen } from "./src/components/ChatScreen"
import { StartScreen } from "./src/components/StartScreen"
import { ChatContextProvider } from "./src/contexts/ChatContext"

const Page = () => {

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="font-bold text-2xl">Chat simples</h1>

      <ChatContextProvider>
        <StartScreen />
        <ChatScreen />
      </ChatContextProvider>

    </div>
  )
}

export default Page