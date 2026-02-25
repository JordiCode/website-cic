import { useState } from "react"
import { ChevronRightIcon } from "./icons/ChevronRightIcon"
import { QuestionIcon } from "./icons/QuestionIcon";
import { Link } from "react-router";

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
        <section
            className="mx-auto max-w-7xl  w-full px-3 pt-12 text-primaryText overflow-hidden"
        >
            <h2 className="flex items-center gap-3 text-2xl mb-6">
                <QuestionIcon size={32} className="text-accent/80 relative -top-0.5" />
                <span className="font-medium">
                    Preguntas y respuestas
                </span>
            </h2>
            <p className="text-baseText leading-7 mb-8">
                Explora las preguntas más frecuentes para resolver tus dudas al instante. Si no encuentras exactamente lo que buscas, no te preocupes: nuestra
                <Link to="/guia-de-ayuda" className="text-primaryText underline">
                    {' '}
                    Guía de ayuda
                    {' '}
                </Link>
                tiene toda la información detallada que necesitas.
            </p>

            <div className="w-full px-5 flex gap-8 flex-col ">
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
        <div>
            <p
                className={`flex justify-between text-primaryText  ${isOpen ? 'rounded-t-3xl bg-accent/40' : 'rounded-3xl bg-secondaryColor/10'} hover:bg-accent/40  p-5 cursor-pointer`}
                onClick={toggleOpen}
            >
                <span>
                    {question}
                </span>
                <ChevronRightIcon size={24} className={`transition-transform ${isOpen ? 'rotate-90' : ''}`} />
            </p>
            <p className={`text-baseText p-5 px-10 ${isOpen ? '' : 'hidden'}`}>
                {answer}
            </p>
        </div>
    )
}