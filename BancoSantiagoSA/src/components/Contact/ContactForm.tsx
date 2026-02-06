export const ContactForm = ({ className }: { className?: string }) => {
    return (
        <form className={`${className} flex flex-col gap-6 rounded-3xl`}>
            <div className="flex flex-col gap-2">
                <label htmlFor="identity-card" className="text-md text-primaryText">Número de Cedula <span className="text-red-400">*</span></label>
                <input name="identity-card" id="identity-card" type="text" placeholder="00000000000" className="outline-none focus:border-accent p-3 border border-secondaryText/30 bg-secondaryText/10 text-primaryText rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-md text-primaryText">Asunto <span className="text-red-400">*</span></label>
                <select name="subject" id="subject" className="outline-none focus:border-accent p-3 border border-secondaryText/30 bg-secondaryText/10 text-primaryText rounded-md" required>
                    <option value="">Consulta</option>
                    <option value="">Solicitud de Pago</option>
                    <option value="">Reclamaciones</option>
                    <option value="">Activación de Tarjeta</option>
                    <option value="">Otros</option>
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-md text-primaryText">Mensaje <span className="text-red-400">*</span></label>
                <textarea name="message" id="message" cols={30} rows={10} className="outline-none p-3 focus:border-accent resize-none border border-secondaryText/30 bg-secondaryText/10 text-primaryText rounded-md" required></textarea>
            </div>
            <button type="submit" className="self-start py-3 px-12 bg-accent rounded-md hover:scale-105 transition-transform text-lg font-md text-primaryText">Enviar</button>
        </form>
    )
}