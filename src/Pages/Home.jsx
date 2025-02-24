import React from 'react'
import Header from '../Components/Header'

function Home() {
    return (
        <>

            <header className='absolute -top-5 left-0 w-full bg-black bg-opacity-0  text-white p-4 z-10'>
                <Header />
            </header>

            <div className='w-full'>

                <img className='w-full' src="https://shop.fomilk.com/cdn/shop/articles/Adsiz_tasarim_-_2023-02-24T125140.409_1100x.jpg?v=1677233543g" alt="HomeBground" />

            </div>

        </>
    )
}

export default Home

