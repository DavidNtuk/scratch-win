import React from 'react';
import { Link } from 'react-router-dom';
import rect from '../images/Rectangle 5.png';
import rect2 from '../images/Rectangle 4.png';


const  Navbar = () =>{

  return (
    <div className='flex w-full items-center md:justify-end justify-center p-2 z-10'>
          <ul className='flex items-center md:mr-[150px] p-2'>
            <Link to='/'><li className='text-center items-center md:text-[18px] font-bold text-black lg:pl-10 lg:pr-10 md:pl-5 md:pr-5 uppercase pl-0 pr-5'>Scratch & Win</li></Link>
            <Link to='/'><li className='text-center items-center md:text-[18px] text-gray-400 lg:pl-10 lg:pr-10 md:pl-5 md:pr-5 uppercase hover:text-black hover:font-bold pl-0 pr-5'>How to play</li></Link>
            <Link to='/'><li className='text-center items-center md:text-[18px] text-gray-400 lg:pl-10 lg:pr-10 md:pl-5 md:pr-5 uppercase hover:text-black hover:font-bold pl-0 pr-5'>Winners</li></Link>
            <div className='relative cursor-pointer'>
              <img src={rect} alt='rectangle-background' className='w-full h-full z-10 rect-img' />
              <img src={rect2} alt='rectangle-background' className=' absolute -z-10  top-1 left-2 w-full h-full rect-img' />
              <p className='absolute top-[25%] left-[25%] text-center items-center text-[18px] text-black uppercase'>Play Now</p>
            </div>
          </ul>
    </div>
  )
}

export default Navbar