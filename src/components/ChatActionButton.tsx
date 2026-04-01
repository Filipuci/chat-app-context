import { useChatContext } from "../contexts/ChatContext"

type Props = {
  action: 'clear' | 'reset'
}

export const ChatActionButton = ({ action }: Props) => {
  const chatCtx = useChatContext()

  const clearBtn = () => {

  }

  const resetBtn = () => {

  }

  return (
    <button
      className="border border-zinc-600 rounded-md px-4 py-2 cursor-pointer"
      onClick={action === 'clear' ? clearBtn : resetBtn}>
      {action}
    </button>
  )
}