import { useChatContext } from "../contexts/ChatContext"

export const StartScreen = () => {
  const chatCtx = useChatContext()

  const handleClickBtn = () => {
    if (chatCtx.userName.trim()) chatCtx.setShowScreen(false)
  }

  return (
    <>
      {chatCtx.showScreen &&
        <div>
          <p className="mb-3">Qual seu nome?</p>
          <div className="flex gap-2">
            <input
              type="text"
              className="outline-none bg-zinc-900 border-gray-700 
          border rounded-md py-2 px-2 w-xs"
              value={chatCtx.userName}
              onChange={e => chatCtx.setUserName(e.target.value.trim())}
            />
            <button
              className="bg-zinc-900 hover:bg-zinc-800 transition-all border-gray-600 
          border px-2 rounded-md cursor-pointer"
              onClick={handleClickBtn}>
              Iniciar chat
            </button>
          </div>
        </div>
      }
    </>
  )
}