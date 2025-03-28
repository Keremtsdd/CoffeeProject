import React, { useState, useEffect } from "react";

const images = [
    {
        src: "https://c.pxhere.com/photos/a0/80/coffee_cup_and_saucer_black_coffee_tea_spoon_teaspoon_beverage_saucer_drink-554594.jpg!d",
    },
    {
        src: "https://c.pxhere.com/photos/29/65/coffee_cup_and_saucer_black_coffee_loose_coffee_beans_loose_beans_coffee_beans_beans_teaspoon-554590.jpg!d",
    },
    {
        src: "https://capherangxay.vn/wp-content/uploads/2021/11/cac-loai-ca-phe.jpg",
    },
];

function Menuİmages() {
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

export default Menuİmages;
