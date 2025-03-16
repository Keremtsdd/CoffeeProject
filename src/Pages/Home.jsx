import React from 'react'
import { motion } from "framer-motion";
import ReviewSection from "../Pages/ReviewSection";

function Home() {
    return (
        <>

            <div className='w-full bg-neutral-200'>

                <video
                    className="w-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src="https://cdn.create.vista.com/api/media/medium/710613894/stock-video-footage-machine-cooling-roasted-beans.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="absolute top-0 left-0 w-full h-[1000px] flex justify-center items-center text-white">

                    <div className=''>
                        <h1 className='text-8xl font-bold ml-20'>BURASI SLOGAN YERİ</h1>
                        <h1 className='text-8xl font-bold'>BURASI ALT SLOGAN YERİ</h1>
                        <h1 className='flex justify-center mt-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus porro ab sed veniam impedit iusto, natus aspernatur, </h1>
                        <h1 className='flex justify-center'>earum laudantium reprehenderit facilis commodi blanditiis fugit? Adipisci mollitia voluptatibus nobis, repudiandae, consectetur </h1>
                        <h1 className='flex justify-center mt-20 font-bold text-5xl'>LOGO</h1>
                    </div>

                </div>


                <div className="flex justify-center items-center absolute top-full left-0 w-full z-30">
                    <div className="flex justify-center items-center space-x-8 h-96 w-1/2 bg-white rounded-sm shadow-xl transition-transform hover:scale-105">
                        <img
                            className="h-full w-3/6 object-cover rounded-sm"
                            src="https://images.stockcake.com/public/e/0/7/e077b8de-e7d7-427b-9dcd-7b57a766d759_large/steaming-morning-coffee-stockcake.jpg"
                            alt="sds"
                        />
                        <div className="text-center pl-6">

                            <h2 className="text-2xl font-bold">Görselin Yanındaki Metin</h2>
                            <p>Burada metninizi yazabilirsiniz. Görselin sağında yer alacak şekilde hizalanacak.</p>

                        </div>

                    </div>
                </div>

                <motion.div

                    className="transition-colors hover:scale-105"
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 4, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >

                    <div className='flex justify-center items-center mt-14'>

                        <div className='flex justify-center items-center space-x-8 h-96 w-1/2 mt-72 bg-white shadow-xl rounded-sm transition-transform hover:scale-105'>

                            <div className='text-center'>

                                <h2 className='text-2xl font-bold'>Görselin Yanındaki Metin</h2>

                                <p>Burada metninizi yazabilirsiniz. Görselin sağında yer alacak şekilde hizalanacak.</p>

                                <div className='mt-[80px]  select-none'>

                                    <button className='h-10 w-32 border-2 border-black rounded-sm hover:bg-black duration-500 hover:text-white font-bold '>Button</button>

                                </div>

                            </div>

                            <img className='h-96 w-3/6 object-cover rounded-sm'
                                src="https://ideacdn.net/idea/cx/20/myassets/products/780/2.jpg?revision=1697143329"
                                alt="sds" />
                        </div>
                    </div>

                </motion.div>

                <motion.div
                    className="transition-colors hover:scale-105"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 4, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className='flex justify-center items-center mt-14 '>

                        <div className='flex justify-center items-center space-x-8 w-1/2 mt-4 bg-white shadow-xl rounded-sm transition-transform hover:scale-105'>

                            <img className='h-96 w-3/6 object-cover rounded-sm'
                                src="https://www.nescafe.com/tr/sites/default/files/2024-09/Nes_ConEco3.0_B2_Article24-YourCompleteCoffeeCupGuide_Image%204-1066%20%C3%97%20970_0.jpg"
                                alt="sds" />

                            <div className='text-center'>

                                <h2 className='text-2xl font-bold'>Görselin Yanındaki Metin</h2>
                                <p>Burada metninizi yazabilirsiniz. Görselin sağında yer alacak şekilde hizalanacak.</p>

                            </div>
                        </div>
                    </div>
                </motion.div>

                <ReviewSection />

            </div>
        </>
    )
}

export default Home
