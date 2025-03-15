import React, { useEffect, useState } from 'react'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { motion } from "framer-motion";

function ScrollToTop() {
    const [isVisibility, setIsVisibility] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > window.innerHeight / 2) {
                setIsVisibility(true)
            }
            else {
                setIsVisibility(false)
            }
        }
        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)

    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        isVisibility && (
            <motion.button
                onClick={scrollToTop}
                className="h-10 w-10 fixed bottom-7 right-7 border-2 border-black shadow-lg hover:bg-black hover:text-white duration-500"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: isVisibility ? 1 : 0, scale: isVisibility ? 1 : 0.5 }}
                transition={{ duration: 1.2 }}
            >
                <KeyboardDoubleArrowUpIcon size={24} color='black' fontSize='medium' />
            </motion.button>
        )
    );
}

export default ScrollToTop
