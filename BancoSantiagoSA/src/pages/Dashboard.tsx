import { LogoIcon } from "../components/icons/LogoIcon"
import { useAuth } from "../context/AuthContext"

export const Dashboard = () => {
    const { user, logout } = useAuth()

    return (
        <div className="text-baseText max-w-7xl mx-auto mt-16 pt-20 text-center">
            <LogoIcon size={50} className="text-accent/80 mb-12 mx-auto" />
            <h2 className="text-primaryText text-2xl text-center mb-6">{user?.name} </h2>
            <p className="text-primaryText  text-center mb-12">Te has loggeado exitosamente ✅️</p>
            <p onClick={logout} className="cursor-pointer text-accent hover:brightness-110">
                Cerrar sesión
            </p>
        </div>

    )
}