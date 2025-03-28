import React from 'react'
import { motion } from "framer-motion";

function İceCoffes() {
    return (
        <>
            <div >
                <h1 className='mt-16 ml-10 font-bold text-xl text-center'>SOĞUK KAHVELERİMİZ</h1>
                <div className='flex'>

                    <motion.div

                        className="selection:bg-orange-500"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 4, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}

                    >

                        <div className='relative h-64 w-64 ml-8 mt-8'>

                            <div className="relative w-64 h-64 group overflow-hidden rounded-sm shadow-xl">
                                <img
                                    src='https://imgs.search.brave.com/ICOycx7SXCVgwscAXBFwL8fbRivps_TXYrfGak7c1xc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWNvdXBsZWNvb2tz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wMS9JY2Vk/LUFtZXJpY2Fuby0w/MDguanBn'
                                    alt='İcedAmericano'
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-xl font-semibold">İced Americano</span>
                                </div>
                            </div>

                        </div>

                    </motion.div>

                    <motion.div

                        className="selection:bg-orange-500"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 4, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}

                    >

                        <div className='relative h-64 w-64 ml-5 mt-8'>

                            <div className="relative w-64 h-64 group overflow-hidden rounded-sm shadow-lg">
                                <img
                                    src='https://imgs.search.brave.com/E8jtHpdWzEN3qXI771FKYBkWkm-62SrTqLmH5EAuuzE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGFsZmJha2VkaGFy/dmVzdC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDgv/SWNlZC1Ccm93bi1T/dWdhci1MYXR0ZS13/aXRoLVNoYWtlbi1F/c3ByZXNzby0xLTcw/MHgxMDUwLmpwZw'
                                    alt='İcedlatte'
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-xl font-semibold">İced Latte</span>
                                </div>
                            </div>

                        </div>

                    </motion.div>

                    <motion.div

                        className="selection:bg-orange-500"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 4, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}

                    >

                        <div className='relative h-64 w-64 ml-5 mt-8'>

                            <div className="relative w-64 h-64 group overflow-hidden rounded-sm shadow-lg">
                                <img
                                    src='https://imgs.search.brave.com/oRztVrIXAsXsx4mnTaqbYiq8Hf86t4NpzLzGn9OGLRI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9pY2VkLWNvZmZl/ZS1mcmFwcGUtd2l0/aC1pY2UtY3ViZXNf/MTA2ODg1LTI1NDgu/anBnP3NlbXQ9YWlz/X2h5YnJpZA'
                                    alt='İcedCoffee'
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-xl font-semibold">İced Coffee</span>
                                </div>
                            </div>

                        </div>

                    </motion.div>

                    <motion.div

                        className="selection:bg-orange-500"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 4, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}

                    >

                        <div className='relative h-64 w-64 ml-5 mt-8'>

                            <div className="relative w-64 h-64 group overflow-hidden rounded-sm shadow-lg">
                                <img
                                    src='https://perkupcoffee.co/cdn/shop/articles/filtre-kahve-fiyatlari.webp?v=1730969828&width=1100'
                                    alt='FitreKahve'
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-xl font-semibold">Filtre Kahve</span>
                                </div>
                            </div>

                        </div>

                    </motion.div>

                </div>

                <div className='flex'>

                    <motion.div

                        className="selection:bg-orange-500"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 4, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}

                    >

                        <div className='relative h-64 w-64 ml-8 mt-7'>

                            <div className="relative w-64 h-64 group overflow-hidden rounded-sm shadow-lg">
                                <img
                                    src='https://imgs.search.brave.com/Ab9hcV0nukIPeY854gH4lVgAcGITF3HpoacMSVjUUwk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzYwLzY0LzA0/LzM2MF9GXzM2MDY0/MDQ2OF9aRDZuSU12/WVE5RUVEaUhEZVo5/SUd4THNaajkxNHdj/VC5qcGc'
                                    alt='Cappuccino'
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-xl font-semibold">Cappuccino</span>
                                </div>
                            </div>

                        </div>

                    </motion.div>

                    <motion.div

                        className="selection:bg-orange-500"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 4, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}

                    >

                        <div className='relative h-64 w-64 ml-5 mt-7'>

                            <div className="relative w-64 h-64 group overflow-hidden rounded-sm shadow-lg">
                                <img
                                    src='https://imgs.search.brave.com/DZEgcd8weESsAxZU4or4-5WnRwQvcbvVZEH-tYgkOvQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzcwLzY2LzM3/LzM2MF9GXzEwNzA2/NjM3MTRfWG00QnZK/bG5rY2xoOGROdG5j/dEE4a3FyQW1TUHZW/aGwuanBn'
                                    alt='Espresso'
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-xl font-semibold">Espresso</span>
                                </div>
                            </div>

                        </div>

                    </motion.div>

                    <motion.div

                        className="selection:bg-orange-500"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 4, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}

                    >

                        <div className='relative h-64 w-64 ml-5 mt-7'>

                            <div className="relative w-64 h-64 group overflow-hidden rounded-sm shadow-lg">
                                <img
                                    src='https://imgs.search.brave.com/LF49E2rp4xvzvC8qMu4XxfaqNK4SMunDDrAxl8QFWuc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzUwLzIyLzYx/LzM2MF9GXzM1MDIy/NjE4MV9veE9UNUNY/ZHg5VHdUWXJBaHV0/VXJodGZKQWs1czFL/WC5qcGc'
                                    alt='Macchiato'
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-xl font-semibold">Macchiato</span>
                                </div>
                            </div>

                        </div>

                    </motion.div>

                    <motion.div

                        className="selection:bg-orange-500"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 4, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}

                    >

                        <div className='relative h-64 w-64 ml-5 mt-7'>

                            <div className="relative w-64 h-64 group overflow-hidden rounded-sm shadow-lg">
                                <img
                                    src='https://imgs.search.brave.com/HmiCbuiPSbADoVrz5b7c5Ke-hMrhj-0SK8iCijRoEY4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMzAv/MjAyMi8wNS9Db3J0/YWRhLTJlMDEwNzcu/cG5nP3F1YWxpdHk9/OTAmcmVzaXplPTU1/Niw1MDU'
                                    alt='Cortado'
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-xl font-semibold">Cortado</span>
                                </div>
                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </>
    )
}

export default İceCoffes
