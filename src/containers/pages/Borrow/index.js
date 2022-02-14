import React from 'react';
import functionPlot from 'function-plot';
import { white } from 'tailwindcss/colors';
import CustomSlider from './slider';

function Borrow() {
  const handleChanged = (collateral, borrowed, apy) => {
    console.log('val', collateral, borrowed, apy);
    functionPlot({
      target: "#plot",
      width: 370,
      height: 270,
      yAxis: {
        label: "Remaining Debt",
        domain: [0, 50],
        color: white,
      },
      xAxis: {
        label: "X axis",
        domain: [0, 30],
      },
      data: [
        {
          fn: `(${(-collateral / 1200) * apy}x + ${borrowed}) / 1000`,
        },
      ],
      disableZoom: true,
    });
  };
  
  return (
    <div className='relative w-full min-h-[1750px] bg-[#DEE2E8] dark:bg-[#32283C] transition-all duration-1000'>
      {/* bg images */}
      <div className='bg-borrow-left bg-center bg-cover absolute left-[-143px] top-[200px] w-[1024px] h-[768px]'></div>
      <div className='bg-borrow-leftbottom bg-center bg-cover absolute left-0 bottom-0 w-[677px] h-[766px]'></div>
      <div className='bg-borrow-righttop bg-center bg-cover absolute right-0 top-[100px] w-[325px] h-[313px]'></div>
      <div className='bg-borrow-rightbottom bg-center bg-cover absolute right-0 top-[300px] w-[549px] h-[581px]'></div>
      <div className='bg-borrow-rightbottom2 bg-center bg-cover absolute right-0 bottom-[0px] w-[559px] h-[909px]'></div>
      {/* card */}
      <div className='absolute w-[1020px] top-[230px] left-[calc(50%-510px)] bg-borrow-card dark:bg-borrow-card-dark shadow-borrow-card dark:shadow-borrow-card-dark border border-[#FFFFFF] rounded-[33px]'>
          <div className='mt-[30px] text-[30px] text-[#273855] dark:text-[#728AB7] text-center transition-all duration-1000'>Get access up to <span className='text-[#273855] dark:text-[#FFFFFF] font-bold transition-all duration-1000'>50%</span> of your collateral with</div>
          <div className='text-[30px] text-center'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#39C6D9]'>no repayments</span>
            <span className='pl-3 pr-3 dark:text-[#728AB7]'>&</span>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#39C6D9] to-[#00DDA2]'>no liquidation risk!</span>
          </div>
          <div className='relative mt-[100px] w-full flex justify-center p-[20px]'>
            <div className='text-center w-full p-[40px]'>
              <div>
                <div className='text-left pl-[10px] text-[24px] text-[#000] dark:text-[#EFEFFA]'><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#39C6D9]'>Zero</span> Repayments</div>
                <div className='mt-[20px] w-[400px] h-[300px] rounded-[14px] border-[1px] border-[#FFFFFF00] dark:border-[#F9D3B4] bg-[#EBEBF8] dark:bg-borrow-card-small-dark shadow-borrow-card-small dark:shadow-borrow-card-small-dark'>
                  <div className='rounded-[18px] w-[400px] h-[300px]' id="plot"></div>
                </div>
              </div>
              <div className='mt-[100px]'>
                <div className='text-[16px] text-[#000] dark:text-[#EFEFFA] mb-[20px]'>Your yield <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#39C6D9] text-[24px]'>Self Repays</span> your loan</div>
                <div className='m-auto bg-[#EBEBF8] dark:bg-borrow-card-small-dark rounded-[14px] border-[#FFFFFF00] border-[3px] dark:border-[#FFFFFF40] p-[10px] pt-[20px] pb-[20px] shadow-borrow-card-small dark:shadow-borrow-card-small-dark w-[250px]'>
                  <div className='flex justify-between'>
                    <div className='w-[80px] text-[#273855] dark:text-[#F9D3B4]'>Duration:</div>
                    <div className='text-[#7879F1]'>365 Days</div>
                  </div>
                  <div className='flex justify-between items-center mt-[10px]'>
                    <div className='w-[80px] text-[#273855] dark:text-[#F9D3B4]'>Maturity Date:</div>
                    <div className='text-[#7879F1]'>03.12.2023</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center w-full p-[40px] flex flex-col justify-center items-center'>
              <div>
                <div className='text-[16px] text-[#000] dark:text-[#EFEFFA]'>Borrow <span className='text-transparent tracking-tight bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#39C6D9] text-[24px]'>Permissionless</span> and <span className='text-transparent tracking-tight bg-clip-text bg-gradient-to-r from-[#39C6D9] to-[#00DDA2] text-[24px]'>Instantly</span></div>
              </div>
              <div className='mt-[20px] w-[250px] h-[300px] rounded-[14px] border-[2px] border-[#FFFFFF00] dark:border-[#F9D3B4] bg-[#EBEBF8] dark:bg-borrow-card-small-dark shadow-borrow-card-small dark:shadow-borrow-card-small-dark'>
                <CustomSlider
                  onChange={handleChanged}
                />
              </div>
            </div>
          </div>
          <div className='w-full text-center relative'>
            <span className='block dark:hidden font-medium leading-[250px] text-[250px] borrow-span-borrow'>Borrow</span>
            <span className='hidden dark:block font-medium leading-[250px] text-[250px] borrow-span-borrow-dark'>Borrow</span>
            <div className='absolute w-full top-[100px] text-center'>
              <span className='block dark:hidden font-medium text-[144px] text-[#728AB7] dark:text-[#FFFFFF] borrow-span-soon'>SOON</span>
              <span className='hidden dark:block font-medium text-[144px] text-[#728AB7] dark:text-[#FFFFFF] borrow-span-soon-dark'>SOON</span>
            </div>
          </div>
          <div className='mt-[120px] mb-[70px] text-center tracking-[4px]'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#39C6D9]'>Deposit - Borrow -Zero Repayments</span>
          </div>
      </div>
    </div>
  )
}

export default Borrow;