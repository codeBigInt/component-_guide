import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Logo from './assets/bingo.webp'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-body flex-col">
      <nav className="flex items-center px-5 md:px-10 bg-white border backdrop-blur-md py-6 md:justify-between lg:justify-normal lg:gap-20">
        <div>
          <div className="flex items-center gap-5">
            <button className="border px-4 py-3 rounded-md">
              <span><ChevronLeft /></span>
            </button>
            <div className="flex items-center gap-2">
              <Image className="-translate-y-2" src={Logo} alt="Bingo" />
              <span className="text-[24px]">Guides</span>
            </div>
          </div>
          <ul className="md:flex hidden gap-2 items-center">
            <button>Color Scheme</button>
            <button>Components</button>
            <button>Resource</button>
          </ul>
        </div>
      </nav>
      <main className="flex flex-col px-5 md:px-10 py-6">
        <ul className="flex md:hidden gap-2 items-center">
          <button>Color Scheme</button>
          <button>Components</button>
          <button>Resource</button>
        </ul>
      </main>
    </main>
  );
}
