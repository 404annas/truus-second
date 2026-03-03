import React from 'react'
import line from "../assets/svgs/line.svg"
import heart from "../assets/svgs/heart.svg"
import ImageCollage from '../components/ImageCollage'
import ZigzagLine from '../SvgComponents/ZigzagLine'

export default function Agency() {
    return (
        <div data-navbar-theme="light" className='relative flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8'>
            <h1 className='max-w-7xl md:max-w-3xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-[900] text-black epilogue pb-6 sm:pb-8 lg:pb-10 leading-tight'>
                From planning to execution
                <br className='hidden sm:block' />
                <span className='sm:hidden'> </span>
                <span className='lora font-light mt-2 sm:mt-4 relative inline-block'>
                    we handle it all.
                    <img
                        className='absolute -top-1 sm:-top-2 lg:-top-10 right-0 sm:right-2 lg:-right-20 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28'
                        src={heart}
                        alt=""
                    />
                </span>
                <div className='mt-4 sm:mt-6 lg:mt-8 flex justify-center'>
                    <ZigzagLine
                        color={"#000"}
                        width={Math.min(650, window.innerWidth * 0.8)}
                        className="mx-auto max-w-full"
                    />
                </div>
            </h1>
            <div className='w-full'>
                <ImageCollage />
            </div>
        </div>
    )
}
