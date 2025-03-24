import React from 'react'
import { motion } from "framer-motion";
import StarIcon from '@mui/icons-material/Star';
import CollectionsIcon from '@mui/icons-material/Collections';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import CoffeeRoundedIcon from '@mui/icons-material/CoffeeRounded';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
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

                    <div className='selection:bg-orange-500'>
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

                        <div className="text-center pl-6 selection:bg-orange-500">

                            <h2 className="text-2xl font-bold">Görselin Yanındaki Metin</h2>
                            <p>Burada metninizi yazabilirsiniz. Görselin sağında yer alacak şekilde hizalanacak.</p>

                        </div>

                    </div>

                </div>

                <motion.div

                    className="selection:bg-orange-500"
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

                                    <button className='h-10 w-32 border-2 border-black rounded-sm hover:bg-black/90 duration-500 hover:text-white font-bold '><CoffeeRoundedIcon style={{ width: "30px", height: "30px" }} /></button>

                                </div>

                            </div>

                            <img className='h-96 w-3/6 object-cover rounded-sm select-none'
                                src="https://ideacdn.net/idea/cx/20/myassets/products/780/2.jpg?revision=1697143329"
                                alt="sds" />

                        </div>

                    </div>

                </motion.div>

                <div>

                    <h1 style={{ width: "335px" }} className='w-[380px] flex  ml-[771px] mt-28 font-bold text-4xl hover:text-orange-800 duration-300 select-none'>Favori Kahvelerimiz</h1>
                    <span className='h-1 w-[80px] bg-black rounded-sm block ml-[773px] mt-1'></span>

                    <div className='flex justify-center mt-[80px] selection:bg-orange-500'>

                        <div className='h-[400px] w-[300px] text-center bg-white shadow-2xl ml-10 transition-transform hover:scale-105 border-2 border-black/15' >

                            <img className='h-[250px] w-64 m-5 select-none' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Caffe_Latte_at_Pulse_Cafe.jpg/1200px-Caffe_Latte_at_Pulse_Cafe.jpg" alt="Latte" />
                            <h1 className='flex justify-center -mt-[10px] text-xl font-bold' >Latte</h1>
                            <p className='mr-2 mt-3  font-serif'> <StarIcon fontSize='inherit' className='mb-1.5' /> Özel Tarifimizle Hazırlanan Latte Deneyimini Yaşayın</p>

                        </div>

                        <div className='h-[400px] w-[300px] text-center bg-white shadow-2xl ml-10 transition-transform hover:scale-105 border-2 border-black/15' >

                            <img className='h-[250px] w-64 m-5 select-none' src="https://cdn.shopify.com/s/files/1/0569/3987/2340/files/espresso_romano.jpg?v=1731414626" alt="Espresso" />
                            <h1 className='flex justify-center -mt-[10px] text-xl font-bold' >Espresso</h1>
                            <p className='mr-2 mt-3  font-serif'> <StarIcon fontSize='inherit' className='mb-1.5' /> Özel Tarifimizle Hazırlanan Espresso Deneyimini Yaşayın</p>

                        </div>

                        <div className='h-[400px] w-[300px] text-center bg-white shadow-2xl ml-10 transition-transform hover:scale-105 border-2 border-black/15' >

                            <img className='h-[250px] w-64 m-5 select-none' src="https://cdn.shopify.com/s/files/1/0264/5809/5650/files/cafe-mocha-main.jpg?v=1684949671" alt="Mocha" />
                            <h1 className='flex justify-center -mt-[10px] text-xl font-bold' >Mocha</h1>
                            <p className='mr-2 mt-3  font-serif'> <StarIcon fontSize='inherit' className='mb-1.5' /> Özel Tarifimizle Hazırlanan Mocha Deneyimini Yaşayın</p>

                        </div>

                        <div className='h-[400px] w-[300px] text-center bg-white shadow-2xl ml-10 transition-transform hover:scale-105 border-2 border-black/15 mb-52' >

                            <img className='h-[250px] w-64 m-5 select-none' src="https://perkupcoffee.co/cdn/shop/articles/filtre-kahve-fiyatlari.webp?v=1730969828&width=1100" alt="FiltreKahve" />
                            <h1 className='flex justify-center -mt-[10px] text-xl font-bold' >Filtre Kahve</h1>
                            <p className='mr-2 mt-3  font-serif'> <StarIcon fontSize='inherit' className='mb-1.5' /> Özel Tarifimizle Hazırlanan Filtre Kahve Deneyimini Yaşayın</p>

                        </div>

                    </div>

                </div>

                <div className='relative h-[900px] w-full'>

                    <img className='h-[800px] w-full opacity-85' src="https://www.rivaicmimarlik.com/upload/images/sayfalar/2023/3-nesil-kahveci-tasarimlari-nasil-olmali-45063-947653669.jpg" alt="fotogaleri" />

                    <div className='absolute h-[630px] w-[395px] bottom-[190px] left-[70px] bg-white/85 shadow-2xl flex justify-center transition-transform hover:scale-105 duration-300'>

                        <img className='h-[600px] w-[370px] mt-4 ' src="https://img.pikbest.com/backgrounds/20250303/a-wooden-table-with-a-surface-in-cozy-cafe-setting_11550642.jpg!w700wp" alt="" />

                    </div>

                    <div className='absolute h-[320px] w-[725px] bottom-[515px] left-[520px] bg-white/85 shadow-2xl flex justify-center transition-transform hover:scale-105 duration-300'>

                        <img className='h-[300px] w-[700px] mt-2.5 ' src="https://img-s3.onedio.com/id-6558f30a325b4e2ecf47dce8/rev-0/w-600/h-338/f-jpg/s-8371a6db6b1996d5eb78d022e3ff1a642a704365.jpg" alt="" />

                    </div>

                    <div className='absolute h-[320px] w-[475px] bottom-[545px] right-[140px] bg-white/85 shadow-2xl flex justify-center transition-transform hover:scale-105 duration-300'>

                        <img className='h-[300px] w-[450px] mt-2.5' src="https://www.superisfikirleri.com/wp-content/uploads/2022/08/kahve-dukkani-acmak-e1661891280706.jpeg" alt="" />

                    </div>

                    <div onClick={() => navigate('/location')} className='absolute h-[340px] w-[370px] bottom-[165px] right-4 bg-black/85 shadow-2xl cursor-pointer'>

                        <div className='h-[310px] w-[295]  m-3.5 bg-white'>

                            <h1 className='pt-10 pl-10 text-2xl font-bold'><CollectionsIcon fontSize='large' className='mb-1 mr-1' />FOTO GALERİ </h1>
                            <span className='h-1 w-20 mt-0.5 ml-10 rounded-sm bg-black block'></span>

                            <p style={{ width: "300px" }} className='pl-10 pt-5 selection:bg-orange-600 hover:text-orange-700 duration-300'><SubdirectoryArrowRightIcon style={{ width: "18px", height: "18px" }} className='-mt-1.5 mr-0.5' />Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sequi. Accusamus possimus nostrum quasi nobis. Aliquam dolorum eius repellat voluptatibus.</p>

                        </div>

                    </div>

                    <div className='absolute h-[300px] w-[425px] bottom-[167px] left-[500px] bg-white/85 shadow-2xl flex justify-center transition-transform hover:scale-105 duration-300'>

                        <img className='h-[280px] w-[400px] mt-2.5' src="https://architab.net/img/cms/blog-resimleri/kahve%20dukkani/kahve%20d%C3%BCkkan%C4%B1%20dekorasyon.jpg" alt="" />

                    </div>

                    <div className='absolute h-[320px] w-[525px] bottom-[150px] right-[420px] bg-white shadow-2xl flex justify-center transition-transform hover:scale-105 duration-300'>

                        <img className='h-[300px] w-[500px] mt-2.5' src="https://cahveland.com/wp-content/uploads/2020/09/dunyadaki-en-iyi-kahve-mekanlari-scaled-e1607901082915.jpg" alt="" />

                    </div>

                </div>

                <div className='bg-neutral-100 w-full h-[110px]'></div>

            </div>

        </>
    )
}

export default Home
