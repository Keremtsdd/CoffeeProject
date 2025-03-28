import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CopyrightIcon from '@mui/icons-material/Copyright';

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

                    <div className="flex items-center space-x-5 mt-7">

                        <Link to={"https://www.instagram.com/"} target='_blank'>
                            <InstagramIcon style={{ width: "32px", height: "32px" }} />
                        </Link>

                        <Link to={"https://www.Whatsapp.com/"} target='_blank'>
                            <WhatsAppIcon style={{ width: "32px", height: "32px" }} />
                        </Link>

                        <Link to={"https://www.youtube.com/"} target='_blank'>
                            <YouTubeIcon style={{ width: "37px", height: "37px" }} />
                        </Link>

                        <Link to={"https://www.x.com/"} target='_blank'>
                            <XIcon style={{ width: "28px", height: "28px" }} />
                        </Link>

                    </div>

                    <span className='h-0.5 w-[515px] rounded-sm bg-white/30 block mt-14'></span>
                    <p className="mt-6 text-sm text-center select-text selection:bg-orange-700">Copyright <CopyrightIcon style={{ width: "17px", height: "17px" }} className='mb-0.5' /> 2025 Your Company Name. Tüm Hakları Saklıdır.</p>

                </div>

                <div className='flex h-[350px] w-full bg-white'>

                    <div>
                        <h1 className='mt-14 ml-52 font-bold text-3xl'>İletişim</h1>
                        <span className='h-1 w-12 ml-[209px] rounded-sm bg-black block'></span>
                        <p onClick={() => navigate('/location')} style={{ width: "318px" }} className="mt-5 ml-[205px] font-serif flex items-center select-text selection:bg-orange-400 hover:text-orange-700 duration-300 cursor-pointer"><LocationOnOutlinedIcon className="mr-3 " />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deserunt.</p>
                        <p style={{ width: "185px" }} className='ml-[205px] mt-5 text-lg font-serif flex items-center select-text selection:bg-orange-400 hover:text-orange-700 duration-300 cursor-pointer'><a href="tel:+905421020028" className="flex items-center"><LocalPhoneOutlinedIcon className='mr-2' />+90 542 102 00 28</a></p>
                        <p style={{ width: "185px" }} className='ml-[206px] mt-5 font-serif text-lg select-text selection:bg-orange-400 hover:text-orange-700 duration-300 cursor-default'><EmailOutlinedIcon className='mr-2 mb-0.5' /> info@dükkan.com</p>
                    </div>

                    <div className='group'>
                        <h1 className='mt-14 ml-28 font-bold text-3xl'>Menü</h1>
                        <span className='h-1 w-10 ml-[114px] rounded-sm bg-black block'></span>
                        <p onClick={() => navigate('/menü')} style={{ width: "130px" }} className='mt-5 ml-[106px] cursor-pointer hover:text-orange-700 duration-300 transition-transform hover:translate-x-1'><KeyboardArrowRightIcon style={{ height: "20px", width: "25px" }} />Sıcak İçecekler</p>
                        <p className='mt-1 ml-[106px] cursor-pointer hover:text-orange-700 duration-300 transition-transform hover:translate-x-1'><KeyboardArrowRightIcon style={{ height: "20px", width: "25px" }} />Soğuk İçecekler</p>
                        <p style={{ width: "100px" }} className='mt-1 ml-[106px] cursor-pointer hover:text-orange-700 duration-300 transition-transform hover:translate-x-1'><KeyboardArrowRightIcon style={{ height: "20px", width: "25px" }} />Tatlılar</p>
                    </div>

                    <div>

                        <h1 className='font-bold text-3xl mt-14 ml-[111px]'>Bülten/Haber</h1>
                        <span className='h-1 w-14 ml-[114px] rounded-sm bg-black block'></span>
                        <p style={{ width: "250px" }} className='text-xs mt-5 ml-[116px] hover:text-orange-800 duration-300 '>Kahve tutkunları için özel fırsatlar, yeni ürünler ve lezzetli tarifler doğrudan e-postanıza gelsin! Bültenimize kaydolun, kahve deneyiminizi bir adım öteye taşıyın.</p>

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
