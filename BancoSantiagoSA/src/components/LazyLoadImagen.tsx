import { useEffect, useState } from "react";

export const LazyLoadImagen = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = src;
        image.onload = () => setIsLoaded(true);
    },
        [src]
    )

    return (
        <div className={`relative ${className}`}>
            <img
                src={src}
                alt={alt}
                className={`transition-opacity duration-500 ease-in-out object-cover w-full h-full 
                ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
            <div className="absolute inset-0 ">
                <div className="w-full h-full  bg-gray-800/80" />
            </div>

        </div>
    )
}   