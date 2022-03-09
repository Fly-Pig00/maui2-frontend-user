import React from 'react';
import { useHistory } from 'react-router-dom';

function History() {
  const history = useHistory();

  function handleGoBack(){
    history.push('/dashboard');
  }

  return (
    <div className='relative w-full min-h-[1000px] bg-main-background dark:bg-main-background-dark bg-center bg-cover'>
      {/* card */}
      <div className='absolute w-[1020px] min-h-[700px] top-[220px] left-[calc(50%-510px)] bg-deposit-card dark:bg-deposit-card-dark shadow-stocks-card dark:shadow-stocks-card-dark border border-[#FFFFFF] rounded-[33px]'>
        <span
          onClick={handleGoBack}
          className='absolute top-[25px] left-[30px] text-[30px] cursor-pointer text-[#000000] dark:text-[#FFFFFF]'
        >&lt;</span>
      </div>
    </div>
  )
}

export default History;