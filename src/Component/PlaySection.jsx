import React from 'react';
import card from '../images/card.png'
import one from '../images/Frame 35.png'
import two from '../images/Frame 36.png'
// import one from '../images/Frame 35.png'

const PlaySection = () => {
  return (
    <div className='relative flex justify-center m-3 md:m-20'>
    <div className='bg-white absolute top-[-200px] md:top-[-180px] p-12'>
        <div className='flex justify-between text-left md:text-left md:flex-col lg:text-left flex-col lg:flex-row items-left lg:items-end '>
            <h1 className='lg:text-[48px] text-[32px] font-bold leading-12 tracking-wide'>How To Play?</h1>
            <p className='lg:text-[24px] text-[18px] text-gray-600 lg:max-w-[40%] md:max-w-[60%] max-w-[90%] text-style tracking-wide'>Play the Scratch and win lottery game for a chance to win instant prizes.</p>
        </div>
        <div className='mt-30 flex flex-col lg:flex-row'>
            <div className='flex justify-center items-center flex-row  lg:flex-col  lg:items-start pt-20'>
                <img src={one} alt='rectangle-background' className='w-[53px] h-[123px]  object-cover' />
                <div className='ml-[10%] lg:ml-0 mt-5 md:text-left md:flex-col lg:text-left flex text-left flex-col items-start lg:items-start '>
                    <h1 className='lg:text-[25px] text-[24px] font-bold leading-12 tracking-wide'>How To Play?</h1>
                    <p className='text-[16px] text-gray-600 lg:max-w-[80%] max-w-[90%] md:max-w-[60%] text-style tracking-wide pt-5'>Play the Scratch and win lottery game for a chance to win instant prizes.</p>
                </div>
            </div>

            <div className='flex justify-center items-center flex-row  lg:flex-col  lg:items-start pt-20'>
                <img src={two} alt='rectangle-background' className='w-[53px] h-[123px]  object-cover' />
                <div className='ml-[10%] lg:ml-0 mt-5 md:text-left md:flex-col lg:text-left flex text-left flex-col items-start lg:items-start '>
                    <h1 className='lg:text-[25px] text-[24px] font-bold leading-12 tracking-wide'>How To Play?</h1>
                    <p className='text-[16px] text-gray-600 lg:max-w-[80%] max-w-[90%] md:max-w-[60%] text-style tracking-wide pt-5'>Play the Scratch and win lottery game for a chance to win instant prizes.</p>
                </div>
            </div>

            <div className='flex justify-center items-center flex-row  lg:flex-col  lg:items-start pt-20'>
                <img src={one} alt='rectangle-background' className='w-[53px] h-[123px]  object-cover' />
                <div className='ml-[10%] lg:ml-0 mt-5 md:text-left md:flex-col lg:text-left flex text-left flex-col items-start lg:items-start '>
                    <h1 className='lg:text-[25px] text-[24px] font-bold leading-12 tracking-wide'>How To Play?</h1>
                    <p className='text-[16px] text-gray-600 lg:max-w-[80%] max-w-[90%] md:max-w-[60%] text-style tracking-wide pt-5'>Play the Scratch and win lottery game for a chance to win instant prizes.</p>
                </div>
            </div>

            

            
        </div>

        <div className='flex text-center flex-col items-center mt-32 '>
            <h1 className='lg:text-[48px] text-[32px] font-bold leading-12 tracking-wide'>Claiming Your Prizes</h1>
            <p className='md:text-[24px] text-[18px] text-gray-600 lg:max-w-[40%] md:max-w-[60%] max-w-[90%] text-style tracking-wide'>Play the Scratch and win lottery game for a chance to win instant prizes.</p>
        </div>


        <div className='md:ml-[10%] mt-32 flex lg:flex-row flex-col justify-center items-center'>
            <img src={card} alt='rectangle-background' className='w-[366px] h-[515px] object-cover' />
            <div className=''>
                <div className='lg:mt-0 mt-10 items-start md:text-left md:flex-col lg:text-left flex text-left flex-col md:items-start lg:items-start md:ml-[10%] '>
                    <h1 className='lg:text-[36px] text-[24px] font-bold leading-12 tracking-wide'>How To Play?</h1>
                    <p className='lg:text-[20px] text-[18px]  text-gray-600 lg:max-w-[80%] max-w-[100%] md:max-w-[90%] text-style tracking-wide pt-5'>Play the Scratch and win lottery game for a chance to win instant prizes.</p>
                </div>
                <div className='mt-10 items-start md:text-left md:flex-col lg:text-left flex text-left flex-col md:items-start lg:items-start md:ml-[10%] '>
                    <h1 className='lg:text-[36px] text-[24px] font-bold leading-12 tracking-wide'>How To Play?</h1>
                    <p className='lg:text-[20px] text-[18px]  text-gray-600 lg:max-w-[80%] max-w-[100%] md:max-w-[90%] text-style tracking-wide pt-5'>Play the Scratch and win lottery game for a chance to win instant prizes.</p>
                </div>
                <div className='mt-10 items-start md:text-left md:flex-col lg:text-left flex text-left flex-col md:items-start lg:items-start md:ml-[10%] '>
                    <h1 className='lg:text-[36px] text-[24px] font-bold leading-12 tracking-wide'>How To Play?</h1>
                    <p className='lg:text-[20px] text-[18px]  text-gray-600 lg:max-w-[80%] max-w-[100%] md:max-w-[90%] text-style tracking-wide pt-5'>Play the Scratch and win lottery game for a chance to win instant prizes.</p>
                </div>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default PlaySection