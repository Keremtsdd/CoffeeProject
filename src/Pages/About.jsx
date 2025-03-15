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
            <div className='relative mt-52'>

                <img
                    className='h-[500px] w-[500px] ml-[400px] rounded-sm shadow-2xl hover:opacity-90 duration-300'
                    src={images[currentIndex]}
                    alt="aboutfotos"
                />

                <div className="absolute bottom-4 ml-[650px] transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full flex space-x-2">
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
            <div className='bg-neutral-200'>

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

                    <div className='flex items-center space-x-10'>
                        <AutoSlideshow />
                        <div>
                            <h1 className='mt-44 pl-8 font-bold text-4xl '>NEDEN BİZ ?</h1>
                            <span className="block h-1 w-16 bg-black mb-4 ml-8 mt-1.5 rounded-sm"></span>
                            <p style={{ width: "550px" }} className='font-serif text-lg flex items-start ml-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam labore corporis blanditiis laudantium iste atque? Soluta vero provident, fugit eaque id aut ipsa eum sequi veniam quae corporis voluptatum eligendi nulla necessitatibus quos perferendis dignissimos animi, aliquid, reiciendis suscipit! Iure maiores tenetur nam laboriosam. Illo suscipit aut aliquid quo repellat, eum distinctio iste eligendi fuga quas vel maiores eius, eveniet, quaerat laborum voluptates! Repudiandae earum officia quia numquam deleniti dignissimos atque voluptates, nisi laboriosam pariatur aliquid perspiciatis, a praesentium dicta culpa ipsam porro optio tempore rem sequi quo neque! Sequi ratione officiis quos libero mollitia expedita, hic iure maiores ut.</p>
                        </div>
                    </div>

                    <div>
                        <img className='h-[500px] w-[500px] rounded-sm ml-[1000px] mt-44  shadow-xl hover:opacity-90 duration-300' src="https://www.buseterim.com.tr/upload/default/2019/9/30/kahvehakkndabilmenizgerekenler1000.jpg" alt="Aboutİmg" />
                        <p style={{ width: "500px" }} className='ml-[400px] -mt-[430px] font-serif text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas temporibus cupiditate ex repellendus facilis, dolore molestias consectetur nemo amet eum nulla sunt. Eos exercitationem laudantium obcaecati temporibus. Perferendis rerum recusandae esse amet neque inventore ipsa, in beatae odio molestias quia. Sunt quae est voluptatibus velit eaque repellat placeat quam sint. Quia vero fugiat perspiciatis impedit itaque ipsum delectus sapiente obcaecati rem consectetur voluptas commodi aliquid sint eius, quas maxime doloremque harum corporis dolore nobis dolorum culpa fugit. Sapiente voluptas officia, eaque iure nesciunt in ab, molestias, magni et unde dolor. Earum expedita labore tempore hic aspernatur repellat alias aperiam corrupti?</p>
                    </div>

                </div>

                <div className='h-96 w-full'></div>

            </div>
        </>
    );
}

export default About;




