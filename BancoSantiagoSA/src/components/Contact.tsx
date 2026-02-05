export const Contact = () => {
    return (
        <section className="mx-auto px-6 max-w-7xl w-full mt-24 max-md:mt-12">
            <article className="mb-6">
                <span className="flex flex-col items-center gap-4">
                    <h2 className=" text-6xl mb-2 text-center font-black tracking-tight text-accent leading-[1.1]">
                        Contactanos
                    </h2>
                </span>
            </article>
            <form className="flex flex-col gap-6 rounded-3xl bg-secondaryText/1 px-12 py-16">
                <div className="flex flex-col gap-2">
                    <label htmlFor="cedula" className="text-2xl text-primaryText">Número de Cedula <span className="text-red-400">*</span></label>
                    <input type="text" placeholder="00000000000" className="outline-none focus:border-accent  p-5 border border-secondaryText/30 bg-secondaryText/10 text-primaryText rounded-md" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="cedula" className="text-2xl text-primaryText">Asunto <span className="text-red-400">*</span></label>
                    <select name="" id="" className="outline-none focus:border-accent p-5 border border-secondaryText/30 bg-secondaryText/10 text-primaryText rounded-md">
                        <option value="">Consulta</option>
                        <option value="">Solicitud de Pago</option>
                        <option value="">Reclamaciones</option>
                        <option value="">Activación de Tarjeta</option>
                        <option value="">Otros</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="cedula" className="text-2xl text-primaryText">Mensaje <span className="text-red-400">*</span></label>
                    <textarea name="" id="" cols={30} rows={10} className="outline-none focus:border-accent resize-none p-5 border border-secondaryText/30 bg-secondaryText/10 text-primaryText rounded-md"></textarea>
                </div>
                <button type="submit" className=" self-start p-5 bg-accent rounded-md hover:scale-105 transition-transform text-2xl text-primaryText">Enviar mensaje</button>
            </form>
        </section>
    )
}