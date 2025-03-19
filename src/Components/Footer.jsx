import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Footer() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setMessage("Lütfen bir e-posta adresi girin!");
            setIsError(true);
        } else {
            setMessage("E-posta adresiniz kaydedildi.");
            setIsError(false);
        }

        setEmail("");
    };

    return (
        <>
            <div className='flex select-none'>
                <div className="h-[350px] w-[800px] bg-black text-white flex flex-col items-center">
                    <h1 onClick={() => navigate('/')} className="font-bold text-5xl mt-20 cursor-pointer">
                        LOGO
                    </h1>
                    <p className="mt-2 font-serif cursor-text">Lorem ipsum dolor sit amet.</p>

                    <div className="flex items-center space-x-5 mt-7 cursor-pointer">
                        <Link to={"https://www.instagram.com/"} target='_blank'>
                            <motion.div
                                whileHover={{ scale: 1.2, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <InstagramIcon style={{ width: "32px", height: "32px" }} className=" text-white hover:text-orange-500 duration-300 transition-colors" />
                            </motion.div>
                        </Link>
                        <Link to={"https://www.Whatsapp.com/"} target='_blank'>
                            <motion.div
                                whileHover={{ scale: 1.2, opacity: 0.8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <WhatsAppIcon style={{ width: "32px", height: "32px" }} className=" text-white hover:text-orange-500 transition-colors" />
                            </motion.div>
                        </Link>
                        <Link to={"https://www.youtube.com/"} target='_blank'>
                            <motion.div
                                whileHover={{ scale: 1.2, opacity: 0.8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <YouTubeIcon style={{ width: "37px", height: "37px" }} className=" text-white hover:text-orange-500 transition-colors" />
                            </motion.div>
                        </Link>
                        <Link to={"https://www.x.com/"} target='_blank'>
                            <motion.div
                                whileHover={{ scale: 1.2, opacity: 0.8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <XIcon style={{ width: "28px", height: "28px" }} className=" text-white hover:text-orange-500 transition-colors" />
                            </motion.div>
                        </Link>
                    </div>
                    <span className='h-0.5 w-[515px] rounded-sm bg-white/10 block mt-14'></span>
                    <p className="mt-6 text-sm text-center select-text selection:bg-orange-700">Copyright © 2025 Your Company Name. Tüm Hakları Saklıdır.</p>
                </div>

                <div className='flex h-[350px] w-full bg-white'>
                    <div>
                        <h1 className='mt-14 ml-52 font-bold text-3xl'>İletişim</h1>
                        <span className='h-1 w-12  ml-[209px] rounded-sm bg-black block'></span>
                        <p onClick={() => navigate('/location')} style={{ width: "318px" }} className="mt-5 ml-[205px] font-serif flex items-center select-text selection:bg-orange-400 hover:text-orange-700 duration-300 cursor-pointer"><LocationOnOutlinedIcon className="mr-3 " />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deserunt. </p>
                        <p className='ml-[205px] mt-5 text-lg font-serif flex items-center select-text selection:bg-orange-400 hover:text-orange-700 duration-300 cursor-default'><LocalPhoneOutlinedIcon className='mr-2' /> +90 542 102 00 28</p>
                        <p className='ml-[206px] mt-5 font-serif text-lg select-text selection:bg-orange-400 hover:text-orange-700 duration-300 cursor-default'><EmailOutlinedIcon className='mr-2 mb-0.5' /> info@dükkan.com</p>
                    </div>
                    <div className='group'>
                        <h1 className='mt-14 ml-28 font-bold text-3xl'>Menü</h1>
                        <span className='h-1 w-10 ml-[114px] rounded-sm bg-black block'></span>
                        <p className='mt-5 ml-[106px] cursor-pointer hover:text-orange-700 duration-300 transition-transform hover:translate-x-1.5'><KeyboardArrowRightIcon />Sıcak İçecekler</p>
                        <p className='mt-1 ml-[106px] cursor-pointer hover:text-orange-700 duration-300 transition-transform hover:translate-x-1.5'><KeyboardArrowRightIcon />Soğuk İçecekler</p>
                        <p className='mt-1 ml-[106px] cursor-pointer hover:text-orange-700 duration-300 transition-transform hover:translate-x-1.5'><KeyboardArrowRightIcon />Yiyecekler</p>
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl mt-14 ml-[111px]'>Bülten/Haber</h1>
                        <span className='h-1 w-14 ml-[114px] rounded-sm bg-black block'></span>
                        <p style={{ width: "200px" }} className='text-xs mt-6 ml-[116px] hover:text-orange-700 duration-300 '>Güncel bültenden haberdar olmak için e-posta listemize kayıt olun.</p>

                        <form onSubmit={handleSubmit} className="flex items-center gap-0 mt-2 ml-[115px]">
                            <input
                                type="email"
                                placeholder=" E-posta adresinizi giriniz"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-11 w-[210px] border-2 border-black focus:outline-none focus:ring-0 mt-1"

                            />
                            <button
                                type="submit"
                                className="h-11 w-12 mt-1 border-2 bg-black border-black flex items-center justify-center"
                            >
                                <ArrowForwardIcon style={{ width: "26px", height: "30px" }} className="text-white hover:text-neutral-400" />
                            </button>
                        </form>
                        {message && (
                            <p className={`mt-0.5 ml-14 text-sm text-center ${isError ? "text-red-500" : "text-green-600"}`}>
                                {message}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
