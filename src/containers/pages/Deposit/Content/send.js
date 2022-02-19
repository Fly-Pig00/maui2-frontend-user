import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { toast } from "react-toastify";
import Checkbox from '../../../../components/Form/Checkbox';
import Input from '../../../../components/Form/Input';
import InputAmount from '../../../../components/Form/InputAmount';
import { unmaskCurrency } from '../../../../utils/masks';
import Button from '../../../../components/Button';
import { updateBalance, apiDepositSend } from '../../../../saga/actions/workflow';

function TabSend (props) {
  // get functions to build form with useForm() hook
  const hookForm = useForm();
	const { handleSubmit, setValue } = hookForm;
  // set initial values
  const terraAddress = props.workflow.terraAddress;
  useEffect(() => {
    setValue('amount', 0);
    setValue('recipient', terraAddress);
  }, [props.data, terraAddress, setValue]);
  const [ isAgreed, setIsAgreed ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ selectedFiat, setSelectedFiat ] = useState('USD');

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
        setIsLoading(false);
        resetForm();
        props.updateBalance(to);
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

  function handleCryptoFiatChange(symbol) {
    setSelectedFiat(symbol);
  }
  function handleAgreeChange(e) {
    setIsAgreed(e.target.checked);
  }
  function validateAmount(val) {
    const value = unmaskCurrency(val);
    if (!value) {
      return 'This input field is required.';
    } else if (parseInt(value) <= 0 || parseInt(value) > 99999){
      return 'The amount must be between $0.1 and $99,999';
    }
    return null;
  }
  
  // handle functions
  const resetForm = () => {
    setValue('amount', 0);
    setIsAgreed(false);
  }
	const onSubmit = (data) => {
    if (!props.workflow.isLogged) {
      toast.error("Please login first.");
      return false;
    }
    const to = props.workflow.mauiAddress;
    depositSend(unmaskCurrency(data.amount), data.recipient, data.memo, to);
		return false;
	}
  return (
    <form className='flex p-20 justify-between' onSubmit={handleSubmit(onSubmit)}>
      <div className='w-[60%] m-auto'>
        <Input
          name="recipient"
          className="mt-[40px]"
          label={<div className='ml-[15px] text-[#273855] dark:text-[#F9D3B4] text-[16px] transition-all duration-1000'>Recipient</div>}
          hookForm={hookForm}
          registerOptions={{required: 'This field is required.'}}
        />
        <InputAmount
          name="amount"
          className="mt-[40px]"
          label={<div className='ml-[15px] text-[#273855] dark:text-[#F9D3B4] text-[16px] transition-all duration-1000'>How much would you like to <span className='font-bold text-[#FF1C1C]'>Send</span>?</div>}
          hookForm={hookForm}
          validate={validateAmount}
          selectedCurrency={selectedFiat}
          isCurrencySelectable={true}
          onCurrencyChange={handleCryptoFiatChange}
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
        <Checkbox
          className="ml-4 mb-3 mt-[30px]"
          checked={isAgreed}
          onChange={handleAgreeChange}
        >
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
)(TabSend);
