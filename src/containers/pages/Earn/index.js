import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Checkbox from '../../../components/Form/Checkbox';
import InputAmount from '../../../components/Form/InputAmount';
import { unmaskCurrency } from '../../../utils/masks';
import AnimatedTab from '../../../components/AnimatedTab';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { apiEarnDeposit } from '../../../saga/actions/workflow';

function Card(props) {
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
  }, [setValue]);
  // handle functions
	const onSubmit = (data) => {
    props.apiEarnDeposit({
      url: '/deposit',
      method: 'POST',
      data: {
        amount: data.amount,
        in_out: 'in'
      },
      success: (response) => {
        console.log(response);
      },
      fail: (error) => {
        console.log('error', error);
      }
    })
		return false;
	}
  
  const [ isAgreed, setIsAgreed ] = useState(props.isDeposit ? false : true);
  const [ selectedCryptoFiat, setSelectedCryptoFiat ] = useState('USD');
  
  function handleAgreeChange(e) {
    setIsAgreed(e.target.checked);
  }
  function handleCryptoFiatChange(symbol) {
    setSelectedCryptoFiat(symbol);
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
    <form name={props.name} id={props.name} className='w-full bg-earn-card rounded-[40px] p-[30px] pl-[50px] border dark:border-[#FFFFFF30]' onSubmit={handleSubmit(onSubmit)}>
      { props.isDeposit ?
        <div className=' font-semibold text-[24px] text-[#273855] dark:text-[#F9D3B4]'>Enter an amount for 15% APY <span className='text-[#745FF2]'>Deposit</span></div>
      :
        <div className=' font-semibold text-[24px] text-[#273855] dark:text-[#F9D3B4]'>How much would you like to <span className='text-transparent bg-clip-text bg-gradient-to-b from-[#FF0000FF] to-[#FF000010]'>Withdraw</span> ?</div>
      }
      
      <InputAmount
        name="amount"
        isSelectable={false}
        className="mt-[30px]"
        label={<div className='ml-[15px] text-[#273855] dark:text-[#F9D3B4] text-[16px] transition-all duration-1000'>Enter amount</div>}
        selectedSymbol={selectedCryptoFiat}
        hookForm={hookForm}
        onChange={handleCryptoFiatChange}
        handleAmountChange={handleAmountChange}
      />
      <Checkbox className="ml-4 mb-3 mt-[30px]" onChange={handleAgreeChange}>
        <div className='text-[16px] pt-[6px] text-[#000] dark:text-[#FFF]'>I Agree with&nbsp;<span className='underline text-[#745FF2]'>Terms and conditions</span></div>
      </Checkbox>
      <button
        type="submit"
        disabled={!isAgreed}
        className={`disabled:bg-[#888888] disabled:bg-none disabled:cursor-no-drop ${props.isDeposit ? 'bg-deposit-card-btn': 'bg-earn-withdraw-card-btn'} shadow-main-card-btn rounded-[26px] text-[20px] text-[#F0F5F9] tracking-[3px] p-2 w-full mt-[20px]`}
      >
        {props.isDeposit ? 'Deposit' : 'Withdraw'}
      </button>
    </form>
  )
}

