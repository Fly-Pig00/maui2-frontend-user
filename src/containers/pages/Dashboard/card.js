import { useHistory } from "react-router-dom";

function Card({id, className, img, title1, title2, description, btnTitle, url}) {
  const history = useHistory();
  function handleClick(){
    history.push(url);
  }
  return (
    <div id={id} className={`w-[340px] bg-main-card dark:bg-main-card-dark absolute rounded-[26px] border border-[#FFFFFF68] shadow-main-card dark:shadow-main-card-dark p-[24px] ${className}`}>
      <div className='text-center'>
        <span className='font-semibold text-[24px] leading-[36px] text-transparent bg-clip-text bg-gradient-to-r from-[#39C6D9] via-[#B84ADE] to-[#DE1F4D]'>
          {title1}
        </span>
      </div>
      <div className='text-center'>
        <span className='font-semibold text-[24px] leading-[36px] text-transparent bg-clip-text bg-gradient-to-r from-[#39C6D9] via-[#B84ADE] to-[#DE1F4D]'>
          {title2}
        </span>
      </div>
      
      <div className='mt-[20px] flex items-center justify-evenly'>
        <div className={`bg-cover bg-center rounded-[22px] ${img}`}/>
        <div className='w-[38%] text-[14px] leading-[25px] text-[#000000] dark:text-[#EDEDF9] transition-colors duration-1000'>
          {description}
        </div>
      </div>
      <div className='mt-[20px] w-full'>
        {id === 'main-card-stocks' &&
          <button
            onClick={handleClick}
            className='bg-gradient-to-r from-[#745FF2] to-[#00DDA2] shadow-main-card-btn rounded-[16px] text-[20px] text-[#F0F5F9] tracking-[3px] p-[2px] w-full'
          >
            <div className='bg-[#ffffff] dark:bg-[#32283C] rounded-[16px] text-[#000000] p-2'>
              <span className='font-semibold text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2]'>{btnTitle}</span>
            </div>
          </button>
        }
        {id !== 'main-card-stocks' &&
          <button
            onClick={handleClick}
            className='bg-main-card-btn shadow-main-card-btn rounded-[16px] text-[20px] text-[#F0F5F9] tracking-[3px] p-2 w-full'
          >
            {btnTitle}
          </button>
        }
      </div>
    </div>
  )
}

export default Card;