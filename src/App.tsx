import { ChatActionButton } from "./components/ChatActionButton"
import { ChatScreen } from "./components/ChatScreen"
import { StartScreen } from "./components/StartScreen"
import { ChatContextProvider } from "./contexts/ChatContext"

const Page = () => {

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="font-bold text-2xl">Chat simples</h1>

      <ChatContextProvider>
        <StartScreen />
        <ChatScreen />
        <div className="flex gap-5">
          <ChatActionButton action="clear" />
          <ChatActionButton action="reset" />
        </div>
      </ChatContextProvider>

    </div>
  )
}

export default Page