import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';

function Language() {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <>
            <div className="flex space-x-2 left-6 text-sm select-none mt-2">

                <div className="relative group">
                    <LanguageIcon
                        style={{ width: "18px", height: "18px" }}
                        className=" -mt-[2.5px]"
                    />
                    <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-2">
                        Language
                    </span>
                </div>

                <h1
                    className="hover:text-neutral-400 duration-150 cursor-pointer flex"
                    onClick={() => changeLanguage('tr')}
                >
                    TR
                </h1>
                <span className="h-3 w-0.5 mt-1 bg-white"></span>
                <h1
                    className="hover:text-neutral-400 duration-150 cursor-pointer flex"
                    onClick={() => changeLanguage('en')}
                >
                    EN

                </h1>
                <span className="h-3 w-0.5 mt-1 bg-white"></span>
                <h1
                    className="hover:text-neutral-400 duration-150 cursor-pointer flex"
                    onClick={() => changeLanguage('de')}
                >
                    DE

                </h1>
                <span className="h-3 w-0.5 mt-1 bg-white"></span>
                <h1
                    className="hover:text-neutral-400 duration-150 cursor-pointer flex"
                    onClick={() => changeLanguage('ar')}
                >
                    AR

                </h1>
            </div>
        </>
    );
}

export default Language;

