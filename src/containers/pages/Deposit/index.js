import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { toast } from "react-toastify";
import { useWallet } from "@terra-money/wallet-provider";
import transakSDK from "@transak/transak-sdk";
import axios from 'axios';
import Checkbox from '../../../components/Form/Checkbox';
import Input from '../../../components/Form/Input';
import InputAmount from '../../../components/Form/InputAmount';
import SelectCurrency from '../../../components/Form/SelectCurrency';
import SelectWallet from '../../../components/Form/SelectWallet';
import { unmaskCurrency } from '../../../utils/masks';
import Button from '../../../components/Button';
import { appConfig } from '../../../appConfig';

import { LCDClient, Dec, MsgSend } from "@terra-money/terra.js";
import { updateBalance, apiDepositSend } from '../../../saga/actions/workflow';
import Tab from './tab';
import RightBar from './rightbar';
// import { appConfig } from '../../../appConfig';
// import { fetchBalance } from '../../../utils/wallet';

let preventSeveralCalling = false;

function Deposit(props) {
  const { sign } = useWallet();
  const validationSchema = Yup.object().shape({
    recipient: Yup.string()
      .required("This input field is required."),
		amount: Yup.number()
      .min(0.1, "The amount must be between $0.1 and $99,999")
      .max(99999, "The amount must be between $0.1 and $99,999")
      .required("This input field is required.")
	});
	const formOptions = { resolver: yupResolver(validationSchema) };

	// get functions to build form with useForm() hook
  const hookForm = useForm(formOptions);
	const { handleSubmit, setValue, setError, clearErrors } = hookForm;
  // set initial values
  const terraAddress = props.workflow.terraAddress;
  useEffect(() => {
    setValue('amount', 0);
    setValue('recipient', terraAddress);
  }, [props.data, terraAddress, setValue]);

  const depositCrypto = async (amount, from, to) => {
    setIsLoading(true);
    try {
      delete axios.defaults.headers.common.Authorization;
      const terra = new LCDClient({
        URL: appConfig.lcdURL,
        chainID: appConfig.lcdChainId,
      });
      const pool_contract = new MsgSend(from, to, {
        uusd: new Dec(amount).mul(appConfig.MICRO).toNumber(),
      });

      // Sign transaction
      const result = await sign({
        msgs: [pool_contract],
        feeDenoms: ["uusd"],
        gasPrices: "0.15uusd",
      });

      const tx = result.result;

      await terra.tx.broadcast(tx);
      props.updateBalance(to);
      setIsLoading(false);
      toast.success("Transaction success");
      // dispatch(getWalletInfo(to));
    } catch (error) {
      setIsLoading(false);
      toast.error("Transaction fails");
    }
  };

  const depositFiat = (amount, to) => {
    setIsLoading(true);
    preventSeveralCalling = false;
    let transak = new transakSDK({
      apiKey: appConfig.transakAPIKey, // Your API Key
      environment: "STAGING", // STAGING/PRODUCTION
      defaultCryptoCurrency: "UST",
      network: "terra",
      walletAddress: to, // Your customer's wallet address
      themeColor: "#536DFE", // App theme color
      fiatCurrency: "EUR", // INR/GBP // ----------vdg
      fiatAmount: amount,
      // email: "", // Your customer's email address
      redirectURL: "",
      hostURL: window.location.origin,
      widgetHeight: "550px",
      widgetWidth: "450px",
    });

    transak.init();
    transak.on(transak.EVENTS.TRANSAK_WIDGET_CLOSE, (offerData) => {
      if (preventSeveralCalling)
        return;
      preventSeveralCalling = true;
      setIsLoading(false);
      props.updateBalance(to);
      transak.close();
    });
  };

  const depositSend = async (amount, recipient, memo, to) => {
    setIsLoading(true);
    props.apiDepositSend({
      url: '/send',
      method: 'POST',
      data: {
        amount: amount,
        recipient: recipient,
        memo: memo,
      },
      success: (response) => {
        props.updateBalance(to);
        setIsLoading(false);
        toast.success("Transaction success");
      },
      fail: (error) => {
        props.updateBalance(to);
        console.log('error', error);
        setIsLoading(false);
        toast.error("Transaction fail");
      }
    })
  };
  
  // handle functions
	const onSubmit = (data) => {
    if (!props.workflow.isLogged) {
      toast.error("Please login first.");
      return false;
    }
    const from = props.workflow.terraAddress;
    const to = props.workflow.mauiAddress;
    switch(tabIndex) {
      case 0:
        depositCrypto(data.amount, from, to);
        break;
      case 1:
        depositFiat(data.amount, to);
        break;
      case 2:
        depositSend(data.amount, data.recipient, data.memo, to);
        break;
      default:
        break;
    }
		return false;
	}

  const [ tabIndex, setTabIndex ] = useState(0);
  const [ isAgreed, setIsAgreed ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ selectedFiat, setSelectedFiat ] = useState('USD');
  const [ selectedCrypto, setSelectedCrypto ] = useState('BTC');
  const [ selectedFiatWallet, setSelectedFiatWallet ] = useState('USD');
  const [ selectedCryptoWallet, setSelectedCryptoWallet ] = useState('BTC');
  const [ selectedCryptoFiat, setSelectedCryptoFiat ] = useState('USD');
  const history = useHistory();

  function handleTabChange(val) {
    setTabIndex(val);
  }
  function handleGoBack(){
    history.push('/dashboard');
  }
  function handleFiatChange(symbol) {
    setSelectedFiat(symbol);
  }
  function handleCryptoChange(symbol) {
    setSelectedCrypto(symbol);
  }
  function handleFiatWalletChange(symbol) {
    setSelectedFiatWallet(symbol);
  }
  function handleCryptoWalletChange(symbol) {
    setSelectedCryptoWallet(symbol);
  }
  function handleCryptoFiatChange(symbol) {
    setSelectedCryptoFiat(symbol);
  }
  function handleAgreeChange(e) {
    setIsAgreed(e.target.checked);
  }
  function handleAmountChange(e) {
    const value = unmaskCurrency(e.target.value);
    if (!value) {
      setError('amount', {message: 'This input field is required.'});
    } else if (parseInt(value) <= 0 || parseInt(value) > 99999){
      setError('amount', {message: 'The amount must be between $0.1 and $99,999'});
    } else {
      clearErrors('amount');
    }
    setValue('amount', !value ? 0 : parseInt(value));
  }

  return (
    <div className='relative w-full min-h-[1040px] bg-[#DEE2E8] dark:bg-[#32283C]'>
      {/* bg images */}
      <div className='bg-deposit-leftbottom bg-center bg-cover absolute left-0 bottom-0 w-[530px] h-[436px]'></div>
      <div className='bg-main-center dark:bg-main-center-dark pointer-events-none bg-center bg-cover absolute right-0 top-[200px] w-[550px] h-[450px] z-10'></div>
      {/* card */}
      <div className='absolute w-[1020px] top-[250px] left-[calc(50%-510px)] bg-deposit-card dark:bg-deposit-card-dark shadow-stocks-card dark:shadow-stocks-card-dark border border-[#FFFFFF] rounded-[33px]'>
        <span
          onClick={handleGoBack}
          className='absolute top-[25px] left-[30px] text-[30px] cursor-pointer text-[#000000] dark:text-[#FFFFFF]'
        >&lt;</span>
        <Tab
          className={'absolute top-[-25px] left-[calc(50%-110px)] flex items-center'}
          tabIndex={tabIndex}
          onChange={handleTabChange}
        />
        {/* form */}
        {tabIndex === 0 && // Crypto
          <form className='flex p-20 justify-between' onSubmit={handleSubmit(onSubmit)}>
            <div className='w-[45%]'>
              <SelectCurrency
                isCrypto={true}
                className="mt-[10px]"
                label={<div className='text-[#273855] dark:text-[#F9D3B4] text-[16px] transition-all duration-1000'>Select crypto you want to <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2]'>Deposit</span></div>}
                selectedSymbol={selectedCrypto}
                onChange={handleCryptoChange}
              />
              <div className='h-[30px]'></div>
              <SelectWallet
                isCrypto={true}
                className="mt-[10px]"
                label={<div className='text-[#273855] dark:text-[#F9D3B4] text-[16px] transition-all duration-1000'>Transfer from</div>}
                selectedSymbol={selectedCryptoWallet}
                onChange={handleCryptoWalletChange}
              />
              <InputAmount
                name="amount"
                isSelectable={true}
                className="mt-[40px]"
                label={<div className='ml-[15px] text-[#273855] dark:text-[#F9D3B4] text-[16px] transition-all duration-1000'>Enter amount</div>}
                selectedSymbol={selectedCryptoFiat}
                hookForm={hookForm}
                onChange={handleCryptoFiatChange}
                handleAmountChange={handleAmountChange}
              />
              <Checkbox className="ml-4 mb-3 mt-[30px]" onChange={handleAgreeChange}>
                <div className='text-[16px] pt-[6px] text-[#000] dark:text-[#FFF]'>I Agree with&nbsp;<span className='underline text-[#745FF2]'>Terms and conditions</span></div>
              </Checkbox>
              <Button
                type="submit"
                isDisabled={!isAgreed}
                isLoading={isLoading}
                className='bg-deposit-card-btn shadow-main-card-btn rounded-[26px] text-[20px] text-[#F0F5F9] tracking-[3px] p-2 w-full'
              >
                Deposit
              </Button>
            </div>
            <div className='w-[45%]'>
              <RightBar
                isCrypto={true}
              />
            </div>
          </form>          
        }
        {tabIndex === 1 && // Fiat
          <form className='flex p-20 justify-between' onSubmit={handleSubmit(onSubmit)}>
            <div className='w-[45%]'>
              <SelectCurrency
                isCrypto={false}
                className="mt-[10px]"
                label={<div className='text-[#273855] dark:text-[#F9D3B4] text-[16px] transition-all duration-1000'>Select currency and payment method</div>}
                selectedSymbol={selectedFiat}
                onChange={handleFiatChange}
              />
              <div className='h-[30px]'></div>
              <SelectWallet
                isCrypto={false}
                className="mt-[10px]"
                label={<div className='text-[#273855] dark:text-[#F9D3B4] text-[16px] transition-all duration-1000'>Bank transfer <span className='text-[#888888]'>(reccomended)</span></div>}
                selectedSymbol={selectedFiatWallet}
                onChange={handleFiatWalletChange}
              />
              <InputAmount
                name="amount"
                isSelectable={false}
                className="mt-[40px]"
                label={<div className='ml-[15px] text-[#273855] dark:text-[#F9D3B4] text-[16px] transition-all duration-1000'>Enter amount</div>}
                selectedSymbol={selectedFiat}
                hookForm={hookForm}
                onChange={handleCryptoFiatChange}
                handleAmountChange={handleAmountChange}
              />
              <div className='ml-5 mt-[30px]'>
                <div className='flex text-[14px] items-center'>
                  <div className='text-[#6B8CFF]'>Fee</div>
                  <div className='ml-[10px] text-black dark:text-white text-[16px] font-semibold'>4</div>
                </div>
                <div className='flex text-[14px] items-center'>
                  <div className='text-[#6B8CFF]'>You will get</div>
                  <div className='ml-[10px] text-black dark:text-white text-[16px] font-semibold'>196</div>
                </div>
              </div>
              <Checkbox className="ml-4 mb-3 mt-[30px]" onChange={handleAgreeChange}>
                <div className='text-[16px] pt-[6px] text-[#000] dark:text-[#FFF]'>I Agree with&nbsp;<span className='underline text-[#745FF2]'>Terms and conditions</span></div>
              </Checkbox>
              <Button
                type="submit"
                isDisabled={!isAgreed}
                isLoading={isLoading}
                className='bg-deposit-card-btn shadow-main-card-btn rounded-[26px] text-[20px] text-[#F0F5F9] tracking-[3px] p-2 w-full'
              >
                Deposit
              </Button>
            </div>
            <div className='w-[45%]'>
              <RightBar isCrypto={false}/>
            </div>
          </form>
        }
        {tabIndex === 2 && // Send
          <form className='flex p-20 justify-between' onSubmit={handleSubmit(onSubmit)}>
            <div className='w-[60%] m-auto'>
              <Input
                name="recipient"
                className="mt-[40px]"
                label={<div className='ml-[15px] text-[#273855] dark:text-[#F9D3B4] text-[16px] transition-all duration-1000'>Recipient</div>}
                hookForm={hookForm}
              />
              <InputAmount
                name="amount"
                isSelectable={false}
                className="mt-[40px]"
                label={<div className='ml-[15px] text-[#273855] dark:text-[#F9D3B4] text-[16px] transition-all duration-1000'>How much would you like to <span className='font-bold text-[#FF1C1C]'>Send</span>?</div>}
                selectedSymbol={selectedFiat}
                hookForm={hookForm}
                onChange={handleCryptoFiatChange}
                handleAmountChange={handleAmountChange}
              />
              <Input
                name="memo"
                className="mt-[40px]"
                label={<div className='ml-[15px] text-[#273855] dark:text-[#F9D3B4] text-[16px] transition-all duration-1000'>Memo <span className='text-[#888]'>(optional)</span></div>}
                hookForm={hookForm}
              />
              <div className='ml-5 mt-[30px]'>
                <div className='flex text-[14px] items-center'>
                  <div className='text-[#6B8CFF]'>Fee</div>
                  <div className='ml-[10px] text-black dark:text-white text-[16px] font-semibold'>4</div>
                </div>
                <div className='flex text-[14px] items-center'>
                  <div className='text-[#6B8CFF]'>Balance</div>
                  <div className='ml-[10px] text-black dark:text-white text-[16px] font-semibold'>3,545.635.48</div>
                </div>
                <div className='flex text-[14px] items-center'>
                  <div className='text-[#6B8CFF]'>Balance after Tax</div>
                  <div className='ml-[10px] text-black dark:text-white text-[16px] font-semibold'>3,545.635.48</div>
                </div>
              </div>
              <Checkbox className="ml-4 mb-3 mt-[30px]" onChange={handleAgreeChange}>
                <div className='text-[16px] pt-[6px] text-[#000] dark:text-[#FFF]'>I Agree with&nbsp;<span className='underline text-[#745FF2]'>Terms and conditions</span></div>
              </Checkbox>
              <Button
                type="submit"
                isDisabled={!isAgreed}
                isLoading={isLoading}
                className='bg-earn-withdraw-card-btn shadow-main-card-btn rounded-[26px] text-[20px] text-[#F0F5F9] tracking-[3px] p-2 w-full'
              >
                Send
              </Button>              
            </div>
          </form>
        }
      </div>
    </div>
  )
}

export default compose(
  connect(
    state => ({
      workflow: state.workflow
    }),
    {
      apiDepositSend,
      updateBalance
    }
  )
)(Deposit);