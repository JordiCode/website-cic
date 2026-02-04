import { ChartIcon } from "../icons/ChartIcon"
import { UserIcon } from "../icons/UserIcon"

export const Header = () => {
    return (
        <header className="w-full p-2.5 py-5 flex flex-wrap gap-3 justify-between items-center">
            <div className="flex items-center gap-2">
                <span className="bg-accent p-2 rounded-md">
                    <ChartIcon size={20} />
                </span>
                <p className="text-xl font-bold">
                    Banco Santiago SA
                </p>
            </div>
            {/* Pendiente: Añadir ruta */}
            <a
                href="#"
                className="bg-accent flex items-center gap-1 rounded-md p-2 transition-transform hover:scale-104"
            >
                <UserIcon size={20} />
                <span>
                    Iniciar Sessión
                </span>
            </a>
        </header>
    )
}



