import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type ChatContextType = {
  userName: string,
  showScreen: boolean,
  messages: Message[],
  userInput: string,
  botInput: string,
  setUserName: (name: string) => void,
  setShowScreen: (value: boolean) => void
  setMessages: (arr: Message[]) => void,
  setUserInput: (message: string) => void,
  setBotInput: (message: string) => void
}

type Message = {
  author: 'user' | 'bot',
  message: string,
  id: number,
  name: string
}

const STORAGE_KEY = 'ChatContext'
export const ChatContext = createContext<ChatContextType | null>(null)

export const ChatContextProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState('')
  const [showScreen, setShowScreen] = useState(true)
  const [messages, setMessages] = useState<Message[]>(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  )
  const [userInput, setUserInput] = useState('')
  const [botInput, setBotInput] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  }, [messages])


  return (
    <ChatContext.Provider
      value={{
        userName, setUserName, showScreen, setShowScreen, messages,
        setMessages, userInput, botInput, setUserInput, setBotInput
      }}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChatContext = () => {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error('Contexto fora do provider')
  }
  return context
}