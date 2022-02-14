import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import { useEffect, useState } from "react";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { apiSignIn, apiSignOut } from "../../saga/actions/workflow";
function LoginTerra(props) {
  const {
    connect,
    status,
    availableConnectTypes,
    availableInstallTypes,
    install,
    disconnect,
    wallets,
    signBytes,
  } = useWallet();

  const [ label, setLabel ] = useState('LOGIN');
  const [ isConnecting, setIsConnecting ] = useState(false);
  
  useEffect(() => {
    console.log('status', status);
    switch(status) {
      case WalletStatus.WALLET_NOT_CONNECTED:
        setLabel('LOGIN');
        break;
      case WalletStatus.WALLET_CONNECTED:
        if (isConnecting) {
          getSignature();
          setIsConnecting(false);
        }
        break;
      default:
        break;
    }
  }, [status]);

  const handleConnect = () => {
    console.log('connecting...');
    connect('EXTENSION');
  }
  const getSignature = async () => {
    const BYTES = Buffer.from(wallets[0].terraAddress)
    try{
      const { result } = await signBytes(BYTES);
      const signature = result.signature.toString();
      processSignIn(wallets[0].terraAddress, signature);
    }
    finally {
      return;
    }
  }
  const processSignIn = (terraAddress, signature) => {
    props.apiSignIn({
      url: '/signIn',
      method: 'POST',
      data: {
        terraAddress: terraAddress,
        signature: signature,
      },
      success: (response) => {
        localStorage.setItem('token', response.token);
        console.log('response', response);
        setLabel('LOGOUT');
      },
      fail: (error) => {
        console.log('error', error);
      }
    })
  }
  const processSignout = () => {
    const funcSignOut = () => {
      setLabel('LOGIN');
      localStorage.clear();
      disconnect();
    }
    props.apiSignOut({
      url: '/signOut',
      method: 'POST',      
      success: (response) => {
        funcSignOut();
      },
      fail: (error) => {
        funcSignOut();
      }
    })
  }
  const handleClick = (e) => {
    const isSignedIn = !!props.workflow.mauiAddress;
    console.log('isSigned', isSignedIn, props.workflow);
    if (isSignedIn) {
      processSignout();
    } else {
      switch(status) {
        case WalletStatus.WALLET_NOT_CONNECTED:
          handleConnect();
          setIsConnecting(true);
          break;
        case WalletStatus.WALLET_CONNECTED:
          getSignature();
          break;
        default:
          break;
      }
    }
    
  }
  return (
    <button
      className='rounded-[10px] shadow-header-login-btn border-0 dark:border-2 dark:border-[#745FF2] w-[93px] h-[42px] bg-[#F3F3FB] dark:bg-transparent'
      onClick={handleClick}
    >
      <span className='font-semibold text-[16px] leading-[24px] text-[#745FF2] dark:text-[#745FF2] transition-all duration-1000'>{label}</span>
    </button>
  );
}


export default compose(
  connect(
    state => ({
      workflow: state.workflow
    }),
    {
      apiSignIn,
      apiSignOut
    }
  )
)(LoginTerra);