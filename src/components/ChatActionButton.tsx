import { useChatContext } from "../contexts/ChatContext"

type Props = {
  action: 'clear' | 'reset'
}

export const ChatActionButton = ({ action }: Props) => {
  const chatCtx = useChatContext()

  const clearBtn = () => {
    chatCtx.setMessages([])
    return localStorage.removeItem('chat_messages')
  }

  const resetBtn = () => (
    chatCtx.setMessages([]),
    chatCtx.setShowScreen(true),
    chatCtx.setUserName(''),
    localStorage.removeItem('chat_messages'),
    localStorage.removeItem('chat_username'),
    localStorage.removeItem('chat_logged')
  )

  return (
    <button
      className="border border-zinc-600 rounded-md px-4 py-2 cursor-pointer"
      onClick={action === 'clear' ? clearBtn : resetBtn}>
      {action}
    </button>
  )
}