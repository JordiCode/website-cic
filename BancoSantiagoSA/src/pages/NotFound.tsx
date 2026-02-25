import { Link } from "react-router"
import { NotFoundIcon } from "../components/icons/NotFoundIcon"

export const NotFound = () => {
    return (
        <div className="max-w-7xl mx-auto mt-16 text-center">
            <NotFoundIcon size={192} className="text-accent/80 mb-8" />
            <p className="text-4xl font-bold text-primaryText mb-4">404 - Pagina no encontrada</p>
            <Link to="/" className="hover:text-primaryText">Volver a la página de inicio</Link>
        </div>
    )
}