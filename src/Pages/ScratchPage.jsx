import React from 'react';
import rect3 from '../images/Rectangle 8.png';
import Card from '../images/card.png';
import Card12 from '../images/Card12.png'

const ScratchPage = () => {
  return (
    <div className='relative pb-[500px] md:pb-0'>
    <img className='w-full h-[852px] md:h-[1200px] object-cover' src={rect3} alt='backgroundimages' />
    <div className='absolute top-0 left-10 right-10 max-w-[1438px] lg:h-[760px] h-[1050px]'>
        <div className='flex justify-center items-center text-center'>
            <div className='lg:bg-white rounded-sm w-[382px] h-[745px] lg:w-[900px] lg:h-[500px] md:w-[814px] md:h-[700px] mt-[15%] md:bg-transparent'>
                <div className='relative '>
                    <div className='w-full h-full text-center lg:text-left lg:items-start mt-20 flex flex-col items-center lg:ml-10'>
                        <h1 className='lg:text-[64px] text-[48px] font-bold leading-9 tracking-wide'>Scratch to reveal</h1>
                        <p className='text-[24px] text-gray-800 max-w-[80%] md:max-w-[60%] lg:max-w-[40%] mt-10 text-style leading-9 tracking-wide'>Use your mouse to scratch andd reveal prize</p>
                        <div className='lg:mt-10 mt-[42rem] md:mt-[45rem]'>
                            <p className='text-[24px] text-black max-w-[80%] md:max-w-[100%] lg:max-w-[100%] mt-10 text-style mb-2 text-end lg:text-start  md:text-center leading-9 tracking-wide'>No of cards</p>
                            <div className='flex'>
                                <img src={Card12} alt='rectangle-background' className='w-[58px] h-[82px] rect-img rounded-lg' />
                                <img src={Card12} alt='rectangle-background' className='w-[58px] h-[82px] rect-img ml-2 rounded-lg' />
                                <img src={Card12} alt='rectangle-background' className='w-[58px] h-[82px] rect-img ml-2 rounded-lg' />
                            </div>
                            <div className='w-[190px] h-[5px] bg-gray-200 rounded-md my-5 hover:cursor-pointer'>
                                <div className='w-[57px] h-[5px] footer-radius mx-[35%] '></div>
                            </div>
                        </div>
                        <div className='absolute right-[0px] lg:top-[-150px] lg:right-[-100px] md:right-[20%] top-[200px]'>
                            <img className='w-full h-[626px] 'src={Card12} alt='card-images' />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>   
    </div>
    </div>
  )
}

export default ScratchPage