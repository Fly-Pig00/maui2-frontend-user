import { withRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { apiSignIn, updateBalance, updateNetwork } from "../../saga/actions/workflow";
import LoadingIcon from './loading';
import { useWallet } from "@terra-money/wallet-provider";
import { EXTENSION } from '../../utils/wallet';

function BackgroundWorker(props) {
  const [ isLoading, setIsLoading ] = useState(true);
  const apiSignIn = props.apiSignIn;
  const updateBalance = props.updateBalance;
  // const updateNetwork = props.updateNetwork;
  const { /*network,*/ connect, disconnect } = useWallet();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) { // recover login
      setTimeout(() => {
        connect(EXTENSION);
      }, 1000);
      const terraAddress = localStorage.getItem('terraAddress');
      const signature = localStorage.getItem('signature');
      apiSignIn({
        url: '/signIn',
        method: 'POST',
        data: {
          terraAddress: terraAddress,
          signature: signature,
        },
        success: (response) => {
          localStorage.setItem('token', response.token);
          setIsLoading(false);
          updateBalance(response.mauiAddress);
        },
        fail: (error) => {
          localStorage.clear();
          setIsLoading(false);
        }
      })
    } else {
      setTimeout(() => {
        disconnect();
      }, 1000);
      localStorage.clear();
      setIsLoading(false);
    }
  }, [apiSignIn, updateBalance, disconnect, connect]);

  // useEffect(() => {
  //   if (network) {
  //     updateNetwork(network);
  //   }
  // }, [network, updateNetwork]);

  return isLoading ? (
    <div className='absolute left-0 top-0 w-full h-full flex bg-[#00000020] z-[99999]'>
      <LoadingIcon />
    </div>
  ) : null;
}

export default compose(
  withRouter,
  connect(
    state => ({
      workflow: state.workflow
    }),
    {
      apiSignIn,
      updateBalance,
      updateNetwork
    }
  )
)(BackgroundWorker);