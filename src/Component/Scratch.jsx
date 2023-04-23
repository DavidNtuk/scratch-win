import React from 'react';
import rect from '../images/Rectangle 5 (1).png';
import rect2 from '../images/Rectangle 4.png';
import Card from '../images/Frame 5.png'

const Scratch = () => {
  return (
    <div className='back-flow max-w-[1438px] lg:h-[760px] h-[1050px]'>
        <div className='flex lg:ml-[5%] md:ml-[10%]'>
            <div className='card-flow w-[779px] h-[500px] lg:h-[440px] md:h-[600px] mt-[15%] m-5'>
                <div className='m-5 relative '>
                    <div className='w-full h-full text-center lg:text-left lg:items-start mt-20 flex flex-col items-center lg:ml-10'>
                        <h1 className='lg:text-[90px] text-[60px] font-bold leading-9 tracking-wide'>Ready To Play?</h1>
                        <p className='text-[24px] text-gray-800 max-w-[80%] md:max-w-[60%] lg:max-w-[50%] mt-16 text-style'>Play the Scratch and win lottery game for a chance to win instant prizes.</p>
                        <div className='relative cursor-pointer mt-10'>
                            <img src={rect2} alt='rectangle-background' className='w-[193px] h-[49px] rect-img ml-2' />
                            <img src={rect} alt='rectangle-background' className=' absolute bottom-1 w-[193px] h-[49px] z-50 rect-img' />
                            <p className='absolute top-[15%] left-[25%] text-center items-center text-[24px] z-50 text-black uppercase'>Play Now</p>
                        </div>
                    </div>
                    <div className='absolute lg:top-[-150px] lg:right-[-300px] top-[250px]'>
                        <img className='lg:max-w-[613px] lg:max-h-[613px] object-cover p-5' src={Card} alt='card-images' />
                    </div>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default Scratch