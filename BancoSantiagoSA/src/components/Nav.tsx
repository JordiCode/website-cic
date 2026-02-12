export const Nav = ({ className }: { className?: string }) => {
    return (
        <nav className={className}>
            <ul className="flex max-md:flex-col">

                <li className="hover:bg-accent/50 active:bg-accent/50 rounded-md">
                    <a href="#" className="p-2 py-4 block text-primaryText">Contáctanos  </a>
                </li>
                <li className="hover:bg-accent/50 active:bg-accent/50 rounded-md">
                    <a href="#" className="p-2 py-4 block text-primaryText">Guía de Ayuda</a>
                </li>
            </ul>

            <div className="flex max-md:flex-col gap-2">

                <a
                    href="#"
                    className="border border-secondaryColor text-primaryText px-8 py-3 rounded-2xl hover:bg-accent/50 active:bg-accent/50"
                >
                    Hazte cliente
                </a>

                <a
                    href="#"
                    className="bg-secondaryColor  text-secondaryText px-8 py-3 rounded-2xl hover:bg-secondaryColor/90 active:bg-secondaryColor/90"
                >
                    Iniciar Sesión
                </a>

            </div>
        </nav>
    )
}