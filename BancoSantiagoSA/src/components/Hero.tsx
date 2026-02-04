import { Star } from "./icons/Star"
const features = [
    { name: "Pagos en línea" },
    { name: "Soporte 24/7" },
    { name: "Ofertas de pagos" },
    { name: "Tarjetas de débito" }
]

export const Hero = () => {
    return (
        <section className="w-full h-max bg-sky-900 p-2.5 py-24 flex items-center">
            <div>
                <h1 className="text-4xl font-bold max-w-2xl mb-8">Aprovecha todos los beneficios que tenemos para ti</h1>

                <section className="flex gap-5 flex-wrap">
                    {
                        features.map((feature) => (
                            <p className="bg-blue-500 rounded-md p-2 flex gap-2 items-center transition-transform hover:scale-104">
                                <Star size={20} />
                                {' '}
                                {feature.name}
                            </p>
                        ))
                    }
                </section>
            </div>
        </section>
    )
}