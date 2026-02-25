import { Link } from "react-router"
import { FacebookIcon } from "../icons/FacebookIcon"
import { InstagramIcon } from "../icons/InstagramIcon"
import { YoutubeIcon } from "../icons/YouTubeIcon"

export const Footer = () => {
    return (
        <footer className="py-8 px-4 max-w-7xl mx-auto w-full border-t border-baseText/20 mt-12  flex flex-wrap gap-5 justify-between items-center">
            <div className="flex gap-4 flex-wrap text-baseText">
                <Link to="/terminos-legales" className="hover:text-primaryText px-2 py-4 hover:bg-accent/40 rounded-md">Terminos Legales</Link>
                <Link to="/privacidad" className="hover:text-primaryText px-2 py-4 hover:bg-accent/40 rounded-md">Privacidad</Link>
                <Link to="/cookies" className="hover:text-primaryText px-2 py-4 hover:bg-accent/40 rounded-md">Cookies</Link>
            </div>
            <div className="flex gap-6 text-baseText">
                <a href="#">
                    <FacebookIcon size={24} className="hover:text-primaryText" />
                </a>
                <a href="#">
                    <InstagramIcon size={24} className="hover:text-primaryText" />
                </a>
                <a href="#">
                    <YoutubeIcon size={24} className="hover:text-primaryText" />
                </a>
            </div>
        </footer>
    )
}
