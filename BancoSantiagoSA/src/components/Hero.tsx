import { MoneyBagIcon } from "./icons/MoneyBagIcon"

export const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-16">
            {/* Background Gradient Effects */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent/10 blur-[120px] rounded-full pointer-events-none z-0"
            >
            </div>
            <div
                className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
            >
                <div
                    className="inline-flex items-center rounded-full border border-primary/30 bg-accent/10 px-3 py-1 text-xs font-medium text-primary mb-6"
                >
                    <span
                        className="flex h-1.5 w-1.5 rounded-full bg-accent mr-2 animate-pulse"
                    ></span>
                    <p className="text-primaryText">
                        Ahora Disponibles 24/7
                    </p>
                </div>
                <h1
                    className="text-4xl font-black tracking-tight text-primaryText sm:text-6xl md:text-7xl max-w-4xl leading-[1.1]"
                >
                    Creciendo juntos en el
                    {' '}
                    <span
                        className="text-transparent bg-clip-text bg-linear-to-r from-primaryText to-accent"
                    >
                        Corazón del Cibao
                    </span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg">
                    En Banco Santiago SA, protegemos tus ahorros y te impulsamos a alcanzar
                    tus metas con la solidez que mereces.
                </p>
                <div
                    className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center"
                >
                    {/* Pendiente a implementar el siguiente button y enlace */}
                    <button
                        className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-8 text-base font-bold text-primaryText  shadow-lg shadow-primary/25 transition-all hover:bg-accent-hover hover:scale-105 focus-visible:outline-none"
                    >
                        Abre tu cuenta gratis
                    </button>
                    <a
                        href="#"
                        className="inline-flex h-12 items-center justify-center rounded-lg border  border-slate-800 bg-background px-8 text-base font-bold  shadow transition-all hover:bg-slate-900 focus-visible:outline-none gap-2 notranslate"
                        translate="no"
                    >
                        <span className="text-accent">
                            <MoneyBagIcon size={24} />
                        </span>
                        Solicita tu préstamo
                    </a>
                </div>
            </div>
        </section>
    )
}