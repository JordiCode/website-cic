import { useState } from "react"
import { ChevronRightIcon } from "./icons/ChevronRightIcon"

const FAQS = [
    {
        id: "robo-perdida-tarjeta",
        question: "¿Qué debo hacer si pierdo o me roban mi tarjeta?",
        answer: "Bloquéala de inmediato desde la sección 'Mis Tarjetas' en la banca en línea o comunícate con nuestra línea de atención al cliente disponible las 24 horas."
    },
    {
        id: "recuperar-password",
        question: "¿Cómo recupero mi contraseña de la Banca en Línea?",
        answer: "Selecciona la opción '¿Olvidaste tu contraseña?' en la pantalla de inicio y sigue los pasos de validación de identidad mediante tu correo electrónico registrado."
    },
    {
        id: "requisitos-prestamo",
        question: "¿Cuáles son los requisitos para un préstamo personal?",
        answer: "Necesitas contar con ingresos comprobables, una antigüedad laboral mínima de 6 meses y presentar tu documento de identidad junto con un recibo de servicios."
    },
    {
        id: "token-digital",
        question: "¿Qué es el Token Digital y para qué sirve?",
        answer: "Es un dispositivo de seguridad dinámico dentro de nuestra app que genera códigos temporales para autorizar tus transferencias y pagos de forma segura."
    },
    {
        id: "activar-debito",
        question: "¿Cómo activo mi nueva tarjeta de débito?",
        answer: "Puedes activarla fácilmente realizando una consulta de saldo en cualquier cajero automático de nuestra red o a través de la opción 'Activar Tarjeta' en la app."
    },
    {
        id: "seguridad-email",
        question: "¿Cómo identifico un correo legítimo del banco?",
        answer: "Nuestros correos oficiales siempre provienen de dominios verificados. Recuerda que nunca te solicitaremos claves, pines o códigos de seguridad por este medio."
    },
    {
        id: "horario-sucursales",
        question: "¿Cuáles son los horarios de atención en sucursales?",
        answer: "Nuestras oficinas están abiertas de lunes a viernes de 9:00 a 17:00 horas y los sábados de 9:00 a 13:00 horas en las sedes principales."
    }
];

export const FAQ = () => {
    return (
        <section className="mx-auto max-w-7xl w-full mt-24 max-md:mt-12 flex flex-col items-center">
            <div className="mb-12">
                <span className="flex flex-col items-center gap-4">
                    <h2 className="text-6xl mb-2 text-center font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-linear-to-r from-primaryText to-accent">
                        Preguntas Frecuentes
                    </h2>
                </span>
            </div>

            <div className="w-full px-5 flex flex-col ">
                {
                    FAQS.map(({ id, question, answer }) => (
                        <Question key={id} question={question} answer={answer} />
                    ))
                }
            </div>
        </section>
    )
}

const Question = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => setIsOpen(!isOpen)

    return (
        <div className="my-2">
            <p className={`flex justify-between text-primaryText bg-secondaryText/50  ${isOpen ? 'rounded-t-3xl' : 'rounded-3xl'} p-5`} onClick={toggleOpen}>
                <span>
                    {question}
                </span>
                <ChevronRightIcon size={24} className={`transition-transform ${isOpen ? 'rotate-90' : ''}`} />
            </p>
            <p className={`bg-secondaryText/20 rounded-b-3xl p-5 ${isOpen ? '' : 'hidden'}`}>
                {answer}
            </p>
        </div>
    )
}