import { useState } from "react"
import { LogoIcon } from "../icons/LogoIcon"
import { Nav } from "../Nav"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => setIsOpen(!isOpen)

    return (
        <>
            <header className="bg-background h-16 fixed top-0 left-1/2 -translate-x-1/2 z-50 text-sm max-w-7xl  w-full p-2.5 py-5 flex gap-3 justify-between items-center">
                <a href="/" className="flex items-center gap-2">
                    <LogoIcon size={28} />
                    <p className="text-xl font-medium text-secondaryColor">
                        Santiago SA
                    </p>
                </a>

                <Nav className={'max-md:hidden flex gap-4 items-center'} toggleOpen={toggleOpen} />

                {/* Responsive Menu Toggle */}
                <button
                    className="relative p-6 w-10 h-10 md:hidden cursor-pointer hover:bg-accent/50 active:bg-accent/50 rounded-full"
                    onClick={toggleOpen}
                >
                    <div className="relative flex items-center justify-center">
                        <span
                            className={`absolute w-8 h-0.5 bg-primaryText transition-all duration-300 
                            ${isOpen ? 'rotate-45' : '-translate-y-1'}`}
                        ></span>
                        <span
                            className={`absolute w-8 h-0.5 bg-primaryText transition-all duration-300 
                            ${isOpen ? '-rotate-45' : 'translate-y-1'}`}
                        ></span>
                    </div>
                </button>
            </header >
            {/* Responsive Menu*/}
            <Nav
                className={`md:hidden grid gap-4 bg-background fixed z-40 ${isOpen ? 'top-16' : '-top-full'} left-0 w-full transition-all duration-300 px-1 py-2 pb-4`}
                toggleOpen={toggleOpen}
            />
        </>
    )
}



