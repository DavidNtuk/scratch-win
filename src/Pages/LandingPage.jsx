import React from 'react';

import Scratch from '../Component/Scratch';
import Showcase from '../Component/Showcase';


const LandingPage = () => {
  return (
    <>
    <Showcase />
    <div className='mt-[800px] mb-[200px]'>
        <Scratch />
    </div>
    </>
  )
}

export default LandingPage