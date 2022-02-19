function RightBar({isCrypto}) {
  return (
    <div className='w-full'>
      <div className='text-[#273855] dark:text-[#F9D3B4] text-[16px] font-semibold tracking-[1px] transition-all duration-1000'>Features</div>
      <div className='mt-[20px] w-[240px] text-[14px] leading-[21px] text-[#7E7E7E] dark:text-[#EDEDF9] transition-all duration-1000'>
        You can now deposit your asset as per your convience.<br /><br />Crypto or Fiat, Your choice. 
      </div>
      <div className='w-[200px] h-[150px] mt-[10px] flex flex-col justify-center items-center'>
        <div className={`${isCrypto ? 'bg-deposit-crypto-saly rounded-[12px] w-[173px] h-[132px]' : 'bg-deposit-fiat-saly rounded-[25px] w-[142px] h-[145px]'} bg-cover bg-center transition-all duration-1000`} />
      </div>
      
      <div className='mt-[20px] text-[#273855] dark:text-[#c5946b] text-[16px] font-semibold tracking-[1px] transition-all duration-1000'>About Maui</div>
      <div className='mt-[20px] w-[240px] text-[14px] leading-[21px] text-[#7E7E7E] dark:text-[#EDEDF9] transition-all duration-1000'>
        Uncomplicated and safe decentralized financial products built to serve everyone fairly with “one click Strategies”.
      </div>
    </div>
  )
}

export default RightBar;