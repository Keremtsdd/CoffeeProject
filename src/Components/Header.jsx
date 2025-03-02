import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const handleOptionClick = () => {
        setIsOpen(false);
    };
    return (
        <>

            <div className="flex justify-center mt-10 select-none inline-block">

                <h1 onClick={() => navigate('/')} className='font-bold cursor-pointer text-4xl pr-6'>LOGO</h1>
                <div className='h-10 w-0.5 bg-white'></div>
                <div className='flex justify-center pr-20 cursor-pointer font-serif  text-lg pl-6 mt-1.5 space-x-6'>
                    <h1 onClick={() => navigate('/')} className="relative hover:text-orange-600 duration-300 cursor-pointer group text-xl">
                        Anasayfa
                        <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </h1>
                    <h1 onClick={() => navigate('/about')} className="relative hover:text-orange-600 duration-300 cursor-pointer group text-xl">
                        Biz Kimiz?
                        <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </h1>
                    <h1 className="relative hover:text-orange-600 duration-300 cursor-pointer group text-xl">
                        Menü
                        <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </h1>
                    <h1 className="relative hover:text-orange-600 duration-300 cursor-pointer group pr-1 text-xl">
                        Blog
                        <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </h1>

                </div>

                <div className='relative' onMouseMove={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>

                    <h1 className="relative hover:text-orange-600 duration-300 cursor-pointer font-serif text-xl pl-6 mt-1.5 -ml-20 group inline-block ">
                        <span className="relative flex items-center">
                            Bize Ulaşın
                            <ExpandMoreIcon fontSize="small" className="mb-0.5" />
                        </span>
                        <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-orange-600 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
                    </h1>


                    {isOpen && (
                        <div className="absolute left-0 mt-2 w-40 bg-slate-800 text-white border-gray-300 rounded-sm shadow-lg">
                            <ul className="py-2">
                                {["İletişim", "AAAAA", "BBBBBB", "CCCCCC"].map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={handleOptionClick}
                                        className="px-4 py-2 hover:text-orange-600 duration-300 cursor-pointer relative group"
                                    >
                                        {item}
                                        <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Header