import { Link } from "react-router"
import { LogoIcon } from "../components/icons/LogoIcon"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router"
import { useEffect } from "react"


export const LogginAccount = () => {
    const { login, user } = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }, [user, navigate]);

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()


        try {
            const formData = new FormData(e.currentTarget)
            const cedula = formData.get("cedula") as string
            const password = formData.get("password") as string

            // 1. Petición al backend
            const response = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ cedula, password }),
            });

            if (!response.ok) {
                response.json().then(data => console.error(data));
                return;
            }

            const userData = await response.json();
            login(userData);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="text-baseText max-w-7xl mx-auto mt-16 pt-20 text-center">
            <form onSubmit={handleSubmit} className="flex flex-col text-sm w-[300px]">
                <LogoIcon size={50} className="text-accent/80 mb-4 mx-auto" />
                <h2 className="text-primaryText text-2xl text-center">Accede a tu cuenta</h2>
                <div className="flex flex-col my-8">
                    <label htmlFor="cedula" className="mb-2 text-sm text-left">Nro identificación o Cedula</label>
                    <input type="number" id="cedula" name="cedula" placeholder="Ej. 402-1234567-8" className="mb-6 p-2 border border-baseText/30 rounded-md" />
                    <label htmlFor="password" className="text-left text-sm mb-2">Contraseña</label>
                    <input type="password" id="password" name="password" placeholder="Escribe tu contraseña" className="p-2 border border-baseText/30 rounded-md" />
                </div>
                <button type="submit" className="cursor-pointer bg-accent hover:brightness-110 text-white p-2 rounded-md ">
                    Acceder
                </button>
                <p className="text-sm mt-4">
                    ¿No tienes cuenta?
                    {' '}
                    <Link to="/hazte-cliente" className="text-accent hover:brightness-120 transition-colors">
                        Hacerme Cliente
                    </Link>
                </p>
            </form>
        </div>
    )
}