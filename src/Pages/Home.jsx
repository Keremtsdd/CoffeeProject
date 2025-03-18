import React from 'react'
import { motion } from "framer-motion";
import StarIcon from '@mui/icons-material/Star';

function Home() {
    return (
        <>
            <div className='w-full bg-neutral-100 '>

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
                    <div className="flex justify-center items-center space-x-8 h-96 w-1/2 bg-white rounded-sm shadow-xl">
                        <img
                            className="h-full w-3/6 object-cover rounded-sm select-none"
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

                    className=""
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 4, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >

                    <div className='flex justify-center items-center mt-14'>

                        <div className='flex justify-center items-center space-x-8 h-96 w-1/2 mt-72 bg-white shadow-xl rounded-sm '>

                            <div className='text-center'>

                                <h2 className='text-2xl font-bold'>Görselin Yanındaki Metin</h2>

                                <p>Burada metninizi yazabilirsiniz. Görselin sağında yer alacak şekilde hizalanacak.</p>

                                <div className='mt-[80px]  select-none'>

                                    <button className='h-10 w-32 border-2 border-black rounded-sm hover:bg-black/90 duration-500 hover:text-white font-bold '>Button</button>

                                </div>

                            </div>

                            <img className='h-96 w-3/6 object-cover rounded-sm select-none'
                                src="https://ideacdn.net/idea/cx/20/myassets/products/780/2.jpg?revision=1697143329"
                                alt="sds" />
                        </div>
                    </div>

                </motion.div>

                <div>
                    <h1 className='w-[380px] flex  ml-[771px] mt-28 font-bold text-4xl hover:text-orange-800 duration-300 select-none'>Popüler Kahvelerimiz</h1>
                    <span className='h-1 w-[80px] bg-black block ml-[773px] mt-3'></span>

                    <div className='flex justify-center mt-[80px]'>

                        <div className='h-[400px] w-[300px] text-center bg-white shadow-2xl ml-10 transition-transform hover:scale-105 border-2 border-black/15' >

                            <img className='h-[250px] w-64 m-5 select-none' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Caffe_Latte_at_Pulse_Cafe.jpg/1200px-Caffe_Latte_at_Pulse_Cafe.jpg" alt="Latte" />
                            <h1 className='flex justify-center -mt-[10px] text-xl font-bold' >Latte</h1>
                            <p className='mr-2 mt-3'> <StarIcon fontSize='inherit' className='mb-1' /> Özel Tarifimizle Hazırlanan Latte Deneyimini Yaşayın</p>

                        </div>

                        <div className='h-[400px] w-[300px] text-center bg-white shadow-2xl ml-10 transition-transform hover:scale-105 border-2 border-black/15' >

                            <img className='h-[250px] w-64 m-5 select-none' src="https://cdn.shopify.com/s/files/1/0569/3987/2340/files/espresso_romano.jpg?v=1731414626" alt="Espresso" />
                            <h1 className='flex justify-center -mt-[10px] text-xl font-bold' >Espresso</h1>
                            <p className='mr-2 mt-3'> <StarIcon fontSize='inherit' className='mb-1' /> Özel Tarifimizle Hazırlanan Espresso Deneyimini Yaşayın</p>

                        </div>

                        <div className='h-[400px] w-[300px] text-center bg-white shadow-2xl ml-10 transition-transform hover:scale-105 border-2 border-black/15' >

                            <img className='h-[250px] w-64 m-5 select-none' src="https://cdn.shopify.com/s/files/1/0264/5809/5650/files/cafe-mocha-main.jpg?v=1684949671" alt="Mocha" />
                            <h1 className='flex justify-center -mt-[10px] text-xl font-bold' >Mocha</h1>
                            <p className='mr-2 mt-3'> <StarIcon fontSize='inherit' className='mb-1' /> Özel Tarifimizle Hazırlanan Mocha Deneyimini Yaşayın</p>

                        </div>

                        <div className='h-[400px] w-[300px] text-center bg-white shadow-2xl ml-10 transition-transform hover:scale-105 border-2 border-black/15 mb-44' >

                            <img className='h-[250px] w-64 m-5 select-none' src="https://perkupcoffee.co/cdn/shop/articles/filtre-kahve-fiyatlari.webp?v=1730969828&width=1100" alt="FiltreKahve" />
                            <h1 className='flex justify-center -mt-[10px] text-xl font-bold' >Filtre Kahve</h1>
                            <p className='mr-2 mt-3'> <StarIcon fontSize='inherit' className='mb-1' /> Özel Tarifimizle Hazırlanan Filtre Kahve Deneyimini Yaşayın</p>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Home
