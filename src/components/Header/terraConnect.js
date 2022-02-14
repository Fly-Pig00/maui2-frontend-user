import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import { useEffect, useState } from "react";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { toast } from "react-toastify";
import { apiSignIn, signOut, updateBalance } from "../../saga/actions/workflow";
import 'react-toastify/dist/ReactToastify.css';
import Button from "../Button";

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
  const updateBalance = props.updateBalance;
  const isLogged = props.workflow.isLogged;

  useEffect(() => {
    if (isLogged) {
      setLabel('LOGOUT');
    } else {
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
    }
  }, [status, availableInstallTypes, availableConnectTypes, isLogged]);

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
            updateBalance(response.mauiAddress);
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
  }, [status, isConnecting, isGettingSignature, wallets, signBytes, apiSignIn, updateBalance]);

  /**
   * Handle events
   */
  const handleClick = (e) => {
    if (props.workflow.isLogged) {
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
  const isLoading = status === WalletStatus.INITIALIZING || isConnecting;
  return (
    <Button
      className="rounded-[10px] shadow-header-login-btn border-0 dark:border-2 dark:border-[#745FF2] w-[93px] h-[42px] bg-[#F3F3FB] dark:bg-transparent"
      onClick={handleClick}
      isLoading={isLoading}
      isDisabled={isLoading}
    >
      <span className='font-semibold text-[16px] leading-[24px] text-[#745FF2] dark:text-[#745FF2] transition-all duration-1000'>{label}</span>
    </Button>
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
      updateBalance,
    }
  )
)(TerraConnect);