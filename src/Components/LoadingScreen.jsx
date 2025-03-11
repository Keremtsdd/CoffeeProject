import React, { useState, useEffect } from "react";

const LoadingScreen = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Yükleme animasyonunun 3 saniye sonra tamamlanması
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 3000); // 3 saniye sonra yükleme ekranı kaybolur
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Yükleme ekranı */}
            {!isLoaded && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black z-50"
                >
                    <div className="relative w-24 h-24 bg-[#3e2723] rounded-full">
                        <div
                            className="absolute bottom-0 left-0 w-full bg-[#6f4f1e] rounded-b-full"
                            style={{
                                height: isLoaded ? "100%" : "0",
                                transition: "height 3s",
                            }}
                        ></div>
                    </div>
                    <h1 className="text-white text-xl mt-4">Kahveniz Hazırlanıyor...</h1>
                </div>
            )}

        </>
    );
};

export default LoadingScreen;


