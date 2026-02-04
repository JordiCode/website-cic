export const Header = () => {
    return (
        <header className="w-full p-2.5 py-5 flex flex-wrap gap-3 justify-between items-center">
            <div>
                <h1 className="font-bold text-2xl">
                    Banco Santiago SA
                </h1>
            </div>
            <div className="flex gap-5">
                <a href="./pages/login.html" className="bg-blue-500 rounded-md p-2 transition-transform hover:scale-104">
                    Iniciar Sessión
                </a>
            </div>
        </header>
    )
}


