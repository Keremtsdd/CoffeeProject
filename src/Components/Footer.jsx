import React from 'react'
import { useState } from "react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function Footer() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Abone olunan e-posta:", email);
        setEmail("");
    };
    return (
        <>
            <div className='flex'>

                <div className='h-[350px] w-[800px] bg-gray-600 mt-32'>

                </div>

                <div className='flex h-[350px] w-full bg-white mt-32 '>

                    <div>
                        <h1 className='mt-14 ml-52 font-bold text-3xl'>İletişim</h1>
                        <span className='h-1 w-14 mt-1 ml-[209px] rounded-sm bg-black block hover:bg-white'></span>
                        <p style={{ width: "350px" }} className="mt-5 ml-[205px] font-serif flex items-center"><LocationOnOutlinedIcon className="mr-3 " />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deserunt. </p>
                        <p className='ml-[205px] mt-5 text-lg font-serif flex items-center '><LocalPhoneOutlinedIcon className='mr-2' /> +90 542 102 00 28</p>
                        <p className='ml-[206px] mt-5 font-serif text-lg '><EmailOutlinedIcon className='mr-2 mb-0.5' /> info@dükkan.com</p>
                    </div>

                    <div>
                        <h1 className='mt-14 ml-28 font-bold text-3xl'>Menü</h1>
                        <span className='h-1 w-10 mt-1 ml-[114px] rounded-sm bg-black block hover:bg-white'></span>
                        <p className='mt-5 ml-[106px] cursor-pointer hover:underline '><KeyboardArrowRightIcon />Soğuk İçecekler</p>
                        <p className='mt-1 ml-[106px] cursor-pointer hover:underline'><KeyboardArrowRightIcon />Sıcak İçecekler</p>
                        <p className='mt-1 ml-[106px] cursor-pointer hover:underline'><KeyboardArrowRightIcon />Yiyecekler</p>
                    </div>

                    <div>
                        <h1 className='font-bold text-3xl mt-14 ml-[111px]'>Bülten/Haber</h1>
                        <span className='h-1 w-14 mt-1 ml-[114px] rounded-sm bg-black block hover:bg-white'></span>
                        <p style={{ width: "200px" }} className='text-xs mt-6 ml-[116px] '>Güncel bültenden haberdar olmak için e-posta listemize kayıt olun.</p>

                        <form onSubmit={handleSubmit} className="flex items-center gap-0 mt-2 ml-[115px]">
                            <input
                                type="email"
                                placeholder=" E-Posta Adresinizi Giriniz"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-11 w-[210px] border-2 border-black focus:outline-none focus:ring-0 mt-1"
                                required
                            />
                            <button
                                type="submit"
                                className="h-11 w-12 mt-1 border-2 bg-black border-black flex items-center justify-center"
                            >
                                <ArrowCircleRightOutlinedIcon className="text-white hover:text-neutral-400" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
