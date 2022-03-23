import { withRouter, useHistory } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { useWallet } from "@terra-money/wallet-provider";

import AnimatedTab from '../AnimatedTab';
import DarkMode from '../DarkMode';
import NetworkSwitch from '../NetworkSwitch';
import { signOut, updateBalance } from "../../saga/actions/workflow";
import Button from '../Button';

const MENU = [
  { title: 'Dashboard', url: '/dashboard' },
  { title: 'Earn', url: '/earn' },
  { title: 'Borrow', url: '/borrow' },
  { title: 'Stocks', url: '/stocks' },
  { title: 'Cards', url: '/cards' },
];

function Logo(props) {
  let history = useHistory();
  const strDate = moment().format('dddd, D MMMM, YYYY');
  const handleClick = () => {
    if (props.pathname !== '/dashboard') {
      history.push('/dashboard');
    }
  }
  return (
    <div className='w-full h-[40px] md:h-[70px]'>
      <div className='bg-splash-logo dark:bg-splash-logo-dark bg-center bg-cover w-[90px] h-[30px] md:w-[120px] md:h-[40px] transition-all duration-1000 cursor-pointer' onClick={handleClick}></div>
      <div className='hidden md:block mt-[15px] text-[#929daf] dark:text-[#F9D3B4] font-medium text-[12px] leading-[12px] pl-2 transition-all duration-1000'>{strDate}</div>
    </div>
  );
};

function DepositStatus({isDepositPage, symbol, balance, isLoading, kind, onClick}) {
  const balanceClass = `absolute ${isDepositPage ? 'left-[-70px] top-[2px] md:left-[-80px] md:top-[13px]' : 'left-[30px] md:left-[60px] top-[-23px]'} bg-header-balance w-[60px] h-[14px] bg-cover bg-center`
  return (
    <div
      className='relative ml-[5px] md:ml-[15px] bg-[#DEE2E8] dark:bg-[#31303650] dark:bg-header-login-btn-dark rounded-[7px] md:rounded-[14px] w-[103px] h-[21px] md:w-[206px] md:h-[42px] border border-[#728AB7A0] p-1 flex justify-evenly items-center cursor-pointer'
      title="Click here to update balance"
      onClick={onClick}
    >
      <div className={balanceClass}/>
      <span className='text-[#707070] text-[12px] md:text-[18px]'>{symbol}</span>
      <span className='font-semibold w-[60px] md:w-[100px] text-[12px] md:text-[18px] leading-[24px] mt-[1px] text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2] transition-all duration-1000'>
        {isLoading ? '...' : balance}
      </span>
      <span className='text-[#707070] text-[12px] md:text-[18px]'>{kind}</span>
    </div>
  )
}

function LoginButton({isLogged, signOut}) {
  const { disconnect } = useWallet();
  let history = useHistory();
  function handleClick() {
    if (isLogged) {
      localStorage.clear();
      disconnect();
      signOut();
    } else {
      history.push('/login');
    }
  }
  const label = isLogged ? 'LOGOUT' : 'LOGIN';
  return (
    <Button
      className="flex justify-center items-center ml-[5px] md:ml-[15px] rounded-[5px] md:rounded-[10px] shadow-header-login-btn border-0 dark:border-2 dark:border-[#745FF2] w-[45px] h-[21px] md:w-[93px] md:h-[42px] bg-[#F3F3FB] dark:bg-transparent"
      onClick={handleClick}
    >
      <span className='font-semibold text-[10px] leading-[12px] mt-[2px] md:mt-0 md:text-[16px] md:leading-[24px] text-[#745FF2] dark:text-[#745FF2] transition-all duration-1000'>{label}</span>
    </Button>
  )
}

function Header(props) {
  // console.log('header network', props.workflow.network);
  const { location } = props;
  let history = useHistory();
  const handleDepositClick = () => {
    history.push('/deposit');
  }
  const handleHistoryClick = () => {
    history.push('/history');
  }
  const handleUpdateBalance = () => {
    props.updateBalance(props.workflow.mauiAddress);
  }

  if (location.pathname === '/splash' || location.pathname === '/login')
    return null;
  const isTheme2 = location.pathname === '/deposit' || location.pathname === '/history';
  const theme2Title = location.pathname === '/deposit' ? 'Deposit' : 'History';
  
  return (
    <div className='absolute top-0 left-[calc(50%-180px)] md:left-[calc(50%-450px)] w-[360px] md:w-[900px] z-50'>
      <div className='mt-[25px] flex justify-between items-end'>
        <Logo pathname={location.pathname}/>
      </div>
      { isTheme2 ?
        <div className='relative w-full mt-[5px] md:mt-[20px] h-[50px] md:h-[74px] p-[6px] md:p-4 rounded-[14px] bg-[#E5E9ED] dark:bg-[#2A1B31] drop-shadow-[0_0px_7px_rgba(116,95,242,0.28)] border-2 dark:border-transparent'>
          <span className='absolute left-[10px] top-[10px] md:left-[30px] md:top-[23px] font-semibold text-[14px] md:text-[24px] leading-[24px] tracking-[2px] text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2]'>{theme2Title}</span>
        </div>
      :
        <div className='fixed bottom-[30px] md:absolute md:top-[105px] left-[calc(50%-180px)] md:left-[calc(50%-450px)] w-[360px] md:w-[900px] z-50'>
          <AnimatedTab tabs={MENU}/>
        </div>
      }
      <div className={`absolute transition-all duration-1000 flex justify-between items-center ${isTheme2 ? 'top-[80px] md:top-[130px] right-[10px] md:right-[20px]': 'top-[25px] md:top-[50px] right-[0px]'}`}>
        {props.workflow.isLogged && !isTheme2 &&
          <button
            onClick={handleDepositClick}
            className='flex justify-center items-center rounded-[5px] md:rounded-[20px] shadow-header-deposit-btn dark:shadow-header-deposit-btn-dark w-[60px] h-[20px] md:w-[110px] md:h-[32px] bg-[#FFFFFF50] bg-header-deposit-btn dark:bg-header-deposit-btn-dark text-[#000000]
          '>
            <span className='font-semibold text-[10px] leading-[12px] md:text-[16px] md:leading-[24px] text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2] dark:from-[#F9D3B4] dark:to-[#F9D3B4] transition-all duration-1000'>DEPOSIT</span>
          </button>
        }
        {props.workflow.isLogged &&
          <DepositStatus
            isDepositPage={isTheme2}
            symbol="$"
            balance={props.workflow.balance}
            isLoading={props.workflow.isUpdatingBalance}
            kind="USD"
            onClick={handleUpdateBalance}
          />
        }
        {props.workflow.isLogged &&
          <div
            className='bg-header-history dark:bg-header-history-dark m-[5px] ml-[5px] md:ml-[10px] w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-cover bg-center cursor-pointer'
            title="Transaction Log"
            onClick={handleHistoryClick}
          />
        }
        <LoginButton isLogged={props.workflow.isLogged} signOut={props.signOut} />
      </div>
      <div className={`absolute right-[10px] md:right-0 transition-all duration-1000 flex justify-end ${isTheme2 ? 'top-[30px] md:top-[60px]': 'top-[70px] md:top-[195px]'}`}>
        <div className='w-[100px] md:w-[150px] mr-[20px]'>
          <NetworkSwitch />
        </div>
        <div className='w-[60px] md:w-[100px]'>
          <DarkMode />
        </div>
      </div>
    </div>
  );
}

export default compose(
  withRouter,
  connect(
    state => ({
      workflow: state.workflow
    }),
    {
      signOut,
      updateBalance
    }
  )
)(Header);