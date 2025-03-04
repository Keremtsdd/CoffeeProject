import React from 'react'

function Language() {
    return (
        <>
            <div className="flex space-x-2 left-6 text-sm select-none mt-2">
                <h1 className='hover:text-neutral-400 duration-150 cursor-pointer'>TR</h1>
                <span className='h-3 w-0.5 mt-1 bg-white'></span>
                <h1 className='hover:text-neutral-400 duration-150 cursor-pointer'>EN</h1>
                <span className='h-3 w-0.5 mt-1 bg-white'></span>
                <h1 className='hover:text-neutral-400 duration-150 cursor-pointer'>DE</h1>
                <span className='h-3 w-0.5 mt-1 bg-white'></span>
                <h1 className='hover:text-neutral-400 duration-150 cursor-pointer'>AR</h1>
            </div>
        </>
    )
}

export default Language
