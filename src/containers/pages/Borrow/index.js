import React from 'react';

function Borrow() {
  return (
    <div className='relative w-full min-h-screen bg-[#DEE2E8] dark:bg-[#32283C] transition-all duration-1000'>
      {/* bg images */}
      <div className='bg-borrow-left bg-center bg-cover absolute left-0 bottom-0 w-[1024px] h-[768px]'></div>
      <div className='bg-borrow-righttop bg-center bg-cover absolute right-0 top-[100px] w-[325px] h-[313px]'></div>
      <div className='bg-borrow-rightbottom bg-center bg-cover absolute right-0 bottom-[0px] w-[655px] h-[581px]'></div>
      {/* card */}
      <div className='absolute w-[1020px] top-[230px] left-[calc(50%-510px)] bg-borrow-card dark:bg-borrow-card-dark shadow-borrow-card dark:shadow-borrow-card-dark border border-[#FFFFFF] rounded-[33px]'>
          <div className='mt-[30px] text-[30px] text-[#273855] dark:text-[#728AB7] text-center transition-all duration-1000'>Get access up to <span className='text-[#273855] dark:text-[#FFFFFF] font-bold transition-all duration-1000'>50%</span> of your collateral with</div>
          <div className='text-[30px] text-center'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#39C6D9]'>no repayments</span>
            <span className='pl-3 pr-3 dark:text-[#728AB7]'>&</span>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#39C6D9] to-[#00DDA2]'>no liquidation risk!</span>
          </div>
          <div className='relative mt-[150px] text-center'>
            <span className='text-[#000000] dark:text-[#FFFFFF] text-[32px] leading-[48px] transition-all duration-1000'>WE ARE COMING SOON!</span>            
            <div className='bg-borrow-saly bg-center bg-cover absolute bottom-0 right-[250px] w-[48px] h-[50px]'></div>
          </div>
          <div className='mt-[10px] text-[16px] leading-[24px] tracking-[1px] text-[#828282] text-center'>
            Stay tuned for something amazing
          </div>
          <div className='mt-[20px] text-center'>
            <button className='bg-[#2F80ED] rounded-[4px] w-[141px] h-[48px] p-1 text-[#FFFFFF]'>Learn More</button>
          </div>
          <div className='mt-[100px] mb-[30px] text-center tracking-[4px]'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#39C6D9]'>Borrow - Withdraw - Repay</span>
            <br />
            <span className='text-[#000000] dark:text-[#FFFFFF] text-[18px] transition-all duration-1000'>anytime , anywhere globally</span>
          </div>
      </div>
    </div>
  )
}

export default Borrow;