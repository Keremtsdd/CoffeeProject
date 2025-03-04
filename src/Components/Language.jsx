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
                    className="hover:text-neutral-400 duration-150 cursor-pointer"
                    onClick={() => changeLanguage('tr')}
                >
                    TR
                </h1>
                <span className="h-3 w-0.5 mt-1 bg-white"></span>
                <h1
                    className="hover:text-neutral-400 duration-150 cursor-pointer"
                    onClick={() => changeLanguage('en')}
                >
                    EN
                </h1>
                <span className="h-3 w-0.5 mt-1 bg-white"></span>
                <h1
                    className="hover:text-neutral-400 duration-150 cursor-pointer"
                    onClick={() => changeLanguage('de')}
                >
                    DE
                </h1>
                <span className="h-3 w-0.5 mt-1 bg-white"></span>
                <h1
                    className="hover:text-neutral-400 duration-150 cursor-pointer"
                    onClick={() => changeLanguage('ar')}
                >
                    AR
                </h1>
            </div>
        </>
    );
}

export default Language;

