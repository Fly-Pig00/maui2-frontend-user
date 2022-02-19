import { withRouter, useHistory } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { useWallet } from "@terra-money/wallet-provider";

import AnimatedTab from '../AnimatedTab';
import DarkMode from '../DarkMode';
import { signOut } from "../../saga/actions/workflow";
import Button from '../Button';

const MENU = [
  { title: 'Dashboard', url: '/dashboard' },
  { title: 'Earn', url: '/earn' },
  { title: 'Borrow', url: '/borrow' },
  { title: 'Stocks', url: '/stocks' },
  { title: 'Cards', url: '/cards' },
];

function Logo() {
  const strDate = moment().format('dddd, D MMMM, YYYY');
  return (
    <div className='w-full'>
      <div className='bg-splash-logo dark:bg-splash-logo-dark bg-center bg-cover w-[120px] h-[40px] transition-all duration-1000'></div>
      <div className='mt-[10px] text-[#929daf] dark:text-[#F9D3B4] font-medium text-[12px] leading-[12px] pl-2 transition-all duration-1000'>{strDate}</div>
    </div>
  );
};

function Balance() {
  return <div className='inline-block bg-header-balance w-[60px] h-[14px] bg-cover bg-center'/>
}

function DepositStatus({symbol, balance, kind}) {
  return (
    <div className='bg-[#DEE2E8] dark:bg-[#31303650] dark:bg-header-login-btn-dark rounded-[14px] w-[206px] h-[42px] border border-[#728AB7A0] p-1 flex justify-evenly items-center'>
      <span className='text-[#707070] text-[18px]'>{symbol}</span>
      <span className='font-semibold w-[100px] text-[18px] leading-[24px] mt-[1px] text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2] transition-all duration-1000'>
        {balance}
      </span>
      <span className='text-[#707070] text-[18px]'>{kind}</span>
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
      className="rounded-[10px] shadow-header-login-btn border-0 dark:border-2 dark:border-[#745FF2] w-[93px] h-[42px] bg-[#F3F3FB] dark:bg-transparent"
      onClick={handleClick}
    >
      <span className='font-semibold text-[16px] leading-[24px] text-[#745FF2] dark:text-[#745FF2] transition-all duration-1000'>{label}</span>
    </Button>
  )
}

function Header(props) {
  const { location } = props;
  let history = useHistory();
  const handleDepositClick = () => {
    history.push('/deposit');
  }

  switch(location.pathname) {
    case '/splash':
    case '/login':
      return null;
    case '/deposit':
      return (
        <div className='absolute top-0 left-[calc(50%-180px)] md:left-[calc(50%-450px)] w-[360px] md:w-[900px] z-50'>
          <div className='mt-[20px]'>
            <Logo />
          </div>
          <div className='w-full mt-[24px] h-[50px] md:h-[74px] p-[6px] md:p-4 rounded-[14px] bg-[#E5E9ED] dark:bg-[#2A1B31] drop-shadow-[0_0px_7px_rgba(116,95,242,0.28)] border-2 dark:border-transparent'>
            <div className='flex justify-between items-center pl-5'>
              <div className='text-center'>
                <span className='font-semibold text-[24px] leading-[24px] tracking-[2px] text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2]'>Deposit</span>
              </div>
              <div className='flex justify-between items-center'>
                <Balance />
                <div className='w-[10px]' />
                <DepositStatus symbol="$" balance={props.workflow.balance} kind="USD" />
                <div className='w-[30px]' />
                <LoginButton isLogged={props.workflow.isLogged} signOut={props.signOut} />
              </div>
            </div>
          </div>
          <div className='text-right mt-[25px]'>
            <div className='w-[100px] inline-block'>
              <DarkMode />
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className='absolute top-0 left-[calc(50%-180px)] md:left-[calc(50%-450px)] w-[360px] md:w-[900px] z-50'>
          <div className='mt-[20px] flex justify-between'>
            <Logo />
            <div className='w-full '>
              <div className='text-center'>
                <Balance />
              </div>
              <div className='flex justify-between items-center'>
                <button
                  onClick={handleDepositClick}
                  className='rounded-[20px] shadow-header-deposit-btn dark:shadow-header-deposit-btn-dark w-[110px] h-[32px] bg-[#FFFFFF50] bg-header-deposit-btn dark:bg-header-deposit-btn-dark text-[#000000]
                '>
                  <span className='font-semibold text-[16px] leading-[24px] text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2] dark:from-[#F9D3B4] dark:to-[#F9D3B4] transition-all duration-1000'>DEPOSIT</span>
                </button>
                <DepositStatus symbol="$" balance={props.workflow.balance} kind="USD" />
                <LoginButton isLogged={props.workflow.isLogged} signOut={props.signOut} />
              </div>
            </div>
          </div>
          <div className='mt-[20px]'>
            <AnimatedTab tabs={MENU}/>
          </div>
          {/* {location.pathname === '/dashboard' && */}
          <div className='text-right mt-[25px]'>
            <div className='w-[100px] inline-block'>
              <DarkMode />
            </div>
          </div>
          {/* } */}
        </div>
      );
  }
}

export default compose(
  withRouter,
  connect(
    state => ({
      workflow: state.workflow
    }),
    {
      signOut,
    }
  )
)(Header);