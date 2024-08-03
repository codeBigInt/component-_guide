'use client'
import SampleButtons from "@/components/guides/buttons";
import ColorScheme from "@/components/guides/colorscheme";
import ChatInput from "@/components/guides/chatbox";
import { ChevronDownCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "./PageComponents/Navbar";
import GettingStarted from "@/components/guides/getting-started";
import useNavState from "./custom-hook/nav-state";
import { useState } from "react";
import Usage from "./PageComponents/Usage";

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
  // const { isOpen } = useNavState()
  const [isOpen, setIsOpen] = useState(false)
  const toggleNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    isOpen === false ? setIsOpen(true) : setIsOpen(false)
    console.log('clicked', isOpen);
    
  }

  return (
    <main className="flex min-h-screen flex-col  justify-between py-5 px-5 lg:px-20">
      <div className="relative">
        <Navbar toggle={(e) => toggleNav(e)} />
        {isOpen === true ? <ul className="px-4 ease-in transition-[1s] flex flex-col z-10 rounded-b-lg fixed top-[75px] bg-white shadow-lg w-full left-0 py-6 gap-4">
          <button onClick={() => {
            const element = document.getElementById('colors')
            if(element){
              element.scrollIntoView({ behavior:'smooth' })
              setIsOpen(false)
            }
          }} className="py-3 text-left px-4 border-b-[1px]">Color guide</button>
          <button onClick={() => {
            const element = document.getElementById('components')
            if(element){
              element.scrollIntoView({ behavior:'smooth' })
              setIsOpen(false)
            }
          }} className="py-3 text-left px-4 border-b-[1px]">Components</button>
          <button onClick={() => {
            const element = document.getElementById('resources')
            if(element){
              element.scrollIntoView({ behavior:'smooth' })
              setIsOpen(false)
            }
          }} className="pt-3 text-left px-4">Resources</button>
        </ul> : null}
      </div>
      <main className="flex flex-col gap-[50px] px-2 md:px-10 pt-[120px]">
        <button className="flex animate-scroll-btn md:hidden text-[14px] fixed right-6 bottom-6 bg-white border bg-opacity-[0.3] backdrop-blur-lg items-center gap-3 px-4 py-3 rounded-3xl">
          <span><ChevronDownCircle size={'16px'} /></span>
          <span>Scroll down</span>
        </button>
        <section id="resources" className="flex flex-col gap-6">
          <DocHeader title="Quick start guide" />
          <h1 className="font-bold uppercase md:text-[32px] text-[24px]">Getting started</h1>
          <GettingStarted />
        </section>
        <section id="colors" className="mt-[50px] flex flex-col gap-6">
          <DocHeader title="Color guide" />
          <h1 className="font-bold uppercase md:text-[28px] text-[24px]">COLOR GUIDE</h1>
          <ColorScheme />
        </section>
        <section id="components" className="mt-[50px] flex flex-col gap-6">
          <DocHeader title="Reusable components" />
          <h1 className="font-bold uppercase md:text-[32px] text-[24px]">COMPONENTS</h1>
          <SampleButtons />
          <ChatInput />
        </section>
        <section id="usage" className="mt-[50px] flex flex-col gap-6">
          <DocHeader title="How to use components" />
          <h1 className="font-bold uppercase md:text-[32px] text-[24px]">Usage</h1>
          <Usage />
        </section>

      </main>
    </main>
  )
}
