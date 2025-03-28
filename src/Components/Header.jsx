import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Header() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let debounceTimer;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY) {
                setShowHeader(true);
            }

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowHeader(false);
            }

            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => setLastScrollY(currentScrollY), 150);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>

            <div
                className={`fixed left-0 w-full text-white z-50 transition-all duration-300  ${showHeader ? "top-0" : "-top-20"
                    } ${isScrolled ? "bg-black" : ""}`}
            >
                <div className="flex justify-center mt-4 select-none py-4">
                    <h1 onClick={() => navigate('/')} className="font-serif cursor-pointer text-4xl pr-6">
                        diaspora
                    </h1>
                    <div className="h-10 w-0.5 bg-white"></div>

                    <div className="flex justify-center pr-20 cursor-pointer font-serif text-lg pl-6 mt-1.5 space-x-6">
                        <h1 onClick={() => navigate('/')} className="relative hover:text-orange-600 duration-300 cursor-pointer group text-xl">
                            {t("home")}
                            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </h1>
                        <h1 onClick={() => navigate('/about')} className="relative hover:text-orange-600 duration-300 cursor-pointer group text-xl">
                            {t("aboutUs")}
                            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </h1>
                        <h1 onClick={() => navigate('/menü')} className="relative hover:text-orange-600 duration-300 cursor-pointer group text-xl">
                            {t("menu")}
                            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </h1>
                        <h1 onClick={() => navigate('/blog')} className="relative hover:text-orange-600 duration-300 cursor-pointer group pr-1 text-xl">
                            {t("blog")}
                            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </h1>
                    </div>

                    <div className="relative" onMouseMove={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                        <h1 className="relative hover:text-orange-600 duration-300 cursor-pointer font-serif text-xl pl-6 mt-1.5 -ml-20 group inline-block ">
                            <span className="relative flex items-center">
                                {t("contact")}
                                <ExpandMoreIcon fontSize="small" className="mb-0.5" />
                            </span>
                            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-orange-600 transition-all duration-300 ease-out group-hover:w-full group-hover:left-3"></span>
                        </h1>

                        {isOpen && (
                            <div className="absolute -left-6 w-40 bg-black bg-opacity-90 text-white border-gray-300 rounded-sm shadow-lg mt-1.5">
                                <ul className="py-2">
                                    {[
                                        { name: "İletişim", path: "" },
                                        { name: "Bizi Ziyaret Edin", path: "/location" },
                                        { name: "BBBBBB", path: "" },
                                        { name: "CCCCCC", path: "" },
                                    ].map((item, index) => (
                                        <li key={index} className="px-4 py-2 hover:text-orange-600 transition-transform hover:translate-x-2 duration-500 cursor-pointer relative group">
                                            <Link to={item.path} className="block w-full h-full">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;


