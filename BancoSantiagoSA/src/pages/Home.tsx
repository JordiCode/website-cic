import { Contact } from "../components/Contact"
import { FAQ } from "../components/FAQ"
import { Hero } from "../components/Hero"
import { Location } from "../components/Location"
import { Services } from "../components/Services"

export const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Location />
            <Contact />
            <FAQ />
        </>
    )
}

