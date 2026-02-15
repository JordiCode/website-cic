
import { useEffect, useRef } from "react"
import { HandHeartIcon } from "./icons/HandHeartIcon"
import { ChevronRightIcon } from "./icons/ChevronRightIcon"

const services = [
    {
        title: "Prestamos personales",
        description: "En Banco Santiago SA, protegemos tus ahorros y te impulsamos a alcanzar tus metas con la solidez que mereces",
        image: "/images/prestamos-personales.webp",
        link: "https://www.google.com",
    },
    {
        title: "Prestamos personales",
        description: "En Banco Santiago SA, protegemos tus ahorros y te impulsamos a alcanzar tus metas con la solidez que mereces",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        link: "https://www.google.com",
    },
    {
        title: "Prestamos personales",
        description: "En Banco Santiago SA, protegemos tus ahorros y te impulsamos a alcanzar tus metas con la solidez que mereces",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
        link: "https://www.google.com",
    },
    {
        title: "Prestamos personales",
        description: "En Banco Santiago SA, protegemos tus ahorros y te impulsamos a alcanzar tus metas con la solidez que mereces",
        image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=800&q=80",
        link: "https://www.google.com",


    },
    {
        title: "Prestamos personales",
        description: "En Banco Santiago SA, protegemos tus ahorros y te impulsamos a alcanzar tus metas con la solidez que mereces",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80",
        link: "https://www.google.com",
    },
    {
        title: "Prestamos personales",
        description: "En Banco Santiago SA, protegemos tus ahorros y te impulsamos a alcanzar tus metas con la solidez que mereces",
        image: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=800&q=80",
        link: "https://www.google.com",
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
            entries.forEach((entry) => {
                if (entry.target === firstService) {
                    prevButton.style.display = entry.isIntersecting ? 'none' : 'block';
                }

                if (entry.target === lastService) {

                    nextButton.style.display = entry.isIntersecting ? 'none' : 'block';
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
                    Descubre Nuestros Servicios
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

                        services.map(({ title, description, image, link }, index) => (
                            <div key={index} className={`relative shrink-0 max-w-[500px] w-full snap-start flex flex-col justify-center bg-gray-900/75 rounded-xl`}>
                                <div className="absolute z-10 w-full h-full px-14 flex flex-col justify-center bg-gray-900/75 rounded-xl">
                                    <h2 className="text-secondaryText text-xl mb-4">{title}</h2>
                                    <p className="text-baseColor mb-4">En Banco{description}</p>
                                    <a href={link} className="text-accent font-semibold">Conocer mas</a>
                                </div>
                                <img src={image} alt="" className="w-full h-full object-cover rounded-xl" />
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
        className={`absolute z-20 top-[30%] ${type === 'prev' ? 'left-0' : 'right-0'} -translate-y-1/2 bg-accent p-3 rounded-md cursor-pointer`}
        onClick={onClick}
    >
        {children}
    </button>
)