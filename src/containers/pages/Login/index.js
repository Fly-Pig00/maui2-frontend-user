import { useHistory } from 'react-router-dom';
import TerraConnect from './terraConnect';

function Login() {
  const history = useHistory();
  function handleGoBack(){
    history.push('/dashboard');
  }
  return (
    <div className='relative w-full min-h-[1000px] bg-login-background dark:bg-login-background-dark transition-all duration-1000'>
      {/* bg images */}
      <div className='mix-blend-luminosity dark:mix-blend-normal bg-login-leftbottom bg-center bg-cover absolute left-0 bottom-0 w-[412px] h-[402px]'></div>
      <div className='mix-blend-luminosity dark:mix-blend-normal bg-login-middletop bg-center bg-cover absolute left-[25%] top-0 w-[270px] h-[125px]'></div>
      <div className='mix-blend-luminosity dark:mix-blend-normal bg-login-middlemiddle bg-center bg-cover absolute left-[20%] top-[40%] w-[339px] h-[309px]'></div>
      <div className='mix-blend-luminosity dark:mix-blend-normal bg-login-middlebottom bg-center bg-cover absolute left-[30%] bottom-[10%] w-[393px] h-[370px]'></div>
      <div className='mix-blend-luminosity dark:mix-blend-normal bg-login-righttop bg-center bg-cover absolute right-[5%] top-[10%] w-[669px] h-[623px]'></div>
      <div className='mix-blend-luminosity dark:mix-blend-normal bg-login-rightbottom bg-center bg-cover absolute right-0 bottom-0 w-[662px] h-[347px]'></div>
      <span
        onClick={handleGoBack}
        className='absolute top-[calc(50%-400px)] left-[calc(50%-450px)] text-[30px] cursor-pointer text-[#FFFFFF] dark:text-[#FFFFFF]'
      >&lt;</span>
      {/* card */}
      <div className='absolute w-[900px] h-[750px] top-[calc(50%-330px)] left-[calc(50%-450px)] bg-[#5882C140] dark:bg-[#FFFFFF1A] backdrop-blur-[25px] border-[3px] border-[#5882C1] dark:border-[#FFFFFFB0] rounded-[40px] p-[20px] text-center'>
        <div
          className='bg-splash-logo dark:bg-splash-logo-dark bg-center bg-cover w-[120px] h-[40px] transition-all duration-1000 cursor-pointer'
          onClick={handleGoBack}
        />
        <div className='mt-[70px] text-[28px] leading-[42px] text-[#FFFFFF] font-semibold text-center tracking-[4px] login-text-shadow'>
          We offer <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2]'>Revolutionary Banking</span><br />services based on blockchain.
        </div>
        <div className="mt-[50px] tracking-[1px] text-[24px] text-[#FFFFFF] dark:text-[#C9C0C0] font-semibold text-center">
          Please access your account on blockchain
        </div>
        <TerraConnect
          className="mt-[30px] rounded-[50px] border-2 border-[#0C3E9F] dark:border-[#745FF2] w-[60%] h-[50px] bg-[#FFFFFF] dark:bg-[#4D4360]"
          label={<span className='font-semibold text-[20px] leading-[24px] tracking-[1px] text-[#0C3E9F] dark:text-[#745FF2] transition-all duration-1000'>My Account</span>}
        />
        <div className="mt-[20px] text-center text-[#FFFFFF]">OR</div>
        <div className="mt-[20px] text-center text-[#FFFFFF]">Don’t have an account yet?</div>
        <TerraConnect
          className="mt-[30px] rounded-[50px] border-2 border-[#003465] dark:border-[#745FF2] w-[60%] h-[50px] bg-[#003465] dark:bg-[#745FF2]"
          label={<span className='font-semibold text-[20px] leading-[24px] tracking-[1px] text-[#FFFFFF] dark:text-[#FFFFFF] transition-all duration-1000'>New Account</span>}
        />
        <div className='mt-[20px] text-center text-[#FFFFFF]'>
          <p>For new Accounts: </p>
          <br/>
          <p>1. Open Chrome browser</p>
          <p>2. Open <a href='http://station.terra.money' target='_blank' className='underline cursor-pointer'>http://station.terra.money</a></p>
          <p>3. Connect to the Terra Station extension</p>
          <p>4. Sign transactions</p>
        </div>
      </div>
    </div>
  )
}

export default Login;