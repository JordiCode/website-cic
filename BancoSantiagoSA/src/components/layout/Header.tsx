import { useState } from "react"
import { LogoIcon } from "../icons/LogoIcon"
import { Nav } from "../Nav"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => setIsOpen(!isOpen)

    return (
        <>
            <header className="bg-background h-16 fixed z-20 text-sm w-full p-2.5 py-5 flex gap-3 justify-between items-center">
                <div className="flex items-center gap-2">
                    <LogoIcon size={28} />
                    <p className="text-xl font-medium text-secondaryColor">
                        Santiago SA
                    </p>
                </div>

                <Nav className={'max-md:hidden flex gap-4 items-center'} />

                {/* Responsive Menu Toggle */}
                <button
                    className="relative p-3 w-10 h-10 md:hidden cursor-pointer"
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
            <Nav className={`md:hidden grid gap-4 bg-background fixed ${isOpen ? 'top-16' : '-top-full'} left-0 w-full transition-all duration-300 px-1 py-2`} />
        </>
    )
}



