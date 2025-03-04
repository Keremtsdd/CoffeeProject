import React from 'react'
import Header from '../Components/Header'
import Language from '../Components/Language'


function Home() {
    return (
        <>
            <header className='absolute -top-4 left-0 w-full bg-black bg-opacity-0 text-white p-4 z-10 '>
                <Header />
            </header>

            <div className='absolute -top-4 left-0 w-full bg-black bg-opacity-0 text-white p-4 z-10 flex justify-end'>
                <Language />
            </div>


            <div className='w-full bg-neutral-200'>

                <img className='w-full' src="https://shop.fomilk.com/cdn/shop/articles/Adsiz_tasarim_-_2023-02-24T125140.409_1100x.jpg?v=1677233543g" alt="HomeBground" />

                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white text-3xl">

                </div>


                <div className='flex justify-center items-center absolute top-full left-0 w-full z-20'>
                    <div className='flex justify-center items-center space-x-8 h-96 w-1/2 bg-white rounded-sm  shadow-xl transition-transform hover:scale-105'>
                        <img className='h-96 w-3/6 object-cover rounded-sm'
                            src="https://images.stockcake.com/public/e/0/7/e077b8de-e7d7-427b-9dcd-7b57a766d759_large/steaming-morning-coffee-stockcake.jpg"
                            alt="sds" />
                        <div className='text-center'>
                            <h2 className='text-2xl font-bold'>Görselin Yanındaki Metin</h2>
                            <p>Burada metninizi yazabilirsiniz. Görselin sağında yer alacak şekilde hizalanacak.</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center mt-14'>

                    <div className='flex justify-center items-center space-x-8 h-96 w-1/2 mt-72 bg-white shadow-xl rounded-sm transition-transform hover:scale-105'>

                        <div className='text-center'>

                            <h2 className='text-2xl font-bold'>Görselin Yanındaki Metin</h2>

                            <p>Burada metninizi yazabilirsiniz. Görselin sağında yer alacak şekilde hizalanacak.</p>

                        </div>

                        <img className='h-96 w-3/6 object-cover rounded-sm'
                            src="https://ideacdn.net/idea/cx/20/myassets/products/780/2.jpg?revision=1697143329"
                            alt="sds" />

                    </div>
                </div>

                <div className='flex justify-center items-center mt-14 '>

                    <div className='flex justify-center items-center space-x-8 w-1/2 mt-4 bg-white shadow-xl rounded-sm transition-transform hover:scale-105'>

                        <img className='h-96 w-3/6 object-cover rounded-sm'
                            src="https://www.nescafe.com/tr/sites/default/files/2024-09/Nes_ConEco3.0_B2_Article24-YourCompleteCoffeeCupGuide_Image%204-1066%20%C3%97%20970_0.jpg"
                            alt="sds" />

                        <div className='text-center'>

                            <h2 className='text-2xl font-bold'>Görselin Yanındaki Metin</h2>
                            <p>Burada metninizi yazabilirsiniz. Görselin sağında yer alacak şekilde hizalanacak.</p>

                        </div>
                    </div>
                </div>

                <div className='h-72 w-full bg-slate-700 mt-52' ></div>
            </div>
        </>
    )
}

export default Home
