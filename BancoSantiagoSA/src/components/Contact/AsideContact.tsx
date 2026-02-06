import { MailIcon } from "../icons/MailIcon"
import { PhoneIcon } from "../icons/PhoneIcon"
import { WhatsappIcon } from "../icons/WhatsappIcon"

export const AsideContact = ({ className }: { className?: string }) => {
    return (
        <aside className={`${className} flex flex-col gap-8 `}>
            <div>
                <h3 className="mb-1 text-lg font-bold text-primaryText/80">Canales adicionales</h3>
                <p>Todos nuestros servicios están disponibles 24/7. contactanos en cualquier momento.</p>
            </div>
            <address className="not-italic mb-4">
                <ul className="flex flex-col gap-6">
                    <li>
                        <a href="tel:+00000000000" className="flex gap-8 items-center hover:text-blue-400 transition-colors">
                            <PhoneIcon size={28} className="stroke-accent stroke-2" />
                            <span>+00 000 00 00 00</span>
                        </a>
                    </li>

                    <li>
                        <a href="mailto:example@example.com" className="flex gap-8 items-center hover:text-blue-400 transition-colors">
                            <MailIcon size={28} className="stroke-accent stroke-2" />
                            <span>example@example.com</span>
                        </a>
                    </li>

                    <li>
                        <a href="https://wa.me/00000000000" target="_blank" rel="noopener noreferrer" className="flex gap-8 items-center hover:text-blue-400 transition-colors">
                            <WhatsappIcon size={28} className="fill-accent" />
                            <span>+00 000 00 00 00</span>
                        </a>
                    </li>
                </ul>
            </address>
        </aside>
    )
}