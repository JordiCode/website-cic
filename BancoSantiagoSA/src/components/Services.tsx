import { Tabs } from "./Tabs/Tabs"

export const Services = () => {
    return (
        <div className="mx-auto max-w-7xl py-24">

            <div className="text-center mb-8">
                < h2
                    className="text-5xl mb-2 text-center font-black tracking-tight text-white leading-[1.1]"
                >
                    Nuestros
                    {' '}
                    <span className="text-accent">
                        Servicios
                    </span>
                </h2 >
                <p className="text-slate-400">Conoce los servicios que tenemos para brindarte</p>
            </div >
            <Tabs />
        </div >
    )
}