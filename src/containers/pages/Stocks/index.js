import React from 'react';

function Stocks() {
  return (
    <div className='relative w-full min-h-[950px] bg-[#DEE2E8] dark:bg-[#32283C] transition-all duration-1000'>
      {/* bg images */}
      <div className='bg-stocks-left bg-center bg-cover absolute left-0 bottom-[30%] w-[600px] h-[350px]'></div>
      <div className='bg-stocks-right bg-center bg-cover absolute right-0 top-[200px] w-[500px] h-[350px]'></div>
      {/* card */}
      <div className='absolute w-[1020px] top-[230px] left-[calc(50%-510px)] bg-stocks-card dark:bg-stocks-card-dark shadow-stocks-card dark:shadow-stocks-card-dark border border-[#FFFFFF] rounded-[33px]'>
        <div className='mt-[70px] relative'>
          <div className='bg-stocks-cardbanner bg-center bg-cover w-[735px] h-[471px] m-auto'></div>
          <div className='absolute w-full top-[calc(50%-100px)] flex justify-center'>
            <span className='text-transparent bg-clip-text bg-gradient-to-b from-[#745FF2FF] via-[#ffffff00] to-[#00000000] text-[64px]'>Stocks</span>
          </div>
          <div className='absolute w-full top-[calc(50%-50px)] flex justify-center'>
            <span className='text-[#EB5757] font-bold text-[72px] leading-[108px] tracking-[0px]'>Coming Soon.</span>
          </div>
        </div>
        <div className='mt-[20px] mb-[30px] text-[24px] font-semibold text-center tracking-[2px]'>
          <span className='text-[#39C6D9]'>Buy</span>
          <span className='text-[#000000] dark:text-[#FFFFFF] pl-2 pr-2 transition-all duration-1000'>-</span>
          <span className='text-[#EB5757]'>sell</span>
          <br />
          <span className='text-[#000000] dark:text-[#FFFFFF] text-[18px] transition-all duration-1000'>stocks @ one click</span>
        </div>
      </div>
    </div>
  )
}

export default Stocks;