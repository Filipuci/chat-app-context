import { useChatContext } from "../contexts/ChatContext"


export const InputMessage = ({ user }: { user: 'user' | 'bot' }) => {
  const chatCtx = useChatContext()
  const isUser = user === 'user'
  const inputValue = isUser ? chatCtx.userInput : chatCtx.botInput

  const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return

    const currentInputValue = isUser ? chatCtx.userInput : chatCtx.botInput
    if (!currentInputValue.trim()) return

    const name = isUser ? chatCtx.userName : 'bot'

    chatCtx.setMessages(prev => [
      ...prev,
      {
        author: user,
        message: inputValue,
        id: Date.now(),
        name
      }
    ])

    if (isUser) {
      chatCtx.setUserInput('')
    } else {
      chatCtx.setBotInput('')
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder={`${isUser ? chatCtx.userName : 'bot'}, digite uma mensagem (e aperte enter)`}
        className={`${isUser ? 'border-y border-zinc-600' : ''} outline-none px-2 py-1`}
        value={inputValue}
        onChange={e => isUser ? chatCtx.setUserInput(e.target.value) : chatCtx.setBotInput(e.target.value)}
        onKeyDown={e => handlePressEnter(e)}
      />
    </>
  )
}