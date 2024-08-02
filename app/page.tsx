import SampleButtons from "@/components/guides/buttons";
import ColorScheme from "@/components/guides/colorscheme";
import ChatInput from "@/components/guides/chatbox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between py-5 px-5 lg:px-24">
      <SampleButtons/>
      <ColorScheme />
      <ChatInput/>
    </main>
  )
}
