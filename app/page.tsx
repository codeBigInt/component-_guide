import SampleButtons from "@/components/guides/buttons";
import ColorScheme from "@/components/guides/colorscheme";
import ChatInput from "@/components/guides/chatbox";
import { ChevronDownCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Logo from './assets/bingo.webp'
import Navbar from "./PageComponents/Navbar";

const DocHeader = ({ title }: { title: string }) => {
  return (
    <header className="flex items-center gap-2 text-[14px]">
      <span>Docs</span>
      <span><ChevronRight size={'14px'} /></span>
      <span>{title}</span>
    </header>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between py-5 px-5 lg:px-20">
      <Navbar />
      <main className="flex flex-col px-5 md:px-10 pt-[120px]">
        <ul className="flex md:hidden flex-wrap gap-6 items-center pb-4">
          <button className="py-2 px-5 border border-black rounded-xl text-[14px] min-w-[40%] flex-1">Color Scheme</button>
          <button className="py-2 px-5 border border-black rounded-xl text-[14px] min-w-[40%] flex-1">Components</button>
          <button className="py-2 px-5 border border-black rounded-xl text-[14px] min-w-[40%] flex-1">Resources</button>
        </ul>
        <button className="flex animate-scroll-btn md:hidden text-[14px] fixed right-6 bottom-6 bg-white border-[#FFDD00] border bg-opacity-[0.3] backdrop-blur-lg items-center gap-3 px-4 py-3 rounded-3xl">
          <span><ChevronDownCircle size={'16px'} /></span>
          <span>Scroll down</span>
        </button>
        <section className="mt-[50px] flex flex-col gap-6">
          <DocHeader title="Color guide" />
          <h1 className="font-bold uppercase md:text-[32px] text-[24px]">COLOR GUIDE</h1>
          <ColorScheme />
        </section>
        <SampleButtons />
        <ChatInput />
      </main>
    </main>
  )
}
