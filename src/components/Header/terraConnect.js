import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import { useEffect, useState } from "react";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import { apiSignIn, signOut } from "../../saga/actions/workflow";
import Loading from "./loading";
import 'react-toastify/dist/ReactToastify.css';

const EXTENSION = 'EXTENSION';

function TerraConnect(props) {
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
  const [ isGettingSignature, setIsGettingSignature ] = useState(false);
  const apiSignIn = props.apiSignIn;

  useEffect(() => {
    console.log('wallet status', status, availableInstallTypes, availableConnectTypes);
    switch(status) {
      case WalletStatus.WALLET_NOT_CONNECTED:
        if (availableInstallTypes.indexOf(EXTENSION) >= 0) { // should install
          setLabel('INSTALL');
        } else {
          if (availableConnectTypes.indexOf(EXTENSION) >= 0) {
            setLabel('LOGIN');
          } else {
            setLabel('ERROR');
          }
        }
        break;
      case WalletStatus.WALLET_CONNECTED:
        setLabel('LOGIN');
        break;
      case WalletStatus.INITIALIZING:
        setLabel('...');
        break;
      default:
        break;
    }
  }, [status, availableInstallTypes, availableConnectTypes]);

  useEffect(() => {
    if (isConnecting && status === WalletStatus.WALLET_CONNECTED && !isGettingSignature) { // user clicked on login button and then wallet connection has been completed from disconnected state.
      const getSignature = async () => {
        const BYTES = Buffer.from(wallets[0].terraAddress)
        try{
          const { result } = await signBytes(BYTES);
          const signature = result.signature.toString();
          processSignIn(wallets[0].terraAddress, signature);
        }
        catch(e) {
          toast.error("Connecting wallet denied");
          setIsConnecting(false);
          setIsGettingSignature(false);
          // console.log('catch', e);
        }
        finally {
          return;
        }
      }
      const processSignIn = (terraAddress, signature) => {
        apiSignIn({
          url: '/signIn',
          method: 'POST',
          data: {
            terraAddress: terraAddress,
            signature: signature,
          },
          success: (response) => {
            localStorage.setItem('token', response.token);
            // console.log('response', response);
            toast.success("Login Success!");
            setLabel('LOGOUT');
            setIsConnecting(false);
            setIsGettingSignature(false);
          },
          fail: (error) => {
            console.log('signIn error', error);
            toast.error("Login API Failed!");
            setIsConnecting(false);
            setIsGettingSignature(false);
          }
        })
      }
      console.log('getting signature');
      setIsGettingSignature(true);
      getSignature(); // get signature
    }
  }, [status, isConnecting, isGettingSignature, wallets, signBytes, apiSignIn]);

  /**
   * Handle events
   */
  const handleClick = (e) => {
    const isSignedIn = !!props.workflow.mauiAddress;
    if (isSignedIn) {
      localStorage.clear();
      disconnect();
      props.signOut();
    } else {
      switch(status) {
        case WalletStatus.WALLET_NOT_CONNECTED:
          if (availableInstallTypes.indexOf(EXTENSION) >= 0) { // should install
            install(EXTENSION);
          } else {
            if (availableConnectTypes.indexOf(EXTENSION) >= 0) { // connect
              setIsConnecting(true);
              connect(EXTENSION);
            } else {
              toast.error("Extension is not available");
            }
          }
          break;
        case WalletStatus.WALLET_CONNECTED:
          // already connected then go to getSignature directly.
          setIsConnecting(true);
          // getSignature();
          break;
        default:
          break;
      }
    }
  }
  
  /**
   * Render
   */
  let className = 'rounded-[10px] shadow-header-login-btn border-0 dark:border-2 dark:border-[#745FF2] w-[93px] h-[42px] bg-[#F3F3FB] dark:bg-transparent';
  const isLoading = status === WalletStatus.INITIALIZING || isConnecting;
  if (isLoading) {
    className += ' bg-[#dbe3eb] hover:bg-[#dbe3eb] text-[#6c757d] cursor-no-drop ';
  }
  return (
    <>
      <button
        className={className}
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex flex-col items-center">
            <Loading width={24} height={24} fill="#FFF"/>
          </div>
        ):(
          <span className='font-semibold text-[16px] leading-[24px] text-[#745FF2] dark:text-[#745FF2] transition-all duration-1000'>{label}</span>
        )}     
      </button>
      <ToastContainer />
    </>
    
  );
}

export default compose(
  connect(
    state => ({
      workflow: state.workflow
    }),
    {
      apiSignIn,
      signOut,
    }
  )
)(TerraConnect);