function Earn(props) {
  const [ timePeriod, setTimePeriod ] = useState('year');
  const TABS_TIME = [
    {title: 'Year', value: 'year'},
    {title: 'Month', value: 'month'},
    {title: 'Week', value: 'week'},
    {title: 'Day', value: 'day'},
  ];
  function handleTimeChange(val) {
    setTimePeriod(val);
  }
  return (
    <div className='relative w-full min-h-[1520px] bg-[#DEE2E8] dark:bg-[#32283C]'>
      {/* bg images */}
      <div className='bg-earn-rightbottom bg-center bg-cover absolute left-0 top-0 w-[1024px] h-[768px]'></div>
      <div className='bg-earn-rightbottom bg-center bg-cover absolute right-0 bottom-0 w-[1024px] h-[768px]'></div>
      {/* card */}
      <div className='absolute w-[1020px] top-[250px] left-[calc(50%-510px)] bg-deposit-card dark:bg-deposit-card-dark shadow-stocks-card dark:shadow-stocks-card-dark border border-[#FFFFFF] dark:border-[#000000] rounded-[33px] p-[25px]'>
        <div className='w-full flex justify-between'>
          <div className='w-[60%]'>
            <Card name='frmDeposit' isDeposit={true} apiEarnDeposit={props.apiEarnDeposit}/>
            <div className='h-[30px]'></div>
            <Card name='frmWithdraw' isDeposit={false}/>
          </div>
          <div className='w-[35%]'>
            <div className='mt-[20px] w-full bg-earn-right-panel dark:bg-earn-right-panel-dark border border-[#FFFFFF] dark:border-[#FFFFFF34] rounded-[20px] p-[20px]'>
              <div className='flex items-center justify-center'>
                <div className='text-[#707070] dark:text-[#F9D3B4]'>AVAILABLE: USD</div>
                <div className='ml-[20px] rounded-[14px] border border-[#728AB7] p-[2px] pl-[13px] pr-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2]'>18,000.00</div>
              </div>
              <div className='flex items-center justify-center mt-[15px]'>
                <div className='text-[#707070] dark:text-[#F9D3B4]'>DEPOSITED: USD</div>
                <div className='ml-[20px] rounded-[14px] border border-[#728AB7] p-[2px] pl-[13px] pr-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2]'>18,000.00</div>
              </div>
            </div>
            <div className='mt-[130px] text-center bg-deposit-card dark:bg-deposit-card-dark shadow-earn-panel dark:shadow-earn-panel-dark border border-[#FFFFFF30] dark:border-[#745FF220] rounded-[26px] p-[25px]'>
              <span className='font-semibold text-[24px] leading-[36px] text-transparent bg-clip-text bg-gradient-to-r from-[#39C6D9] via-[#B84ADE] to-[#DE1F4D]'>
                Earn with 15% APY
              </span>
              <div className='mt-[20px] flex items-center justify-evenly'>
                <div className={`bg-cover bg-center rounded-[22px] bg-earn-banner w-[175px] h-[130px]`}/>
                <div className='w-[38%] text-[14px] leading-[25px] text-[#000000] dark:text-[#EDEDF9] transition-colors duration-1000'>
                  <div><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2]'>Earn</span> on your deposits. Withdraw anytime.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-between mt-[30px]'>
          <div className='w-[60%] flex flex-row-reverse'>
            <div className='w-[80%]'>
              <div className='ml-[15px] text-[#273855] font-semibold dark:text-[#745FF2] text-[24px] transition-all duration-1000'>Your Expected Earnings</div>
              <div className='mt-[10px] flex items-center justify-between rounded-[12px] shadow-earn-expected-card dark:shadow-earn-expected-card-dark bg-[#ECECF9] dark:bg-[#271B2D] text-[20px] p-[15px] pl-[20px] pr-[20px]  font-medium text-[#000000] dark:text-[#FFFFFF]'>
                <div className=''>3244</div>
                <div className=''>USD</div>
              </div>
            </div>
          </div>
          <div className='w-[35%]'>
            <div className='mb-[10px] ml-[35px] text-[#273855] dark:text-[#FFFFFF80] text-[16px]'>Choose time period:</div>
            <AnimatedTab tabs={TABS_TIME} onChange={handleTimeChange} selected={timePeriod} className="p-[2px]"/>
          </div>
        </div>
        <div className='mt-[50px] w-[80%] ml-[10%]'>
          <div className='text-[#5A5A5A] dark:text-[#F9D3B4] text-[14px]'>Expected <strong>APY</strong> based on your deposit</div>
          <div className=' flex flex-col justify-center items-center'>
            <div className='bg-earn-chart bg-cover bg-center w-[690px] h-[252px]'></div>
          </div>
        </div>
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
      apiEarnDeposit,
    }
  )
)(Earn);