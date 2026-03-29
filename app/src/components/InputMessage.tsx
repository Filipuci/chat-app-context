import { useContext } from "react"
import { ChatContext, useChatContext } from "../contexts/ChatContext"

export const InputMessage = ({ user }: { user: string }) => {
  const chatCtx = useChatContext()

  const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (user === 'user' && chatCtx.userInput.trim()) {
        chatCtx.setMessages([...chatCtx.messages, { author: user, message: chatCtx.userInput, id: chatCtx.messages.length, name: chatCtx.userName }])
        chatCtx.setUserInput('')
        console.log(chatCtx.messages)
      } else if (user === 'bot' && chatCtx.botInput.trim()) {
        chatCtx.setMessages([...chatCtx.messages, { author: user, message: chatCtx.botInput, id: chatCtx.messages.length, name: user }])
        chatCtx.setBotInput('')
      }
    }
  }


  return (
    <>
      {user !== 'bot' &&
        <input
          type="text"
          placeholder={`${chatCtx.userName}, digite uma mensagem (e aperte enter)`}
          className="outline-none border-y border-zinc-600 px-2 py-1"
          value={chatCtx.userInput}
          onChange={e => chatCtx.setUserInput(e.target.value)}
          onKeyDown={e => handlePressEnter(e)}
        />
      }

      {user === 'bot' &&
        <input
          type="text"
          placeholder="bot, digite uma mensagem (e aperte enter)"
          className="outline-none px-2 py-1"
          value={chatCtx.botInput}
          onChange={e => chatCtx.setBotInput(e.target.value)}
          onKeyDown={e => handlePressEnter(e)}
        />
      }
    </>
  )
}