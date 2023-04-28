import React from 'react';
import rect from '../images/Rectangle 5 (1).png';
import rect2 from '../images/Rectangle 4.png';
import Card from '../images/Frame 5.png'

const Scratch = () => {
  return (
    <div className='back-flow max-w-[1438px] lg:h-[760px] h-[1050px]'>
        <div className='flex justify-center'>
            <div className='card-flow w-[382px] h-[745px] lg:w-[814px] lg:h-[349px] md:w-[814px] md:h-[700px] mt-[15%] m-5'>
                <div className='m-5 relative '>
                    <div className='w-full h-full text-center lg:text-left lg:items-start mt-20 flex flex-col items-center lg:ml-10'>
                        <h1 className='lg:text-[70px] text-[50px] font-bold leading-9 tracking-wide'>Ready To Play?</h1>
                        <p className='text-[24px] text-gray-800 max-w-[80%] md:max-w-[60%] lg:max-w-[50%] mt-10 text-style'>Play the Scratch and win lottery game for a chance to win instant prizes.</p>
                        <div className='relative cursor-pointer lg:mt-10 mt-80 md:mt-96'>
                            <img src={rect2} alt='rectangle-background' className='w-[193px] h-[49px] rect-img ml-2' />
                            <img src={rect} alt='rectangle-background' className=' absolute bottom-1 w-[193px] h-[49px] z-50 rect-img' />
                            <p className='absolute top-[15%] left-[25%] text-center items-center text-[18px] z-50 text-black uppercase'>Play Now</p>
                        </div>
                    </div>
                    <div className='absolute lg:top-[-150px] lg:left-[500px] md:left-[200px]  top-[200px]'>
                        <img className='lg:max-w-[530px] lg:max-h-[421px] max-w-[348px] max-h-[348px] object-cover p-7' src={Card} alt='card-images' />
                    </div>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default Scratch