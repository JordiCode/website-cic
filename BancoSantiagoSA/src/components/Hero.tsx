import { ChevronRightIcon } from "./icons/ChevronRightIcon"
import { LogoIcon } from "./icons/LogoIcon"
import { MoneyBagIcon } from "./icons/MoneyBagIcon"

export const Hero = () => {
    return (
        <section className="max-w-7xl w-full mx-auto flex items-center  max-md:flex-col gap-24 max-md:gap-12 overflow-hidden px-3 py-24 max-md:py-12 relative mt-16 text-baseText">
            <div className="w-[80%]">
                <h1 className="text-4xl  text-secondaryColor mb-10">
                    Tu Banco de
                    <br />
                    <span className="text-6xl font-bold text-primaryText">Confianza</span>
                </h1>
                <p className="mb-5 text-secondaryColor/80">En Banco Santiago SA, protegemos tus ahorros y te impulsamos a alcanzar tus metas con la solidez que mereces</p>
                <a
                    href="#"
                    className="text-lg font-semibold flex items-center gap-1 group"
                >
                    <span>Hazte Cliente</span>
                    <ChevronRightIcon size={24} className="transition-transform group-hover:translate-x-1.5" />

                </a>
            </div>
            <div className="px-10 py-8 pb-12 flex flex-col justify-between bg-secondaryColor shadow-2xl  text-secondaryText rounded-xl min-w-[475px] max-md:min-w-full h-[300px]">
                <div className="flex items-center gap-2">
                    <LogoIcon size={36} />
                    <p>Santiago SA</p>
                </div>


                <div className="bg-orange-200 relative w-[85.5px] h-[54px] rounded-lg border border-[#6B543E]/20">
                    <span className="absolute top-0 left-[calc(50%-0.5px)] h-full w-px bg-[#6B543E]"></span>

                    <span className="absolute top-[35%] left-0 w-full h-px bg-[#6B543E]"></span>
                    <span className="absolute top-[70%] left-0 w-full h-px bg-[#6B543E]"></span>

                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-200 border border-[#6B543E] w-[14.4px] h-[28.8px] z-10 rounded-sm"></span>
                </div>

                <p className="flex gap-4 font-semibold tracking-widest">
                    <span>0123</span>
                    <span>4567</span>
                    <span>8901</span>
                    <span>0203</span>
                </p>

            </div>
        </section>
    )
}