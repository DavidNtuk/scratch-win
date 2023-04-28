import React from 'react'

const FAQSection = () => {
  return (
    <div className='max-w-[100%] ml-[10%] mr-[10%] shadow-lg shadow-gray-300 p-12 rounded-lg'>
        <div className='items-center text-center flex flex-col justify-center'>
            <h1 className='lg:text-[48px] text-[32px] font-bold leading-12 tracking-wide uppercase'>Frequently Asked Questions</h1>
            <p className='text-[24px] text-gray-600 lg:max-w-full md:max-w-[60%] max-w-[90%] text-style tracking-wide pb-10 pt-5'>Play the Scratch and win lottery game for a chance to win instant prizes.</p>
        </div>
        
        <div className='' id='accordion-collapse' data-accordion='collapse'>
            <h2 id='accordion-collapse-heading-1'>
                <button type='button' className='flex items-center justify-between w-full p-5 font-medium text-left text-gray-800 border-b border-gray-300 rounded-t-xl focus:ring-4 dark:focus:ring-gray-800 dark:border-gray-700 text-[20px]' data-accordion-target='#accordion-collapse-body-1' aria-expanded='true' aria-controls='accordion-collapse-body-1' >
                    <span>How would i get my money?</span>
                    <span>+</span>
                </button>
            </h2>
            <div id='accordion-collapse-body-1' className='' aria-labelledby='accordion-collapse-heading-1'>
                <div className='p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
                    <p className='mb-2 text-gray-800 dark:text-gray-400'>Flowbite if the bite</p>
                    <p className='mb-2 text-gray-500 dark:text-gray-400'>Love the bite</p>
                </div>
            </div>

            <h2 id='accordion-collapse-heading-1'>
                <button type='button' className='flex items-center justify-between w-full p-5 font-medium text-left text-gray-800 border-b border-gray-300 rounded-t-xl focus:ring-4 dark:focus:ring-gray-800 dark:border-gray-700 text-[20px]' data-accordion-target='#accordion-collapse-body-1' aria-expanded='true' aria-controls='accordion-collapse-body-1' >
                    <span>How would i get my money?</span>
                    <span>+</span>
                </button>
            </h2>
            <div id='accordion-collapse-body-1' className='hidden' aria-labelledby='accordion-collapse-heading-1'>
                <div className='p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
                    <p className='mb-2 text-gray-800 dark:text-gray-400'>Flowbite if the bite</p>
                    <p className='mb-2 text-gray-500 dark:text-gray-400'>Love the bite</p>
                </div>
            </div>

            <h2 id='accordion-collapse-heading-1'>
                <button type='button' className='flex items-center justify-between w-full p-5 font-medium text-left text-gray-800 border-b border-gray-300 rounded-t-xl focus:ring-4 dark:focus:ring-gray-800 dark:border-gray-700 text-[20px]' data-accordion-target='#accordion-collapse-body-1' aria-expanded='true' aria-controls='accordion-collapse-body-1' >
                    <span>How would i get my money?</span>
                    <span>+</span>
                </button>
            </h2>
            <div id='accordion-collapse-body-1' className='hidden' aria-labelledby='accordion-collapse-heading-1'>
                <div className='p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
                    <p className='mb-2 text-gray-800 dark:text-gray-400'>Flowbite if the bite</p>
                    <p className='mb-2 text-gray-500 dark:text-gray-400'>Love the bite</p>
                </div>
            </div>

            <h2 id='accordion-collapse-heading-1'>
                <button type='button' className='flex items-center justify-between w-full p-5 font-medium text-left text-gray-800 border-b border-gray-300 rounded-t-xl focus:ring-4 dark:focus:ring-gray-800 dark:border-gray-700 text-[20px]' data-accordion-target='#accordion-collapse-body-1' aria-expanded='true' aria-controls='accordion-collapse-body-1' >
                    <span>How would i get my money?</span>
                    <span>+</span>
                </button>
            </h2>
            <div id='accordion-collapse-body-1' className='hidden' aria-labelledby='accordion-collapse-heading-1'>
                <div className='p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
                    <p className='mb-2 text-gray-800 dark:text-gray-400'>Flowbite if the bite</p>
                    <p className='mb-2 text-gray-500 dark:text-gray-400'>Love the bite</p>
                </div>
            </div>

            <h2 id='accordion-collapse-heading-1'>
                <button type='button' className='flex items-center justify-between w-full p-5 font-medium text-left text-gray-800 border-b border-gray-300 rounded-t-xl focus:ring-4 dark:focus:ring-gray-800 dark:border-gray-700 text-[20px]' data-accordion-target='#accordion-collapse-body-1' aria-expanded='true' aria-controls='accordion-collapse-body-1' >
                    <span>How would i get my money?</span>
                    <span>+</span>
                </button>
            </h2>
            <div id='accordion-collapse-body-1' className='hidden' aria-labelledby='accordion-collapse-heading-1'>
                <div className='p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
                    <p className='mb-2 text-gray-800 dark:text-gray-400'>Flowbite if the bite</p>
                    <p className='mb-2 text-gray-500 dark:text-gray-400'>Love the bite</p>
                </div>
            </div>
                     
        </div>
    </div>
  )
}

export default FAQSection