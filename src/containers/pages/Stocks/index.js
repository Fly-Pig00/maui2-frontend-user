import React from 'react';

function TooltipRow({className, icon, terraPrice}) {
  return (
    <div className={`absolute w-[calc(100%-70px)] left-[20px] p-[20px] pt-[0px] pb-[30px] flex items-center dark:text-[#F9D3B4] text-[#273855] text-[12px] transition-all duration-1000 ${className}`}>
      <div className='w-[200px] flex'>
        <div className={`bg-cover bg-center w-[45px] h-[45px] ${icon}`}/>
        <div className='ml-[10px] flex flex-col justify-center'>
          <div className='text-[16px] text-[#273855] dark:text-[#FFF] font-semibold'>mAAPL</div>
          <div className='text-[12px] text-[#273855] dark:text-[#F9D3B4]'>Apple Inc.</div>
        </div>
      </div>
      <div className='w-[130px] flex text-[#273855] dark:text-[#FFF] items-center'>
        <span className='font-semibold text-[14px]'>{terraPrice}</span>
        <span className='ml-[5px] text-[12px]'>UST</span>
      </div>
      <div className='w-[130px] flex text-[#273855] dark:text-[#FFF] items-center'>
        <span className='font-semibold text-[14px]'>162.72</span>
        <span className='ml-[5px] text-[12px]'>UST</span>
      </div>
      <div className='w-[130px] flex text-[#273855] dark:text-[#FFF] items-center'>
        <span className='font-semibold text-[14px]'>8.32%</span>
      </div>
      <div className='w-[130px] flex text-[#273855] dark:text-[#FFF] items-center'>
        <span className='font-semibold text-[14px]'>150%</span>
      </div>
      <div className='w-[280px] flex justify-between'>
        <div className='bg-center bg-cover bg-stocks-btn-buy w-[83px] h-[42px]'></div>
        <div className='bg-center bg-cover bg-stocks-btn-sell w-[83px] h-[42px]'></div>
        <div className='bg-center bg-cover bg-stocks-btn-neutral dark:bg-stocks-btn-neutral-dark w-[83px] h-[42px]'></div>
      </div>
    </div>
  )
}
function Stocks() {
  return (
    <div className='relative w-full min-h-[1500px] bg-[#DEE2E8] dark:bg-[#32283C] transition-all duration-1000'>
      {/* bg images */}
      <div className='bg-stocks-left bg-center bg-cover absolute left-0 bottom-[30%] w-[600px] h-[350px]'></div>
      <div className='bg-stocks-right bg-center bg-cover absolute right-0 top-[200px] w-[500px] h-[350px]'></div>
      {/* card */}
      <div className='absolute w-[1020px] top-[230px] left-[calc(50%-510px)] bg-stocks-card dark:bg-stocks-card-dark shadow-stocks-card dark:shadow-stocks-card-dark border border-[#FFFFFF] rounded-[33px]'>
        <div className='mt-[50px] text-center'>
          <span className='text-[35px] drop-shadow-[0_0px_4px_rgba(162,89,255,0.67)] tracking-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#39C6D9]'>Synthetic Stocks</span>
        </div>
        <div className='mt-[70px]'>
          <div className='ml-[-100px] relative'>
            <div className='bg-stocks-tooltip dark:bg-stocks-tooltip-dark bg-center bg-cover w-[1100px] h-[350px]'></div>
            <div className='absolute top-[30px] w-full left-[40px] flex items-center dark:text-[#F9D3B4] text-[#273855] text-[12px] transition-all duration-1000'>
              <div className='w-[200px]'>Ticker</div>
              <div className='w-[130px]'>Terraswap Price</div>
              <div className='w-[130px]'>Oracle Price</div>
              <div className='w-[130px]'>Premium</div>
              <div className='w-[130px]'>Min Col. Ratio</div>
              <div className='w-[280px] text-center'>Action</div>
            </div>
            <TooltipRow
              className="top-[100px] border-b-[1px] dark:border-b-[#F9D3B4] border-b-[#D2D2D2]"
              icon="bg-stocks-icon-aapl"
              terraPrice="164.92"
            />
            <TooltipRow
              className="top-[200px]"
              icon="bg-stocks-icon-abnb"
              terraPrice="$13.13"
            />
          </div>
          <div className='w-full'>
            <div className='m-auto bg-center bg-cover bg-stocks-oneclick w-[477px] h-[217px]' />
          </div>
          <div className='w-full relative h-[250px] mt-[100px]'>
            <div className='m-auto bg-center bg-cover bg-stocks-stocks dark:bg-stocks-stocks-dark dark:w-[201px] dark:h-[49px] w-[275px] h-[74px]' />
            <div className='m-auto mt-[-20px] bg-center bg-cover bg-stocks-availablesoon dark:bg-stocks-availablesoon-dark w-[806px] h-[117px]' />
          </div>
        </div>
        <div className='mt-[20px] mb-[30px] text-[24px] font-semibold text-center tracking-[2px]'>
          <span className='text-[#39C6D9]'>Buy</span>
          <span className='text-[#000000] dark:text-[#FFFFFF] pl-2 pr-2 transition-all duration-1000'>-</span>
          <span className='text-[#EB5757]'>sell</span>
          <br />
          <span className='text-[18px] tracking-[5px] text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#39C6D9]'>Delta neutral</span>
        </div>
      </div>
    </div>
  )
}

export default Stocks;