import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Map from '../Components/Map';
import ReviewSection from '../Pages/ReviewSection';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import LocationNews from '../Components/LocationNews';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';


function Location() {
    const navigate = useNavigate()
    return (
        <div className="relative bg-neutral-200 ">

            <img className="h-[500px] w-full object-cover" src="https://wallpapers.com/images/hd/plain-black-desktop-lkf8asac31jppw0w.jpg" alt="locationbanner" />

            <div className='absolute top-0 left-0 flex flex-col mt-72 ml-72 text-white'>

                <h1 className='text-4xl font-bold'>BİZİ ZİYARET EDİN</h1>

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
                        <h1 className='text-md'>Bizi Ziyaret Edin</h1>

                    </div>

                </div>

            </div>

            <div className='mt-20'>
                <LocationNews />
                <span className='h-0.5 w-[1100px] mt-24 ml-[395px] rounded-sm bg-gray-400 shadow-xl block'></span>
            </div>

            <div className="flex space-x-12 mt-28 px-16 ">

                <div className="h-[100px] w-[700px] ml-[130px] shadow-2xl" >
                    <Map />
                </div>

                <div className="h-[400px] w-[780px] bg-neutral-100 shadow-2xl flex">

                    <div >

                        <h1 className='mt-[80px] ml-[60px] font-bold text-3xl select-none'>İletişim<PermPhoneMsgIcon className='ml-1 mb-0.5' style={{ height: "29px", width: "29px" }} /></h1>
                        <span className='h-1 w-14 mt-0.5 ml-[61px] rounded-sm bg-black block'></span>
                        <p style={{ width: "320px" }} className="mt-6 ml-[25px] font-serif flex items-center select-text transition-transform hover:translate-x-2 selection:bg-orange-400 duration-500 cursor-default"><LocationOnOutlinedIcon className="mr-3 " />Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deserunt.</p>
                        <p style={{ width: "190px" }} className='ml-[25px] mt-5 text-lg font-serif flex items-center select-text transition-transform hover:translate-x-2 selection:bg-orange-400  duration-500 cursor-pointer'><a href="tel:+905421020028" className="flex items-center"><LocalPhoneOutlinedIcon className='mr-2' />+90 542 102 00 28</a></p>
                        <p style={{ width: "190px" }} className='ml-[25px] mt-5 font-serif text-lg select-text transition-transform hover:translate-x-2 selection:bg-orange-400 duration-500 cursor-default'><EmailOutlinedIcon className='mr-2 mb-0.5' /> info@dükkan.com</p>

                    </div>

                    <div>

                        <h1 className='mt-[80px] ml-16 font-bold text-3xl select-none'>Çalışma Saatleri<AccessTimeFilledRoundedIcon style={{ height: "29px", width: "29px" }} className='ml-2 mb-1' /></h1>
                        <span className='h-1 w-20 mt-1 ml-16 rounded-sm bg-black block'></span>
                        <h1 className='font-serif text-xl ml-16 mt-5 selection:bg-orange-400'>Hafta İçi <ArrowRightAltIcon style={{ height: "29px", width: "29px" }} className='mb-0.5' /> 08:00-19:00</h1>
                        <h1 className='font-serif text-xl ml-16 mt-2 selection:bg-orange-400'>Hafta Sonu <ArrowRightAltIcon style={{ height: "29px", width: "29px" }} className='mb-0.5' /> 08:00-19:00</h1>

                    </div>

                </div>

            </div>

            <div className='flex selection:bg-orange-500'>

                <div className='h-[500px] w-[500px] ml-[280px] mt-[270px] bg-gray-700 shadow-lg'>

                    <h1 style={{ width: "300px" }} className='font-bold text-2xl text-sky-100 mt-16 ml-14'>Yorum Yaparak Bizi Değerlendirebilirsiniz <DoubleArrowIcon /></h1>
                    <span className='h-1 w-32 mt-2 block bg-sky-100 rounded-sm ml-14'></span>

                    <h1 style={{ width: "400px" }} className='ml-14 mt-5 text-white'><SubdirectoryArrowRightIcon fontSize='small mb-1 mr-1' />Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aperiam molestiae blanditiis sunt a quam et quibusdam libero, illum in.</h1>


                </div>

                <div className='mt-20 ml-[163px] mb-[150px] '>
                    <ReviewSection />
                </div>

            </div>

        </div>
    )
}

export default Location;

