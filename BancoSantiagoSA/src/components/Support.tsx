import { ChevronIcon } from "./icons/ChevronIcon"
import { EarPhonesIcon } from "./icons/EarPhonesIcon"
import { MailIcon } from "./icons/MailIcon"
import { PhoneIcon } from "./icons/PhoneIcon"

export const Support = () => {
    return (
        <section
            className="mx-auto max-w-7xl  w-full px-3 pt-12 text-primaryText overflow-hidden"
        >
            <h2 className="flex items-center gap-3 text-2xl mb-6">
                <EarPhonesIcon size={32} className="text-accent/80 relative -top-0.5" />
                <span className="font-medium">
                    Asistencia y Soporte
                </span>
            </h2>
            <p className="text-baseText leading-7 mb-16">
                Si tienes cualquier duda, no dudes contactarte con nosotros através de los siguientes canales, estamos disponibles de
                {' '}
                <span className="text-primaryText">
                    Lunes a Viernes de 8:00 am a 5:00 pm
                </span>
                {' '}
                y
                {' '}
                <span className="text-primaryText">
                    Sabados de 8:00am a 12:00pm
                </span>
            </p>
            <div className="flex gap-24 justify-between">
                <div className="w-1/2 max-sm:w-full">

                    <h3 className="text-xl mb-12"  >
                        Llamanos
                    </h3>
                    <div className="ml-6 max-sm:ml-0 mb-16 flex flex-wrap gap-16">
                        <a href="tel:+18092410134" className="flex items-center gap-2 text-primaryText hover:bg-accent/20 px-4 py-4 rounded-md">
                            <PhoneIcon size={24} className="text-accent/80" />
                            <span className="ml-2 text-baseText">
                                +1 809 241 0134
                            </span>
                        </a>
                        <a href="tel:+18094807977" className="flex items-center gap-2 text-primaryText hover:bg-accent/20 px-4 py-4 rounded-md">
                            <PhoneIcon size={24} className="text-accent/80" />
                            <span className="ml-2 text-baseText">
                                +1 809 480 7977
                            </span>
                        </a>
                    </div>
                    <h3 className="text-xl mb-12"  >
                        Envianos un correo
                    </h3>
                    <div className="ml-6 max-sm:ml-0 mb-16 flex flex-wrap gap-16">
                        <a href="mailto:info@cincinnatus.edu.do" className="flex items-center gap-2 text-primaryText hover:bg-accent/20 px-4 py-4 rounded-md">
                            <MailIcon size={24} className="text-accent/80" />
                            <span className="text-baseText">
                                info@cincinnatus.edu.do
                            </span>
                        </a>
                        <a href="mailto:va@cincinnatus.edu.do" className="flex items-center gap-2 text-primaryText hover:bg-accent/20 px-4 py-4 rounded-md">
                            <MailIcon size={24} className="text-accent/80" />
                            <span className="text-baseText">
                                va@cincinnatus.edu.do
                            </span>
                        </a>
                    </div>
                </div>
                <div className="self-center max-sm:hidden w-max justify-center">
                    <div className="relative -top-12 bg-[url('/images/girl-support.webp')] z-10 w-84 h-84 bg-cover bg-center bg-no-repeat">
                        <ChevronIcon className="absolute w-full h-max  left-0 -bottom-12" />
                    </div>
                </div>
            </div>
        </section>
    )

}