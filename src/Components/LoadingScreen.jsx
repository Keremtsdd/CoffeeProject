import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const messages = ["Kahveniz Hazırlanıyor...", "Sizin İçin En İyi Seçim : )"];
    const [currentMessage, setCurrentMessage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentMessage(prevMessage => (prevMessage + 1) % messages.length);
        }, 2300);

        return () => clearInterval(timer);
    }, [messages.length]);

    return (
        <div className="loading-screen bg-black ">
            <p className='text-5xl font-extralight text-neutral-400'>{messages[currentMessage]}</p>
        </div>
    );
};

export default LoadingScreen;
