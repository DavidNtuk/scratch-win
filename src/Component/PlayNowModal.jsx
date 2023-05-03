import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const PlayNowModal = ({ showModal, openModal, closeModal }) => {

    useEffect(() => {
        openModal && openModal();
    },[])

    const handleCloseModal = () => {
        closeModal();
        window.scroll(2800,2800);
    };

  return (
    <div className={`absolute justify-center top-[11%]  md:top-[20%] lg:left-[30%] md:left-[20%] left-0  bg-white md:w-[577px]  w-full h-[full] z-50 rounded-lg md:p-12 p-8 ${!showModal && "hidden"}`}>
        <div className='w-full h-full'>
            <div className='flex justify-between  items-center'>
                <div>
                    <h1 className='lg:text-[48px] md:text-[40px] text-[32px] font-bold leading-9 tracking-wide'>Play now</h1>
                </div>
                <button
                onClick={handleCloseModal}
                >
                    <div  className='w-[56px] h-[56px] rounded-full items-center bg-gray-100 flex justify-center cursor-pointer hover:translate-y-1 '>
                        <h1 className='lg:text-[48px] md:text-[40px] text-[32px] font-bold leading-9 tracking-wide rotate-45'> + </h1>
                    </div>
                </button>
            </div>
            <div className='flex items-center'>
                <h1 className='lg:text-[64px] md:text-[50px] text-[40px] font-bold pr-5'> + </h1>
                <div>
                    <p className='lg:text-[20px] md:text-[16px] text-[16px] text-gray-600 max-w-[100%] text-style'>Dial this <span className='font-bold text-black'>short code</span> to get the lottery scratch cards</p>
                </div>
            </div>
            <div className='flex items-center'>
                <h1 className='lg:text-[64px] md:text-[50px] text-[40px] font-bold pr-5'> + </h1>
                <div>
                    <p className='lg:text-[20px] md:text-[16px] text-[16px] text-gray-600 max-w-[95%] text-style'>Enter the <span className='font-bold text-black'>phone number used to dial</span>the code for validation and click the<span className='font-bold text-black'>"proceed button"</span>  to play</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <div  className='w-[513px] h-[131px] rounded-md bg-gray-100 pt-12 mt-10 flex justify-center'>
                    <h1 className='lg:text-[48px] md:text-[48px] text-[48px] font-bold leading-9 tracking-wide'> *898*9857# </h1>
                </div>
            </div> 
            <Link><p className='lg:text-[18px] md:text-[16px] text-[16px] text-blue-500 max-w-[100%] text-style underline pt-2'>Change code</p></Link>    

            <div className='py-5'>
                <label className=''>Phone number</label>
                <input  type='number' className='w-full h-full text-style border border-gray-400 p-5 my-2 rounded-md' placeholder='e.g08132587383' />    
            </div>
            <div className='pt-12 md:pt-0 w-full'>
                <button className='w-full h-ful text-black font-bold  py-5 footer-radius leading-9 tracking-wide hover:opacity-80 '>Proceed</button>  
            </div>       
        </div>
    </div>
  )
}

export default PlayNowModal