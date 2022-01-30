import React from 'react';
import { useHistory } from "react-router-dom";

function Splash() {
  let history = useHistory();
  function handleClick(){
    history.push('/main');
  }
  return (
    <div className='w-full h-screen bg-[#DEE2E8] dark:bg-[#000000] transition-all duration-1000' onClick={handleClick}>
      <div className='fixed w-full h-full flex flex-col justify-center items-center '>
        <div className='bg-logo dark:bg-logo-dark bg-center bg-cover w-[405px] h-[141px] transition-all duration-1000'></div>
        <div className='mb-20 font-semibold text-[36px] leading-[54px] tracking-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2]'>BANKING REVOLUTION</div>
      </div>
      <div className='fixed left-[20%] bottom-[10%] text-center'>
        <div className='font-bold text-[#00DDA2] tracking-[5px] text-[24px]'>"One click"</div>
        <div className='font-bold text-sm text-[#728AB7] dark:text-[#ffffff] tracking-[5px] transition-all duration-1000'>Defi Strategy</div>
      </div>
      <div className='bg-lefttop1 bg-center bg-cover fixed top-0 left-[123px] w-[213px] h-[193px] transition-all duration-1000'></div>
      <div className='bg-lefttop1 bg-center bg-cover fixed top-0 left-[290px] w-[134px] h-[113px] transition-all duration-1000'></div>
      <div className='bg-leftmiddle dark:bg-leftmiddle-dark bg-center bg-cover fixed top-[20px] left-0 w-[426px] h-[557px] transition-all duration-1000'></div>
      <div className='bg-leftbottom dark:bg-leftbottom-dark bg-center bg-cover fixed left-[100px] bottom-0 w-[284px] h-[425px] transition-all duration-1000'></div>
      <div className='bg-righttop dark:bg-righttop-dark bg-center bg-cover fixed right-[50px] top-0 w-[532px] h-[489px] transition-all duration-1000'></div>
      <div className='bg-rightbottom bg-center bg-cover fixed right-0 bottom-0 w-[617px] h-[470px] transition-all duration-1000'></div>
    </div>
  );
}

export default Splash;
