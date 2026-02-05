import { FacebookIcon } from "../icons/FacebookIcon"
import { InstagramIcon } from "../icons/InstagramIcon"
import { YoutubeIcon } from "../icons/YouTubeIcon"

export const Footer = () => {
    return (
        <footer className="py-8 px-4 max-w-7xl mx-auto w-[95%] border-t border-secondaryText mt-12  flex flex-wrap gap-5 justify-between items-center">
            <div className="flex gap-4 flex-wrap">
                <a href="#" className="hover:text-primaryText">Terminos Legales</a>
                <a href="#" className="hover:text-primaryText">Privacidad</a>
                <a href="#" className="hover:text-primaryText">Cookies</a>
            </div>
            <div className="flex gap-6">
                <a href="#">
                    <FacebookIcon size={24} className="text-secondaryText hover:text-primaryText" />
                </a>
                <a href="#">
                    <InstagramIcon size={24} className="text-secondaryText hover:text-primaryText" />
                </a>
                <a href="#">
                    <YoutubeIcon size={24} className="text-secondaryText hover:text-primaryText" />
                </a>
            </div>
        </footer>
    )
}
