import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import rect from '../images/Rectangle 5.png';
import rect2 from '../images/Rectangle 4.png';


const  Navbar = () =>{

  const [isOpen , setIsOpen ] = useState(false)

  return (
    <nav className='flex w-full items-center lg:justify-end justify-between p-2 z-10'>
        <button onClick={() => setIsOpen(!isOpen)}
        >
            <div  className='lg:hidden w-[56px] h-[56px] rounded-sm items-center bg-gray-100 flex justify-center cursor-pointer hover:translate-y-1 '>
                <h1 className='lg:text-[48px] md:text-[40px] text-[32px] font-bold leading-9 tracking-wide rotate-45'>  ~ </h1>
            </div>
        </button>
          <ul className={`block items-center md:mr-[150px] lg:flex p-2 ${isOpen ? "block" : "hidden"} `}>
            <Link to='/scratcch&win'><li className=' pt-5 md:pt-0  text-center items-center lg:text-[18px] font-bold text-black lg:pl-10 lg:pr-10 md:pl-5 md:pr-5 uppercase pl-0 pr-5 text-[20px]'>Scratch & Win</li></Link>
            <Link to='/'><li className=' pt-5 md:pt-0  text-center items-center lg:text-[18px] text-gray-400 lg:pl-10 lg:pr-10 md:pl-5 md:pr-5 uppercase hover:text-black hover:font-bold pl-0 pr-5x text-[20px]'>How to play</li></Link>
            <Link to='/'><li className=' pt-5 md:pt-0  text-center items-center lg:text-[18px] text-gray-400 lg:pl-10 lg:pr-10 md:pl-5 md:pr-5 uppercase hover:text-black hover:font-bold pl-0 pr-5 text-[20px]'>Winners</li></Link>
            <div className='relative cursor-pointer block mt-5'>
              <img src={rect} alt='rectangle-background' className='w-full h-full z-10 rect-img' />
              <img src={rect2} alt='rectangle-background' className=' absolute -z-10  top-1 left-2 w-full h-full rect-img' />
              <p className='absolute top-[25%] left-[25%] text-center items-center text-[18px] text-black uppercase'>Play Now</p>
            </div>
          </ul>
    </nav>
  )
}

export default Navbar