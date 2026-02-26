
import { useEffect, useRef } from "react"
import { HandHeartIcon } from "./icons/HandHeartIcon"
import { ChevronRightIcon } from "./icons/ChevronRightIcon"
import { PiggyBankIcon } from "./icons/piggyBankIcon"
import { HeartIcon } from "./icons/HeartIcon"
import { DataCenterIcon } from "./icons/DataCenterIcon"
import { FlashIcon } from "./icons/FlashIcon"
import { CashBackIcon } from "./icons/CashBackIcon"
import { Phone2Icon } from "./icons/Phone2Icon"
import { LazyLoadImagen } from "./LazyLoadImagen"
import { Link } from "react-router"

const services = [
    {
        Icon: PiggyBankIcon,
        title: "Cuentas Santiago Ahorra",
        description: `Abre tu cuenta 100% digital, sin balances mínimos y con metas de ahorro personalizadas desde tu App`,
        image: "/images/prestamos-personales.webp",
        link: "/prestamos-personales",
    },
    {
        Icon: CashBackIcon,
        title: "Tarjeta Santiago Cashback",
        description: `Recibe devoluciones por tus compras diarias en supermercados y farmacias con control total desde el celular`,
        image: "/images/cashback.webp",
        link: "/cashback",
    },
    {
        Icon: FlashIcon,
        title: "Préstamos al Instante",
        description: "Solicita tu crédito personal en minutos con desembolso inmediato a tu cuenta y sin trámites físicos",
        image: '/images/prestamos-al-instante.jpg',
        link: "/prestamos-al-instante",
    },
    {
        Icon: DataCenterIcon,
        title: "Centro de Pagos",
        description: "Paga tus servicios, impuestos y recargas de forma rápida, segura y con opción de programación automática",
        image: "/images/centros-de-pago.jpg",
        link: "/centros-de-pago",
    },
    {
        Icon: HeartIcon,
        title: "Santiago de Una",
        description: "Envía dinero a tus contactos en tiempo real usando solo su número de teléfono o escaneando un código QR",
        image: "/images/ciudad-corazon.jpg",
        link: "/ciudad-corazon",
    },
    {
        Icon: Phone2Icon,
        title: "Certificados Digitales",
        description: "Invierte tus ahorros con tasas preferenciales y gestiona tus rendimientos totalmente en línea desde tu hogar",
        image: "/images/certificado-digital.jpg",
        link: "/certificado-digital",
    }
]

export const Services = () => {
    const ContainRef = useRef<HTMLDivElement>(null);
    const prevButtonRef = useRef<HTMLButtonElement>(null);
    const nextButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const scrollContainer = ContainRef.current;
        const prevButton = prevButtonRef.current;
        const nextButton = nextButtonRef.current;

        if (!scrollContainer || !prevButton || !nextButton) return;

        const firstService = scrollContainer.firstChild as Element
        const lastService = scrollContainer.lastChild as Element

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(({ target, isIntersecting }) => {
                if (target === firstService) {
                    prevButton.style.display = isIntersecting ? 'none' : 'block';
                }

                if (target === lastService) {

                    nextButton.style.display = isIntersecting ? 'none' : 'block';
                }
            });
        }, {
            threshold: 0.9,
            root: scrollContainer
        });

        observer.observe(firstService)
        observer.observe(lastService)

    }, [])

    const handleClick = ({ direction }: { direction: 'next' | 'prev' }) => {
        if (ContainRef.current) {
            ContainRef.current.scrollBy({
                behavior: 'smooth',
                left: direction === 'next' ? 500 : -500
            })
        }
    }

    return (
        <section
            className="mx-auto max-w-7xl w-full px-3 text-primaryText"
        >
            <h2 className="flex items-center gap-3 text-2xl mb-2">
                <HandHeartIcon size={32} className="text-accent/80 relative -top-0.5" />
                <span className="font-medium">
                    Lo que tenemos para ti
                </span>
            </h2>
            <div className="relative px-3">
                <PrevNextButton type="prev" buttonRef={prevButtonRef} onClick={() => handleClick({ direction: 'prev' })}>
                    <ChevronRightIcon size={24} className="stroke-white rotate-180" />
                </PrevNextButton>
                <div
                    ref={ContainRef}
                    className="group flex snap-x snap-mandatory overflow-x-scroll w-full h-91 gap-6 p-1 bg-gray-100 rounded-xl">
                    {
                        services.map(({ Icon, title, description, image, link }, index) => (
                            <div key={index} className={`relative shrink-0 max-w-[500px] w-full snap-start flex flex-col justify-center rounded-xl`}>
                                <div className="absolute z-10 w-full h-full px-14 flex flex-col justify-center  rounded-xl">
                                    <h2 className="flex items-center gap-2 text-secondaryText text-xl mb-4">
                                        <span>{Icon({ size: 32, className: 'text-accent fill-accent relative -top-0.5' })}</span>
                                        {' '}
                                        {title}
                                    </h2>
                                    <p className="text-baseColor mb-4">{description}</p>
                                    <Link to={link} className="text-accent hover:brightness-130 transition-colors font-semibold">Conocer mas</Link>
                                </div>
                                <LazyLoadImagen src={image} alt="" className="w-full h-full object-cover rounded-xl" />
                            </div>
                        ))
                    }
                </div>
                <PrevNextButton type="next" buttonRef={nextButtonRef} onClick={() => handleClick({ direction: 'next' })}>
                    <ChevronRightIcon size={24} className="stroke-white" />
                </PrevNextButton>
                <ChevronRightIcon size={24} className="stroke-white" />
            </div>
        </section >
    )
}

interface PrevNextButtonProps {
    type: 'prev' | 'next';
    children: React.ReactNode;
    buttonRef: React.Ref<HTMLButtonElement>;
    onClick: () => void;
}

const PrevNextButton = ({ type, children, onClick, buttonRef }: PrevNextButtonProps) => (
    <button
        ref={buttonRef}
        className={`absolute z-20 top-[30%] ${type === 'prev' ? 'left-0' : 'right-0'} -translate-y-1/2 bg-accent hover:brightness-120  p-3 rounded-md cursor-pointer`}
        onClick={onClick}
    >
        {children}
    </button>
)