import SampleButtons from "@/components/guides/buttons";
import ColorScheme from "@/components/guides/colorscheme";
import ChatInput from "@/components/guides/chatbox";
import { ChevronDownCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Logo from './assets/bingo.webp'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between py-5 px-5 lg:px-24">
      <nav className="flex justify-between items-center w-full border px-5 md:px-10 fixed z-[999] bg-white bg-opacity-[0.3] backdrop-blur-[10px] py-6 ">
        <div className="flex items-center md:justify-between md:gap-5 lg:justify-normal lg:gap-20">
          <div className="flex items-center gap-5">
            <button className="border border-black md:px-4 py-2 px-3 md:py-3 rounded-md">
              <span><ChevronLeft size={'18px'} /></span>
            </button>
            <div className="flex items-center gap-2">
              <Image className="md:-translate-y-2 -translate-y-1 md:w-[100%] md:h-[100%] w-[78px] h-[28px]" src={Logo} alt="Bingo" />
              <span className="md:text-[24px] text-[20px]">Guide</span>
            </div>
          </div>
          <ul className="md:flex hidden gap-6 text-sm items-center">
            <button>Colors</button>
            <button>Components</button>
            <button>Resources</button>
          </ul>
        </div>
        <button className="hidden text-[14px] border md:flex border-black items-center gap-3 px-4 py-2 rounded-3xl">
          <span><ChevronDownCircle size={'16px'} /></span>
          <span>Scroll down</span>
        </button>
      </nav>
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
          <header className="flex items-center gap-2 text-[14px]">
            <span>Docs</span>
            <span><ChevronRight size={'14px'} /></span>
            <span>Introduction</span>
          </header>
          <h1 className="font-bold uppercase md:text-[32px] text-[24px]">Introduction</h1>
          <p>
            Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
            This is NOT a component library. Its a collection of re-usable components that you can copy and paste into your apps.

            What do you mean by not a component library?

            I mean you do not install it as a dependency. It is not available or distributed via npm.

            Pick the components you need. Copy and paste the code into your project and customize to your needs. The code is yours.

            Use this as a reference to build your own component libraries.
          </p>
        </section>
        <section className="mt-[50px] flex flex-col gap-6">
          <header className="flex items-center gap-2 text-[14px]">
            <span>Docs</span>
            <span><ChevronRight size={'14px'} /></span>
            <span>Color Scheme</span>
          </header>
          <h1 className="font-bold uppercase md:text-[32px] text-[24px]">COLORS</h1>
        </section>
        <SampleButtons />
        <ColorScheme />
        <ChatInput />
      </main>
    </main>
  )
}
