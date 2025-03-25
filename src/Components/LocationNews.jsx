import React, { useState, useEffect } from "react";

const images = [
    {
        src: "https://www.rivaicmimarlik.com/upload/images/sayfalar/2022/butik-cafe-ic-mimari-tasarimi-44923-5089991667.jpg",
    },
    {
        src: "https://www.pimak.com/assets/images/blog/butik.jpg",
    },
    {
        src: "https://www.rivaicmimarlik.com/upload/images/sayfalar/2023/kahve-dukkani-dekorasyon-fikirleri-45029-6671568981.jpg",
    },
];

function LocationNews() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const intervalId = setInterval(nextImage, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative w-full max-w-4xl h-96 mx-auto overflow-hidden shadow-sm select-none">

            <div
                className="absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateY(-${currentIndex * 100}%)`,
                    height: `${images.length * 33.4}%`,
                }}
            >
                {images.map((item, index) => (
                    <div key={index} className="relative w-full">
                        <img
                            src={item.src}
                            alt={item.text}
                            className="w-full h-96 object-cover block"
                        />
                    </div>
                ))}
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-1 transition-all duration-300 ${index === currentIndex ? "bg-white" : "bg-gray-500"}`}
                    ></div>
                ))}
            </div>

        </div>
    );
}

export default LocationNews;

