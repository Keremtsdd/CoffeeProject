import React from 'react'
import Header from '../Components/Header'

function About() {
    return (
        <>
            <header className='absolute -top-4 left-0 w-full bg-black bg-opacity-0 text-white p-4 z-10 '>
                <Header />
            </header>

            <div>
                <img className='h-[500px] w-full' src="https://cdn.shopify.com/s/files/1/0293/4380/9620/files/espresso-works-blog-whats-the-difference-between-a-latte-and-cappucciono-banner.jpg?v=1631173850" alt="aboutbanner" />
            </div>
        </>
    )
}

export default About
