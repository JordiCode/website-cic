//import { FAQ } from "../components/FAQ"
import { FAQ } from "../components/FAQ"
import { Hero } from "../components/Hero"
import { Footer } from "../components/layout/Footer"
//import { Location } from "../components/Location"
import { Services } from "../components/Services"
import { Support } from "../components/Support"

export const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Support />
            <FAQ />
            {/* <Location /> */}
        </>
    )
}

