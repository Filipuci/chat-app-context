"use client"

import { KeyboardEventHandler, useContext, useState } from "react"
import { ChatContext, useChatContext } from "../contexts/ChatContext"
import { InputMessage } from "./InputMessage"

export const ChatScreen = () => {
  const chatCtx = useChatContext()

  return (
    <>
      {!chatCtx.showScreen &&
        <div className="flex flex-col h-[45vh] w-1/2 border border-zinc-600 rounded-md">
          <div className="flex-1 flex flex-col overflow-y-auto p-2">
            {chatCtx.messages.map(message => (
              <div
                key={message.id}
                className={`rounded-md px-2 py-1 max-w-full mb-3 ${message.author === 'user'
                  ? 'bg-indigo-500 self-end'
                  : 'bg-zinc-800 self-start'
                  } `}>
                <p className="font-bold text-sm">{message.name}</p>
                <p className="text-[12px] wrap-break-word">{message.message}</p>
              </div>
            ))}
          </div>

          <InputMessage user="user" />
          <InputMessage user="bot" />
        </div>
      }
    </>

  )
}

// scroll automático
// salvar userName no local storage
// limpar chat com botão
// clean code