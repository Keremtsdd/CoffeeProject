import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from "framer-motion";

function Blog() {
    const navigate = useNavigate();
    return (
        <div>

            <div className='select-none relative'>

                <img className='h-[500px] w-full' src="https://wallpapers.com/images/hd/plain-black-desktop-lkf8asac31jppw0w.jpg" alt="aboutbanner" />

                <div className='absolute top-0 left-0 flex flex-col mt-72 ml-72 text-white'>

                    <h1 className='text-4xl font-bold'>BLOG</h1>

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
                            <h2 className='text-md'>Blog</h2>
                        </div>

                    </div>
                </div>
            </div>


            <div className="grid place-items-center bg-neutral-200 select-none ">

                <motion.div
                    className="transition-colors hover:scale-105"
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 4, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className='h-[250px] w-[1000px] bg-white shadow-xl mt-32 ml-10 rounded-sm '>

                        <div className='flex'>
                            <img className='h-[250px] w-[400px]' src="https://info.ehl.edu/hubfs/1440/1440x960-barista.jpg" alt="blog" />
                            <h1 className='w-[570px] ml-14 mt-5 font-bold text-lg hover:text-orange-600 duration-300'>Bizi İnstagramdan Takip Et!</h1>
                            <p style={{ width: "500px" }} className='-ml-[570px] mt-[60px]' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab velit possimus aut facilis facere iure labore, magnam repellat nihil tempora animi, doloribus deserunt ipsam distinctio! Saepe odit eaque quibusdam accusamus.</p>
                        </div>

                    </div>

                </motion.div>

                <motion.div
                    className="transition-colors hover:scale-105"
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 4, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}

                >
                    <div className='h-[45px] w-[50px] -mt-[70px] ml-[440px] bg-white flex justify-center cursor-pointer'>

                        <Link to={"https://www.instagram.com/?flo=true"} target='_blank'>
                            <InstagramIcon fontSize='large' className='mt-0.5 ml-0.5 hover:text-orange-800' />
                        </Link>

                    </div>
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

                            <img className='h-72 w-[491px]' src="https://cdn.myikas.com/images/4fe7a638-08b1-4511-af04-b1e5c46eff18/0029026b-46be-4a90-a184-350c7c285273/image_1080.jpg" alt="blog" />

                        </div>

                        <div className='h-72 w-[491px] bg-white mt-10 ml-5 rounded-sm '>

                            <img className='h-72 w-[491px]' src="https://www.deryauluduz.com/wp-content/uploads/2020/03/kahve-faydali-mi-zararli-mi.jpg" alt="blog" />

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
                            <h1 className='w-[126px] h-1 font-bold text-lg ml-14 mt-7 hover:text-orange-600 duration-300'>Bizi Ziyaret Et!</h1>
                            <p style={{ width: "400px" }} className=' -ml-[127px] mt-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, debitis?</p>
                            <img className='h-[250px] w-[500px] ml-auto' src="https://www.rivaicmimarlik.com/upload/images/sayfalar/2023/kahve-dukkani-dekorasyon-fikirleri-45029-6671568981.jpg" alt="blog" />
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
                    <div className='h-[250px] w-[1000px] bg-white shadow-xl mt-10 ml-10 mb-44 rounded-sm'>
                        <img className='h-[250px] w-[400px]' src="https://media4.giphy.com/media/9uIxmnknkXCDzNF0HY/giphy.gif?cid=6c09b9525ulu1cpauhuvndmn7s1ufpoemqp1ojlbvx7izakf&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" alt="blog" />
                    </div>

                </motion.div>



            </div>






        </div>
    )
}

export default Blog
