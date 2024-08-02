import { ChevronDownCircle, ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Logo from '../assets/bingo.webp'
import React from 'react'

const Navbar = () => {
    return (
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
    )
}

export default Navbar
