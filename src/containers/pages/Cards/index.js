import React from 'react';

function Cards() {
  return (
    <div className='relative w-full min-h-[1700px] bg-[#DEE2E8] dark:bg-[#32283C] transition-all duration-1000'>
      {/* bg images */}
      <div className='bg-cards-leftbottom bg-center bg-cover absolute left-0 bottom-0 w-[636px] h-[541px]'></div>
      <div className='bg-cards-leftmiddle bg-center bg-cover absolute left-0 top-[500px] w-[357px] h-[596px]'></div>
      <div className='bg-cards-rightbottom bg-center bg-cover absolute right-0 bottom-[0px] w-[427px] h-[582px]'></div>
      <div className='bg-cards-rightmiddle bg-center bg-cover absolute right-0 top-[310px] w-[459px] h-[597px]'></div>
      {/* card */}
      <div className='absolute w-[1020px] top-[230px] left-[calc(50%-510px)] bg-borrow-card dark:bg-borrow-card-dark shadow-borrow-card dark:shadow-borrow-card-dark border border-[#FFFFFF] rounded-[33px] p-[40px]'>
        <div className='text-[#000000] dark:text-[#FFFFFF] text-[18px] leading-[2px] transition-all duration-1000'>Introducing</div>
        <div className='pl-5'>
          <span className='font-semibold text-[64px] leading-[96px] tracking-[2px] text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2]'>Cards</span>
        </div>
        <div className='mt-[20px]'>
          <div className='bg-cards-cardtop bg-center bg-cover w-[467px] h-[488px] m-auto'></div>
        </div>
        <div className='mt-[50px] mb-[250px] w-full'>
          <div className='bg-center bg-cover bg-cards-arrowhead-down w-[146px] h-[117px] m-auto' />
          <div className='bg-center bg-cover bg-cards-arrowhead-down w-[120px] h-[100px] m-auto' />
          <div className='mt-[100px] bg-center bg-cover bg-cards-availablesoon w-[917px] h-[83px] m-auto' />
        </div>
      </div>
    </div>
  )
}

export default Cards;