import { createContext, useContext, useEffect, useMemo, useState, type Dispatch, type ReactNode, type SetStateAction } from "react"

type ChatContextType = {
  userName: string,
  showScreen: boolean,
  messages: Message[],
  userInput: string,
  botInput: string,
  setUserName: Dispatch<SetStateAction<string>>,
  setShowScreen: Dispatch<SetStateAction<boolean>>,
  setMessages: Dispatch<SetStateAction<Message[]>>,
  setUserInput: Dispatch<SetStateAction<string>>,
  setBotInput: Dispatch<SetStateAction<string>>
}

type Message = {
  author: 'user' | 'bot',
  message: string,
  id: number,
  name: string
}

const MESSAGES_KEY = 'chat_messages'
const USERNAME_KEY = 'chat_username'
const LOGGED_KEY = 'chat_logged'
export const ChatContext = createContext<ChatContextType | null>(null)

export const ChatContextProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem(USERNAME_KEY) || ''
  })

  const [messages, setMessages] = useState<Message[]>(() => {
    const stored = localStorage.getItem(MESSAGES_KEY)
    return stored ? JSON.parse(stored) : []
  })

  const [showScreen, setShowScreen] = useState(() => {
    const stored = localStorage.getItem(LOGGED_KEY)
    return stored ? JSON.parse(stored) : true
  })

  const [userInput, setUserInput] = useState('')
  const [botInput, setBotInput] = useState('')

  useEffect(() => {
    localStorage.setItem(USERNAME_KEY, userName)
  }, [userName])

  useEffect(() => {
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages))
  }, [messages])

  useEffect(() => {
    localStorage.setItem(LOGGED_KEY, JSON.stringify(showScreen))
  }, [showScreen])

  const value = useMemo(() => ({
    userName,
    setUserName,
    showScreen,
    setShowScreen,
    messages,
    setMessages,
    userInput,
    botInput,
    setUserInput,
    setBotInput
  }), [userName, showScreen, messages, userInput, botInput])


  return (
    <ChatContext.Provider value={value}>
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
