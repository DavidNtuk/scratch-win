import React from 'react';

import Scratch from '../Component/Scratch';
import Showcase from '../Component/Showcase';
import PlaySection from '../Component/PlaySection';
import RulesSection from '../Component/RulesSection';
import FAQSection from '../Component/FAQSection';


const LandingPage = () => {
  return (
    <>
    <Showcase />
    <div className=''>
      <PlaySection />
    </div>
    <div className='lg:mt-[90rem] md:mt-[130rem] mt-[150rem] mb-[100px]'>
        <Scratch />
    </div>
    <div className='mt-[200px] mb-[150px]'>
      <RulesSection />
    </div>
    <div className='mt-[200px] mb-[200px]'>
      <FAQSection />
    </div>
    
    </>
  )
}

export default LandingPage