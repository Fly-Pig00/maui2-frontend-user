import React from 'react';
import AnimatedTab from '../../../components/AnimatedTab';
import DarkMode from './DarkMode';

function Main() {
  return (
    <div>
      <div className='fixed top-[140px] w-[90%] left-[5%] md:w-[80%] md:left-[10%]'>
        <AnimatedTab tabs={['Dashboard', 'Earn', 'Borrow', 'Stocks', 'Cards']}/>
      </div>
      <div className='fixed top-[250px] right-5% md:right-[10%]'>
        <DarkMode />
      </div>
      
    </div>
  )
}

export default Main;