import React from 'react';
import rect from '../images/Rectangle 5.png';
import rect2 from '../images/Rectangle 4.png';
import rect3 from '../images/Rectangle 8.png'
import Card from '../images/Frame 12.png';

const Showcase = () => {
  return (
    <>
    <div className='relative'>
        <img className='w-full h-full  md:w-[1440px] md:h-[1042px] object-cover' src={rect3} alt='backgroundimages' />
        <div className='absolute lg:top-[180.55px] lg:left-[25%] top-[20%] md:left-[15%]'>
            <img className='w-[712.74px] h-[459.45]object-cover p-5' src={Card} alt='card-images' />
            <div className='w-full h-full text-center items-center mt-20 flex flex-col justify-center'>
                <h1 className='lg:text-[100px] text-[60px] font-bold leading-9 tracking-wide'>Ready To Play?</h1>
                <p className='text-[24px] text-gray-600 max-w-[60%] mt-16 text-style'>Play the Scratch and win lottery game for a chance to win instant prizes.</p>
                <div className='relative cursor-pointer mt-10'>
                    <img src={rect2} alt='rectangle-background' className='w-[193px] h-[49px] rect-img ml-2' />
                    <img src={rect} alt='rectangle-background' className=' absolute bottom-1 w-[193px] h-[49px] z-50 rect-img' />
                    <p className='absolute top-[15%] left-[25%] text-center items-center text-[24px] z-50 text-black uppercase'>Play Now</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Showcase