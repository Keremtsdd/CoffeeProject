import React from 'react';
import { useTranslation } from 'react-i18next';

function Language() {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <>
            <div className="flex space-x-2 left-6 text-sm select-none mt-2">
                <h1
                    className="hover:text-neutral-400 duration-150 cursor-pointer flex hover:opacity-70"
                    onClick={() => changeLanguage('tr')}
                >
                    TR <img src="https://media.istockphoto.com/id/1393393847/tr/vekt%C3%B6r/the-national-flag-of-turkey.jpg?s=612x612&w=0&k=20&c=9QY_WvJnUjrNj14pomDopTZ_DWmBpcRaiMvQp75wyc8=" alt="TR" className='h-4 w-6 pl-1 mt-0.5' />
                </h1>
                <span className="h-3 w-0.5 mt-1 bg-white"></span>
                <h1
                    className="hover:text-neutral-400 duration-150 cursor-pointer flex hover:opacity-70"
                    onClick={() => changeLanguage('en')}
                >
                    EN <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1200px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" alt="EN" className='h-4 w-6 pl-1 mt-0.5' />

                </h1>
                <span className="h-3 w-0.5 mt-1 bg-white"></span>
                <h1
                    className="hover:text-neutral-400 duration-150 cursor-pointer flex hover:opacity-70"
                    onClick={() => changeLanguage('de')}
                >
                    DE <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png" alt="DE" className='h-4 w-6 pl-1 mt-0.5' />

                </h1>
                <span className="h-3 w-0.5 mt-1 bg-white"></span>
                <h1
                    className="hover:text-neutral-400 duration-150 cursor-pointer flex hover:opacity-70"
                    onClick={() => changeLanguage('ar')}
                >
                    AR <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" alt="AR" className='h-4 w-6 pl-1 mt-0.5' />

                </h1>
            </div>
        </>
    );
}

export default Language;

