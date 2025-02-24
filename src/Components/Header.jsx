import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate()
    const [isOpen, isSetOpen] = useState(false)
    const handleOptionClick = () => {
        isSetOpen(false);
    };
    return (
        <>

            <div className="flex justify-center mt-10 select-none inline-block">

                <h1 className='font-bold cursor-pointer text-4xl pr-6'>LOGO</h1>
                <div className='h-10 w-0.5 bg-white'></div>
                <div className='flex justify-center pr-20 cursor-pointer font-serif text-xl pl-6 mt-1.5 space-x-6'>
                    <h1 onClick={() => navigate('/')} className=" hover:text-orange-600 duration-300">Anasayfa</h1>
                    <h1 className=" hover:text-orange-600 duration-300">Biz Kimiz?</h1>
                    <h1 className=" hover:text-orange-600 duration-300">Menü</h1>
                    <h1 className=" hover:text-orange-600 duration-300 pr-1">Blog</h1>
                </div>

                <div className='relative' onMouseEnter={() => isSetOpen(true)} onMouseLeave={() => isSetOpen(false)}>

                    <h1 className='hover:text-orange-600 duration-300 cursor-pointer font-serif text-xl pl-3 mt-1.5 -ml-20'>Bize Ulaşın<ExpandMoreIcon fontSize='small' className='mb-0.5' /></h1>
                    {isOpen && (
                        <div className="absolute left-0 mt-2 w-40 bg-slate-800 text-white border-gray-300 rounded-sm shadow-lg">
                            <ul className="py-2">
                                <li onClick={handleOptionClick} className="px-4 py-2 hover:text-orange-700 duration-300 cursor-pointer">
                                    İletişim
                                </li>
                                <li onClick={handleOptionClick} className="px-4 py-2 hover:text-orange-700 duration-300 cursor-pointer">
                                    AAAAA
                                </li>
                                <li onClick={handleOptionClick} className="px-4 py-2 hover:text-orange-700 duration-300 cursor-pointer">
                                    BBBBBB
                                </li>
                                <li onClick={handleOptionClick} className="px-4 py-2 hover:text-orange-700 duration-300 cursor-pointer">
                                    CCCCCC
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Header