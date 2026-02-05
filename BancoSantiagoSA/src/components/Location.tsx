import { MapPinIcon } from "./icons/MapPinIcon"

export const Location = () => {
    return (
        <section className="mx-auto max-w-7xl w-full mt-24 max-md:mt-12 ">
            <article className="mb-4">
                <span className="flex  flex-col items-center gap-4">
                    <MapPinIcon size={48} className="stroke-accent stroke-2" />
                    <h2 className=" text-5xl mb-2 text-center font-black tracking-tight text-primaryText leading-[1.1]">
                        Ubicación
                    </h2>
                </span>
            </article>

            <div className="w-[95%] mx-auto rounded-3xl border-8 border-accent overflow-hidden">
                <p className="p-5 bg-accent text-primaryText">Calle Erick Eckman No. 7, Cerros de Gurabo, Santiago, Republica Dominicana.</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.714404158785!2d-70.68311802416713!3d19.467876481819115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1c58c85453e63%3A0x4af0a63aefa2fd4!2sCincinnatus%20Institute%20of%20Craftsmanship%2C%20Inc.!5e0!3m2!1ses-419!2sdo!4v1770303830559!5m2!1ses-419!2sdo"
                    height="400"
                    className="w-full"
                    loading="lazy"
                >
                </iframe>
            </div>

        </section >
    )

}

