import React from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Menü() {
    const navigate = useNavigate()
    return (

        <>
            <div className='select-none bg-neutral-100'>

                <img className='h-[500px] w-full ' src="https://wallpapers.com/images/hd/plain-black-desktop-lkf8asac31jppw0w.jpg" alt="Menüİmage" />

                <div className='absolute top-0 left-0 flex flex-col mt-72 ml-72 text-white'>
                    <h1 className='text-4xl font-bold'>MENÜ</h1>

                    <div className='flex items-center space-x-3 mt-5'>

                        <span className='h-1 w-16  bg-white'></span>

                        <div className='flex items-center space-x-1'>

                            <h2
                                onClick={() => navigate('/')}
                                className='text-sm text-neutral-400 hover:text-white cursor-pointer duration-300'
                            >
                                Anasayfa
                            </h2>

                            <ArrowRightAltIcon fontSize='small' className='mt-0.5' />
                            <h2 className='text-md'>Menü</h2>

                        </div>

                    </div>

                </div>


                <span className='h-5 w-[1420px] ml-[250px] mt-16 bg-orange-600 block rounded-sm'></span>

                <div className='flex'>

                    <div className='ml-10'>

                        <div>

                            <h1 className='ml-[300px] mt-20 font-bold text-xl'>SICAK İÇECEKLER</h1>

                            <h1 style={{ width: "140px" }} className='ml-[300px] mt-4 text-lg hover:text-orange-600 duration-300 transition-transform hover:translate-x-1'><KeyboardArrowRightIcon className='mb-1' style={{ height: "20px", width: "25px" }} />Sıcak Kahveler</h1>
                            <h1 style={{ width: "110px" }} className='ml-[300px] mt-1.5 text-lg hover:text-orange-600 duration-300 transition-transform hover:translate-x-1'><KeyboardArrowRightIcon className='mb-0.5' style={{ height: "20px", width: "25px" }} />Karışımlar</h1>
                            <h1 style={{ width: "160px" }} className='ml-[300px] mt-1.5 text-lg hover:text-orange-600 duration-300 transition-transform hover:translate-x-1'><KeyboardArrowRightIcon className='mb-1' style={{ height: "20px", width: "25px" }} />Sıcak Çikolatalar</h1>
                            <h1 style={{ width: "77px" }} className='ml-[300px] mt-1.5 text-lg hover:text-orange-600 duration-300 transition-transform hover:translate-x-1'><KeyboardArrowRightIcon className='mb-0.5' style={{ height: "20px", width: "25px" }} />Çaylar</h1>

                        </div>

                        <span className='h-0.5 w-56 mt-10 bg-black/60 block ml-[300px]'></span>

                        <div>

                            <h1 className='ml-[300px] mt-7 font-bold text-xl'>SOĞUK İÇECEKLER</h1>

                            <h1 style={{ width: "150px" }} className='ml-[300px] mt-4 text-lg hover:text-orange-600 duration-300 transition-transform hover:translate-x-1'><KeyboardArrowRightIcon className='mb-0.5' style={{ height: "20px", width: "25px" }} />Soğuk Kahveler</h1>
                            <h1 style={{ width: "155px" }} className='ml-[300px] mt-1.5 text-lg hover:text-orange-600 duration-300 transition-transform hover:translate-x-1'><KeyboardArrowRightIcon className='mb-0.5' style={{ height: "20px", width: "25px" }} />Buzlu Karışımlar</h1>
                            <h1 style={{ width: "250px" }} className='ml-[300px] mt-1.5 text-lg hover:text-orange-600 duration-300 transition-transform hover:translate-x-1'><KeyboardArrowRightIcon className='mb-1' style={{ height: "20px", width: "25px" }} />Meyveli Soğuk Smoothieler</h1>
                            <h1 style={{ width: "135px" }} className='ml-[300px] mt-1.5 text-lg hover:text-orange-600 duration-300 transition-transform hover:translate-x-1'><KeyboardArrowRightIcon className='mb-0.5' style={{ height: "20px", width: "25px" }} />Soğuk Çaylar</h1>

                        </div>

                        <span className='h-0.5 w-56 mt-10 bg-black/60 block ml-[300px]'></span>

                        <div>

                            <h1 className='ml-[300px] mt-7 font-bold text-xl'>TATLILAR</h1>

                            <h1 style={{ width: "120px" }} className='ml-[300px] mt-4 text-lg hover:text-orange-600 duration-300 transition-transform hover:translate-x-1'><KeyboardArrowRightIcon className='mb-0.5' style={{ height: "20px", width: "25px" }} />Tüm Tatlılar</h1>


                        </div>

                        <span className='h-0.5 w-56 mt-10 bg-black/60 block ml-[300px]'></span>

                        <div>

                            <h1 className='ml-[300px] mt-7 font-bold text-xl'>SANDVİÇLER</h1>

                            <h1 style={{ width: "150px" }} className='ml-[300px] mt-4 text-lg hover:text-orange-600 duration-300 transition-transform hover:translate-x-1'><KeyboardArrowRightIcon className='mb-0.5' style={{ height: "20px", width: "25px" }} />Tüm Sandviçler</h1>


                        </div>

                    </div>

                    <span className='h-[735px] w-0.5 mt-16 ml-12 mb-[190px] bg-black/15 block'></span>

                </div>

            </div>
        </>
    )
}

export default Menü
