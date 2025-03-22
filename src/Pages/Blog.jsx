import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from "framer-motion";
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';


function Blog() {
    const navigate = useNavigate();

    return (
        <>

            <div className='select-none relative'>

                <img className='h-[500px] w-full' src="https://wallpapers.com/images/hd/plain-black-desktop-lkf8asac31jppw0w.jpg" alt="aboutbanner" />

                <div className='absolute top-0 left-0 flex flex-col mt-72 ml-72 text-white'>

                    <h1 className='text-4xl font-bold'>BLOG</h1>

                    <div className='flex items-center space-x-3 mt-5'>
                        <span className='h-1 w-16 bg-white'></span>

                        <div className='flex items-center space-x-1'>

                            <h1
                                onClick={() => navigate('/')}
                                className='text-sm text-neutral-400 hover:text-white cursor-pointer duration-300'
                            >
                                Anasayfa
                            </h1>

                            <ArrowRightAltIcon fontSize='small' className='mt-0.5' />
                            <h2 className='text-md'>Blog</h2>

                        </div>

                    </div>

                </div>

            </div>


            <div className="grid place-items-center bg-neutral-100 select-none ">

                <motion.div
                    className="transition-colors hover:scale-105"
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 4, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Link to={"https://www.instagram.com/?flo=true"} target='_blank'>

                        <div className='h-[250px] w-[1000px] bg-white shadow-xl mt-32 ml-10 rounded-sm'>

                            <div className='flex'>

                                <img className='h-[250px] w-[400px]' src="https://info.ehl.edu/hubfs/1440/1440x960-barista.jpg" alt="blog" />
                                <h1 className='w-[235px] ml-14 mt-5 font-bold text-lg hover:text-orange-600 duration-300'>Bizi İnstagramdan Takip Et!</h1>
                                <p style={{ width: "500px" }} className='-ml-[234px] mt-[60px]' ><SubdirectoryArrowRightIcon style={{ width: "18px", height: "18px" }} className='mb-1 mr-1' />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab velit possimus aut facilis facere iure labore, magnam repellat nihil tempora animi, doloribus deserunt ipsam distinctio! Saepe odit eaque quibusdam accusamus.</p>

                            </div>

                            <div className='h-[45px] w-[50px] -mt-[70px] ml-[665px] bg-white flex justify-center cursor-pointer'>

                                <InstagramIcon fontSize='large' className='mt-0.5 ml-0.5 hover:text-orange-800' />

                            </div>

                        </div>

                    </Link>

                </motion.div>

                <motion.div

                    className="transition-colors hover:scale-105"
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 4, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className='flex'>

                        <div className='h-56 w-[491px] bg-white mt-10 ml-10 rounded-sm'>

                            <img className='h-72 w-[491px] backdrop-opacity-70' src="https://i.nefisyemektarifleri.com/2023/04/27/americano-kahve-nedir-nasil-yapilir-9-faydasi-5.jpg" alt="blog" />

                        </div>

                        <div className='h-72 w-[491px] bg-white mt-10 ml-5 rounded-sm '>

                            <img className='h-72 w-[491px]' src="https://kahvebaz.com/wp-content/uploads/2016/01/Latte-660x330.jpg" alt="blog" />

                        </div>

                    </div>

                </motion.div>

                <motion.div
                    className="transition-colors hover:scale-105"
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 4, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className='h-[250px] w-[1000px] bg-white shadow-xl mt-[40px] ml-10 rounded-sm'>

                        <div className='flex'>

                            <h1 onClick={() => navigate('/location')} className='w-[126px] h-1 font-bold text-lg ml-14 mt-7 hover:text-orange-600 duration-300 cursor-pointer'>Bizi Ziyaret Et!</h1>
                            <p style={{ width: "400px" }} className=' -ml-[127px] mt-16'><SubdirectoryArrowRightIcon style={{ width: "18px", height: "18px" }} className='mb-1 mr-1' />Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, debitis?</p>
                            <img className='h-[250px] w-[450px] ml-auto' src="https://www.rivaicmimarlik.com/upload/images/sayfalar/2023/kahve-dukkani-dekorasyon-fikirleri-45029-6671568981.jpg" alt="blog" />

                        </div>

                        <div className='-mt-[70px] mr-[460px] bg-white flex justify-center cursor-pointer'>

                            <button onClick={() => navigate('/location')} className='h-9 w-[170px] text-lg font-serif border-2 border-black rounded-sm  hover:border-orange-900 hover:bg-orange-800 hover:text-white duration-300'>Bizi Ziyaret Et</button>

                        </div>

                    </div>

                </motion.div>

                <motion.div
                    className="transition-colors hover:scale-105 mb-[150px]"
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 4, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className='h-[450px] w-[1000px] relative bg-white mt-10 ml-10 group'>
                        <img className='h-[450px] w-[1000px]' src="https://www.rivaicmimarlik.com/upload/images/sayfalar/2022/butik-cafe-ic-mimari-tasarimi-44923-5089991667.jpg" alt="blog" />

                        <div className='h-80 w-96 opacity-85 bg-white absolute bottom-20 left-10 transition-all duration-500 rounded-sm group-hover:left-1/2 group-hover:-bottom-20 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2'>

                            <h1 onClick={() => navigate('/menü')} className='mt-6 ml-10 text-2xl font-bold hover:text-orange-800 duration-300 cursor-pointer'>Menümüze Göz Atın <ExpandMoreTwoToneIcon className='mb-1' /></h1>
                            <span className='block h-1 w-20 bg-black mt-1 ml-10 rounded-sm'></span>
                            <p style={{ width: "300px" }} className='ml-[40px] mt-6'><SubdirectoryArrowRightIcon style={{ width: "18px", height: "18px" }} className='mb-1 mr-1' />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, ducimus incidunt aspernatur blanditiis eum deserunt?</p>
                            <button onClick={() => navigate('/menü')} className='h-9 w-32 mt-10  ml-[120px] text-xl font-serif bg-white border-2 border-black rounded-sm hover:border-orange-900 hover:bg-orange-800 hover:text-white duration-300 '>Menü</button>

                        </div>

                    </div>

                </motion.div>

            </div>

        </>
    )
}

export default Blog
