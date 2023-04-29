import React from 'react';
import footer from '../images/Ellipse 9.png';
import mask from '../images/Mask group.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className='h-full w-full relative'>
        <div className='w-[80%] h-[328px] lg:h-[328px] md:h-[250px] absolute top-[-100px] md:top-[50px] left-[10%] z-10
        footer-radius' >
           <img src={mask} alt='rectangle-background' className='w-full h-full  object-cover' />
        </div>

        
    </div>

        <div className='mt-[500px] md:mt-[400px] relative'>
            <img src={footer} alt='rectangle-background' className='md:w-full md:h-[full] h-[350px]   object-cover' />
            <div className='absolute ml-[15%] md:top-[220px] top-[10%]'>
                <ul className='list-disc flex flex-col md:flex-row'>
                    <Link><li className='lg:text-[20px] text-[16px] text-white pr-12 leading-12 tracking-wide pt-6 md:pt-0'>Winners</li></Link>
                    <Link><li className='lg:text-[20px] text-[16px] text-white pr-12 leading-12 tracking-wide pt-6 md:pt-0'>How to play</li></Link>
                    <Link><li className='lg:text-[20px] text-[16px] text-white pr-12 leading-12 tracking-wide pt-6 md:pt-0'>FAQ</li></Link>
                    <Link><li className='lg:text-[20px] text-[16px] text-white pr-12 leading-12 tracking-wide pt-6 md:pt-0'>Claiming the prize</li></Link>
                </ul>
            </div>
            <div className='absolute ml-[65%] md:top-[220px] top-[10%]'>
                <ul className='list-disc flex flex-col md:flex-row'>
                    <Link><li className='lg:text-[20px] text-[16px] text-white pr-12 leading-12 tracking-wide pt-6 md:pt-0'>Term of Use</li></Link>
                    <Link><li className='lg:text-[20px] text-[16px] text-white pr-12 leading-12 tracking-wide pt-6 md:pt-0'>Legals</li></Link>
                    <Link><li className='lg:text-[20px] text-[16px] text-white pr-12 leading-12 tracking-wide pt-6 md:pt-0'>Credits</li></Link>
                </ul>
            </div>
            <div className=' ml-[0%] mr-[10%] border-b border-gray-400 absolute top-[250px] w-full pt-5'></div>
            <div className=''>
                <div className='absolute ml-[10%] mr-[10%] text-center md:ml-[10%]  md:bottom-[25px] bottom-[20px]'>
                    <ul className='list-disc flex flex-col md:flex-row'>
                        <li className='lg:text-[20px] text-[16px] text-white leading-12 tracking-wide md:pt-0'>Copyright © 2023 • App name • all rights rserved</li>
                    </ul>
                </div>
                <div className='absolute ml-[20%] mr-[20%] md:ml-[65%] md:bottom-[20px] bottom-[50px]'>
                    <ul className='flex items-start'>
                        <Link><li className='lg:text-[20px] text-[16px] text-white pr-12 leading-12 tracking-wide pt-6 md:pt-0'>Facebook</li></Link>
                        <Link><li className='lg:text-[20px] text-[16px] text-white pr-12 leading-12 tracking-wide pt-6 md:pt-0'>Twitter</li></Link>
                        <Link><li className='lg:text-[20px] text-[16px] text-white pr-12 leading-12 tracking-wide pt-6 md:pt-0'>Instagram</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer