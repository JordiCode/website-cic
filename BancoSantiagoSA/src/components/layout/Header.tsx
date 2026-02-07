import { useState } from "react"
import { ChartIcon } from "../icons/ChartIcon"
import { UserIcon } from "../icons/UserIcon"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => setIsOpen(!isOpen)

    return (
        <header className="w-full relative border-b border-secondaryText p-2.5 py-5 flex flex-wrap gap-3 justify-between items-center">
            <div className="flex items-center gap-2">
                <span className="bg-accent p-2 rounded-md">
                    <ChartIcon size={20} />
                </span>
                <p className="text-xl font-bold text-primaryText">
                    Banco Santiago SA
                </p>

            </div>
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
            {/* Pendiente: Añadir ruta */}
            <nav
                className={`max-md:w-full
    grid transition-all duration-300 ease-in-out
    ${isOpen ? 'grid-rows-[1fr]  max-md:opacity-100' : 'grid-rows-[0fr] max-md:opacity-0'}
    
    
  `}
            >
                <div className="min-h-0 flex max-md:flex-col items-center max-md:items-start gap-2">
                    <ul className="flex max-md:flex-col w-full">
                        <li className="hover:bg-accent/50 active:bg-accent/50 rounded-md ">
                            <a href="#" className="p-2 py-4 block w-full text-primaryText">Inicio</a>
                        </li>
                        <li className="hover:bg-accent/50 active:bg-accent/50 rounded-md">
                            <a href="#" className="p-2 py-4 block w-full text-primaryText">Servicios</a>
                        </li>
                        <li className="hover:bg-accent/50 active:bg-accent/50 rounded-md">
                            <a href="#" className="p-2 py-4 block w-full text-primaryText">Tarjetas</a>
                        </li>
                        <li className="hover:bg-accent/50 active:bg-accent/50 rounded-md">
                            <a href="#" className="p-2 py-4 block w-full text-primaryText">Contacto</a>
                        </li>
                    </ul>

                    <div className="w-full">
                        <a
                            href="#"
                            className="bg-accent text-primaryText flex items-center gap-1 rounded-md p-2 transition-transform hover:scale-105 max-md:hover:scale-100"
                        >
                            <UserIcon size={20} />
                            <span>Iniciar Sesión</span>
                        </a>
                    </div>
                </div>
            </nav>


        </header>
    )
}



