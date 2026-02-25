import { Link } from "react-router"

export const Nav = ({ className, toggleOpen }: { className?: string, toggleOpen: () => void }) => {
    return (
        <nav className={className}>
            <ul className="flex max-md:flex-col text-baseText ">
                <li className="hover:text-primaryText hover:bg-accent/40 active:bg-accent/50 rounded-md">
                    <Link
                        to="/contactanos"
                        className="p-2 py-4 block"
                        onClick={toggleOpen}
                    >
                        Contáctanos
                    </Link>
                </li>
                <li className="hover:text-primaryText hover:bg-accent/40 active:bg-accent/50 rounded-md">
                    <Link
                        to="/guia-de-ayuda"
                        className="p-2 py-4 block"
                        onClick={toggleOpen}
                    >
                        Guía de Ayuda
                    </Link>
                </li>
            </ul>

            <div className="flex max-md:flex-col gap-2">
                <Link
                    to="/hazte-cliente"
                    className="border border-baseColor  text-baseText hover:text-primaryText px-4 py-2 rounded-2xl hover:bg-accent/50 active:bg-accent/50"
                    onClick={toggleOpen}
                >
                    Hazte cliente
                </Link>
                <Link
                    to="/iniciar-sesion"
                    className="bg-secondaryColor  text-secondaryText px-4 py-2 rounded-2xl hover:bg-secondaryColor/90 active:bg-secondaryColor/90"
                    onClick={toggleOpen}
                >
                    Iniciar Sesión
                </Link>

            </div>
        </nav>
    )
}