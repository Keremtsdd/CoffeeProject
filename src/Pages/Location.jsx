import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Map from '../Components/Map';

function Location() {
    const navigate = useNavigate()
    return (
        <div className="relative">

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

            <div className="flex justify-between space-x-12 mt-32 px-16">

                <div className="h-[100px] w-[800px] ml-52" >
                    <Map />
                </div>

                <div className="space-y-6 w-3/5 mt-7">

                    <div className='flex space-x-2 ml-20'>
                        <LocationOnIcon fontSize='large' />
                        <h1>Konum: Dükkan Adresiniz</h1>
                    </div>
                    <div className='flex space-x-2 ml-20'>
                        <PhoneIcon fontSize='large' />
                        <h1>Telefon: 0123456789</h1>
                    </div>
                    <div className='flex space-x-2 ml-20'>
                        <EmailIcon fontSize='large' />
                        <h1>E-posta: info@kahvedukkani.com</h1>
                    </div>

                    <div>
                        <h1 className='mb-5 ml-20 mt-14 text-2xl font-bold'>Çalışma Saatleri;</h1>
                        <h1 className='ml-20 text-xl'> <KeyboardArrowRightIcon /> Hafta İçi: 08:00-19:00</h1>
                        <h1 className='ml-20 text-xl'> <KeyboardArrowRightIcon /> Hafta Sonu: 08:00-19:00</h1>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Location;

