import { Link } from "react-router"
import { MaintenanceIcon } from "../components/icons/MaintenanceIcon"

export const MaintenancePage = () => {
    return (
        <div className="max-w-7xl mx-auto mt-16 pt-24 text-center">
            <div className="flex flex-col items-center">
                <MaintenanceIcon size={150} className="text-accent/80 mb-4" />
                <h1 className="text-4xl font-bold text-primaryText mb-6">
                    Mantenimiento
                </h1>
                <p className="text-baseText mb-8">
                    Estamos trabajando en este sitio, por favor intente nuevamente en unos minutos.
                </p>
                <Link to="/" className="text-accent hover:text-primaryText px-2 py-4 hover:bg-accent/40 rounded-md">Volver a la página de inicio</Link>
            </div>
        </div>
    )
}