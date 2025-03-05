import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';


function About() {
    const navigate = useNavigate()
    return (
        <>

            <div>
                <img className='h-[500px] w-full select-none' src="https://wallpapers.com/images/hd/plain-black-desktop-lkf8asac31jppw0w.jpg" alt="aboutbanner" />

                <div className='absolute top-0 left-0 flex flex-col mt-72 ml-72 text-white'>
                    <h1 className='text-3xl font-bold'>Biz Kimiz?</h1>

                    <div className='flex items-center space-x-3 mt-5'>
                        <span className='h-1 w-10  bg-white'></span>
                        <div className='flex items-center space-x-1'>
                            <h2
                                onClick={() => navigate('/')}
                                className='text-sm text-neutral-400 hover:text-white cursor-pointer duration-300'
                            >
                                Anasayfa
                            </h2>
                            <ArrowRightAltIcon fontSize='small' className='mt-0.5' />
                            <h2 className='text-md'>Biz Kimiz?</h2>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
