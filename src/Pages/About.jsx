import React, { useEffect, useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();
    const images = [
        "https://ideacdn.net/idea/li/11/myassets/blogs/blog-10.jpg?revision=1674214100",
        "https://www.tchibo.com.tr/newmedia/page/img/5e54147ebb0dc076/image_match.jpg",
        "https://kahhve.com/blog/wp-content/uploads/2021/10/pexels-engin-akyurt-2299028.jpg"
    ];

    const AutoSlideshow = () => {
        const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);

            return () => clearInterval(interval);
        }, []);

        return (
            <div className='relative mt-52 ml-80'>

                <img
                    className='h-[500px] w-[500px] rounded-sm shadow-xl duration-500'
                    src={images[currentIndex]}
                    alt="Hakkımızda"
                />

                <div className="absolute bottom-4 left-60 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full flex space-x-2">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === index ? "bg-white scale-125" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>

            </div>
        );
    };

    return (
        <>
            <div className='select-none relative'>
                <img className='h-[500px] w-full' src="https://wallpapers.com/images/hd/plain-black-desktop-lkf8asac31jppw0w.jpg" alt="aboutbanner" />
                <div className='absolute top-0 left-0 flex flex-col mt-72 ml-72 text-white'>
                    <h1 className='text-4xl font-bold'>Biz Kimiz?</h1>
                    <div className='flex items-center space-x-3 mt-5'>
                        <span className='h-1 w-10 bg-white'></span>
                        <div className='flex items-center space-x-1'>
                            <h1
                                onClick={() => navigate('/')}
                                className='text-sm text-neutral-400 hover:text-white cursor-pointer duration-300'
                            >
                                Anasayfa
                            </h1>
                            <ArrowRightAltIcon fontSize='small' className='mt-0.5' />
                            <h2 className='text-md'>Biz Kimiz?</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <AutoSlideshow />
                <img className='h-[500px] w-[500px] rounded-sm ml-[1000px] mt-44  hover:opacity-90' src="https://www.buseterim.com.tr/upload/default/2019/9/30/kahvehakkndabilmenizgerekenler1000.jpg" alt="Aboutİmg" />
            </div>

            <div className='h-96 w-full'></div>
        </>
    );
}

export default About;



