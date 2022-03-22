import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Tab from './tab';
import TabCrypto from './Content/crypto';
import TabFiat from './Content/fiat';
import TabSend from './Content/send';

function Deposit() {
  const history = useHistory();
  const [ tabIndex, setTabIndex ] = useState(0);

  function handleTabChange(val) {
    setTabIndex(val);
  }
  function handleGoBack(){
    history.push('/dashboard');
  }

  return (
    <div className='relative w-full min-h-[1050px] md:min-h-[1000px] bg-[#DEE2E8] dark:bg-[#32283C]'>
      {/* bg images */}
      <div className='bg-deposit-leftbottom bg-center bg-cover absolute left-0 bottom-0 w-[265px] h-[218px] md:w-[530px] md:h-[436px]'></div>
      <div className='bg-main-center dark:bg-main-center-dark pointer-events-none bg-center bg-cover absolute right-0 top-[160px] w-[150px] h-[123px] md:top-[200px] md:w-[550px] md:h-[450px]'></div>
      {/* card */}
      <div className='absolute w-[350px] top-[250px] left-[calc(50%-175px)] md:w-[1020px] md:top-[250px] md:left-[calc(50%-510px)] bg-deposit-card dark:bg-deposit-card-dark shadow-stocks-card dark:shadow-stocks-card-dark border border-[#FFFFFF] rounded-[33px]'>
        <span
          onClick={handleGoBack}
          className='absolute top-[25px] left-[30px] text-[30px] cursor-pointer text-[#000000] dark:text-[#FFFFFF]'
        >&lt;</span>
        <Tab
          className={'absolute top-[-25px] left-[calc(50%-165px)] flex items-center'}
          tabIndex={tabIndex}
          onChange={handleTabChange}
        />
        {/* form */}
        {tabIndex === 0 && // Crypto
          <TabCrypto />
        }
        {tabIndex === 1 && // Fiat
          <TabFiat />
        }
        {tabIndex === 2 && // Send
          <TabSend />
        }
      </div>
    </div>
  )
}

export default Deposit;