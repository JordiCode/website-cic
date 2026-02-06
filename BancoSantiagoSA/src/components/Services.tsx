import { Tabs } from "./Tabs/Tabs"

export const Services = () => {
    return (
        <section className="mx-auto max-w-7xl mt-24 max-md:mt-12">
            <div className="text-center mb-8">
                < h2
                    className="text-4xl md:text-5xl mb-2 text-center font-black tracking-tight text-primaryText leading-[1.1]"
                >
                    Nuestros
                    {' '}
                    <span className="text-accent">
                        Servicios
                    </span>
                </h2 >
                <p>Conoce los servicios que tenemos para brindarte</p>
            </div >
            <Tabs />
        </section >
    )
}