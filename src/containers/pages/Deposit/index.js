import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Checkbox from '../../../components/Form/Checkbox';
import InputAmount from '../../../components/Form/InputAmount';
import SelectCurrency from '../../../components/Form/SelectCurrency';
import SelectWallet from '../../../components/Form/SelectWallet';
import { unmaskCurrency } from '../../../utils/masks';

function Tab({className, isCrypto, onChange}) {
  const className_active = 'bg-[#EDEDF9] dark:bg-[#271B2D] shadow-deposit-tab w-[110px] border-b-[#745FF2] p-2 text-[#745FF2] text-center cursor-pointer';
  const className_inactive = 'bg-deposit-tab-inactive dark:bg-deposit-tab-inactive-dark  w-[110px] border-b-[#745FF2] p-2 text-[#000000] dark:text-[#FFFFFF] text-center cursor-pointer';
  return (
    <div className={`${className}`}>
      <div
        className={`rounded-tl-[12px] ${isCrypto ? className_active: className_inactive}`}
        onClick={onChange.bind(this, true)}
      >
        Crypto
      </div>
      <div
        className={`rounded-tr-[12px] ${!isCrypto ? className_active: className_inactive}`}
        onClick={onChange.bind(this, false)}
      >
        Fiat
      </div>
    </div>
  )
}

function Deposit(props) {
  const validationSchema = Yup.object().shape({
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
  useEffect(() => {
    setValue('amount', 0);
  }, [props.data, setValue]);
  
  // handle functions
	const onSubmit = (data) => {
		console.log('submit', data);
		return false;
	}

  const [ isCrypto, setIsCrypto ] = useState(true);
  const [ isAgreed, setIsAgreed ] = useState(false);
  const [ selectedFiat, setSelectedFiat ] = useState('USD');
  const [ selectedCrypto, setSelectedCrypto ] = useState('BTC');
  const [ selectedFiatWallet, setSelectedFiatWallet ] = useState('USD');
  const [ selectedCryptoWallet, setSelectedCryptoWallet ] = useState('BTC');
  const [ selectedCryptoFiat, setSelectedCryptoFiat ] = useState('USD');
  const history = useHistory();

  function handleTabChange(val) {
    setIsCrypto(val);
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
  const handleAmountChange = (e) => {
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
  function handleAgreeChange(e) {
    setIsAgreed(e.target.checked);
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
          className={'absolute top-[-25px] left-[calc(50%-110px)] flex'}
          isCrypto={isCrypto}
          onChange={handleTabChange}
        />
        {/* form */}
        <form className='flex p-20 justify-between' onSubmit={handleSubmit(onSubmit)}>
          <div className='w-[45%]'>
            {!isCrypto ?            
              <SelectCurrency
                isCrypto={false}
                className="mt-[10px]"
                label={<div className='text-[#273855] dark:text-[#F9D3B4] text-[16px] transition-all duration-1000'>Select currency and payment method</div>}
                selectedSymbol={selectedFiat}
                onChange={handleFiatChange}
              />
            :
              <SelectCurrency
                isCrypto={true}
                className="mt-[10px]"
                label={<div className='text-[#273855] dark:text-[#F9D3B4] text-[16px] transition-all duration-1000'>Select crypto you want to <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2]'>Deposit</span></div>}
                selectedSymbol={selectedCrypto}
                onChange={handleCryptoChange}
              />
            }
            <div className='h-[30px]'></div>
            {!isCrypto ?            
              <SelectWallet
                isCrypto={false}
                className="mt-[10px]"
                label={<div className='text-[#273855] dark:text-[#F9D3B4] text-[16px] transition-all duration-1000'>Bank transfer <span className='text-[#888888]'>(reccomended)</span></div>}
                selectedSymbol={selectedFiatWallet}
                onChange={handleFiatWalletChange}
              />
            :
              <SelectWallet
                isCrypto={true}
                className="mt-[10px]"
                label={<div className='text-[#273855] dark:text-[#F9D3B4] text-[16px] transition-all duration-1000'>Transfer from</div>}
                selectedSymbol={selectedCryptoWallet}
                onChange={handleCryptoWalletChange}
              />
            }
            <InputAmount
              name="amount"
              isSelectable={isCrypto}
              className="mt-[40px]"
              label={<div className='ml-[15px] text-[#273855] dark:text-[#F9D3B4] text-[16px] transition-all duration-1000'>Enter amount</div>}
              selectedSymbol={isCrypto ? selectedCryptoFiat : selectedFiat}
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
            <button
              type="submit"
              disabled={!isAgreed}
              className='disabled:bg-[#888888] disabled:bg-none disabled:cursor-no-drop bg-deposit-card-btn shadow-main-card-btn rounded-[26px] text-[20px] text-[#F0F5F9] tracking-[3px] p-2 w-full'
            >
              Deposit
            </button>
          </div>
          <div className='w-[45%]'>
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
        </form>
      </div>
    </div>
  )
}

export default Deposit;