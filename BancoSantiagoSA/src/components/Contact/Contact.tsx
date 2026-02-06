import { MailIcon } from "../icons/MailIcon"
import { AsideContact } from "./AsideContact"
import { ContactForm } from "./ContactForm"

export const Contact = () => {
    return (
        <section className="mx-auto px-4 max-w-7xl w-full mt-24 max-md:mt-12">
            <article className="mb-6">
                <span className="flex flex-col items-center text-center">
                    <MailIcon size={48} className="stroke-accent stroke-2" />
                    <h2 className="mb-2 text-4xl md:text-5xl text-center font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-linear-to-r from-accent to-primaryText">
                        Contactanos
                    </h2>
                    <p>Si tienes alguna pregunta, dudas o reclamaciones, no dudes en contactarnos.</p>
                </span>
            </article>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <ContactForm />
                <AsideContact className=" md:mt-12" />
            </div>
        </section>
    )
}