import React from 'react';

function Cards() {
  return (
    <div className='relative w-full min-h-[1920px] bg-[#DEE2E8] dark:bg-[#32283C] transition-all duration-1000'>
      <div className='bg-cards-leftbottom bg-center bg-cover absolute left-0 bottom-0 w-[636px] h-[541px]'></div>
      <div className='bg-cards-leftmiddle bg-center bg-cover absolute left-0 top-[500px] w-[357px] h-[596px]'></div>
      <div className='bg-cards-rightbottom bg-center bg-cover absolute right-0 bottom-[0px] w-[427px] h-[582px]'></div>
      <div className='bg-cards-rightmiddle bg-center bg-cover absolute right-0 top-[310px] w-[459px] h-[597px]'></div>
      <div className='absolute w-[1020px] top-[230px] left-[calc(50%-510px)] bg-borrow-card dark:bg-borrow-card-dark shadow-borrow-card dark:shadow-borrow-card-dark border border-[#FFFFFF] rounded-[33px] p-[40px]'>
        <div className='text-[#000000] dark:text-[#FFFFFF] text-[18px] leading-[2px] transition-all duration-1000'>Introducing</div>
        <div className='pl-5'>
          <span className='font-semibold text-[64px] leading-[96px] tracking-[2px] text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2]'>Cards</span>
        </div>
        <div className='mt-[20px]'>
          <div className='bg-cards-cardtop bg-center bg-cover w-[467px] h-[488px] m-auto'></div>
        </div>
        <div className='text-center mt-[10px] mb-[10px]'>
          <span className='font-semibold text-[36px] tracking-[4px] text-transparent bg-clip-text bg-gradient-to-b from-[#6E48C9] to-[#BFC1CD]'>Comming soon</span>
        </div>
        <div className='text-[24px] text-[#000000] dark:text-[#CAC7CD] transition-all duration-1000'>
          The only <span className=' text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2]'>crypto</span> you need
        </div>
        <div className='text-right mt-[10px] text-[36px] text-[#000000] dark:text-[#CAC7CD] transition-all duration-1000'>
          Just tope up with <span className=' text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#39C6D9]'>FIAT</span> or <span className=' text-transparent bg-clip-text bg-gradient-to-r from-[#39C6D9] to-[#00DDA2]'>Crypto</span>
        </div>
        <div className='mt-[40px] mb-[40px]'>
          <div className='m-auto p-[30px] border-[6px] border-[#C7B67E] bg-[#E5E4F4] dark:bg-[#281D30] shadow-cards-card rounded-[24px] transition-all duration-1000'>
            <div className='text-[#000000] dark:text-[#FFFFFF] text-[18px] leading-[2px] transition-all duration-1000'>Introducing</div>
            <div className='text-[#000000] dark:text-[#A9C7D1] mt-[20px] pl-[150px] text-[16px] transition-all duration-1000'>MAUI's</div>
            <div className='mt-[10px] ml-[150px] mr-[150px] border border-[#000000] dark:border-[#FFFFFF] transition-all duration-1000'></div>
            <div className='text-center mt-[10px] mb-[10px]'>
              <span className='font-semibold text-[24px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#273855] to-[#728AB7]'>Premium collection</span>
            </div>
            <div className='mt-[10px] ml-[150px] mr-[150px] border border-[#000000] dark:border-[#FFFFFF] transition-all duration-1000'></div>
            <div className='mt-[30px] mb-[50px]'>
              <div className='bg-cards-cardbottom bg-center bg-cover w-[523px] h-[309px] m-auto'></div>
            </div>
          </div>
        </div>
        <div className='mt-[10px] text-[24px] text-[#8D50B4] uppercase text-center'>
          Stay tunned to get <span className='text-[#000000] dark:text-[#FFFFFF] transition-all duration-1000'>MAUI CARD</span> BENEFITS
        </div>
        <div className='mt-[30px] text-center'>
          <button className='bg-[#2F80ED] rounded-[4px] w-[141px] h-[48px] p-1 text-[#FFFFFF]'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Cards;