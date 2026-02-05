import { Link } from "react-router"

export const NotFound = () => {
    return (
        <div className="max-w-7xl mx-auto my-10 text-center">
            <p className="text-4xl font-bold text-primaryText mb-4">404 - Pagina no encontrada</p>
            <Link to="/" className="hover:text-primaryText">Volver a la página de inicio</Link>
        </div>
    )
}