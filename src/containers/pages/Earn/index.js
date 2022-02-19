import React, { useState, useEffect } from 'react';
import AnimatedTab from '../../../components/AnimatedTab';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { LCDClient, Dec } from "@terra-money/terra.js";
import Card from './card';
import { updateBalance } from '../../../saga/actions/workflow';
import { appConfig } from '../../../appConfig';

function Earn(props) {
  const terra = new LCDClient({
    URL: appConfig.lcdURL,
    chainID: appConfig.lcdChainId,
  });
  const [ timePeriod, setTimePeriod ] = useState('year');
  const [expectedInterest, setExpectedInterest] = React.useState(0);
  const [annualExpectedInterest, setAnnaulExpectedInterest] = React.useState(0);
  const [depositedAmount, setDepositedAmount] = React.useState(0);
  const [austVal, setAustVal] = React.useState(0);
  const [marketExchangeRate, setMarketExchangeRate] = React.useState(1);
  const isLogged = props.workflow.isLogged;
  useEffect(() => {
    fetchExpectedInterest();
  }, []);
  useEffect(() => {
    fetchExpectedInterest();
  }, [isLogged]);
  useEffect(() => {
    setExpectedInterest(
      new Dec(annualExpectedInterest)
        .div(timePeriod === 'month' ? 12 : timePeriod === 'week' ? 52 : timePeriod === 'day' ? 365 : 1)
        .toNumber()
        .toFixed(2),
    );
  }, [timePeriod, annualExpectedInterest]);
  const TABS_TIME = [
    {title: 'Year', value: 'year'},
    {title: 'Month', value: 'month'},
    {title: 'Week', value: 'week'},
    {title: 'Day', value: 'day'},
  ];
  function handleTimeChange(val) {
    setTimePeriod(val);
  }
  function handleAfterSubmit() {
    // console.log('handleAfterSubmit called');
    props.updateBalance(props.workflow.mauiAddress);
    fetchExpectedInterest();
  }
  const fetchExpectedInterest = async () => {
    if (!props.workflow.isLogged) {
      return;
    }
    console.log('calling', props.workflow.mauiAddress);
    // aUST balance
    const uaUST = new Promise((resolve, reject) => {
      resolve(
        terra.wasm.contractQuery(
          appConfig.austTokenAddress, //terra1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu
          {
            balance: {
              address: props.workflow.mauiAddress,
            },
          },
        ),
      );
    });

    const exchangeRate = new Promise((resolve, reject) => {
      resolve(
        terra.wasm.contractQuery(
          appConfig.marketAddress, // terra1sepfj7s0aeg5967uxnfk4thzlerrsktkpelm5s
          {
            epoch_state: {
              block_height: undefined,
            },
          },
        ),
      );
    });

    const depositRate = new Promise((resolve, reject) => {
      resolve(
        terra.wasm.contractQuery(
          appConfig.oracleAddress, // terra1tmnqgvg567ypvsvk6rwsga3srp7e3lg6u0elp8
          {
            epoch_state: {
              block_height: undefined,
            },
          },
        ),
      );
    });
    await Promise.all([uaUST, exchangeRate, depositRate])
      .then((values) => {
        const ustBalance = new Dec(values[0].balance).mul(
          values[1].exchange_rate,
        );

        const annualizedInterestRate = new Dec(values[2].deposit_rate)
          .mul(appConfig.BLOCKSPERYEAR)
          .sub(appConfig.mauiFee);

        const interest = ustBalance
          .mul(annualizedInterestRate)
          .div(appConfig.MICRO)
          .toNumber();

        setMarketExchangeRate(values[1].exchange_rate);

        // console.log("aust", values[0].balance, values[1].exchange_rate);

        setAustVal(values[0].balance);
        setAnnaulExpectedInterest(interest);
        setDepositedAmount(
          new Dec(values[0].balance)
            .mul(values[1].exchange_rate)
            .div(appConfig.MICRO)
            .toFixed(2),
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='relative w-full min-h-[1520px] bg-[#DEE2E8] dark:bg-[#32283C]'>
      {/* bg images */}
      <div className='bg-earn-rightbottom bg-center bg-cover absolute left-0 top-0 w-[1024px] h-[768px]'></div>
      <div className='bg-earn-rightbottom bg-center bg-cover absolute right-0 bottom-0 w-[1024px] h-[768px]'></div>
      {/* card */}
      <div className='absolute w-[1020px] top-[250px] left-[calc(50%-510px)] bg-deposit-card dark:bg-deposit-card-dark shadow-stocks-card dark:shadow-stocks-card-dark border border-[#FFFFFF] dark:border-[#000000] rounded-[33px] p-[25px]'>
        <div className='w-full flex justify-between'>
          <div className='w-[60%]'>
            <Card name='frmDeposit' isDeposit={true} handleAfterSubmit={handleAfterSubmit}/>
            <div className='h-[30px]'></div>
            <Card name='frmWithdraw' isDeposit={false} handleAfterSubmit={handleAfterSubmit} austVal={austVal} marketExchangeRate={marketExchangeRate}/>
          </div>
          <div className='w-[35%]'>
            <div className='mt-[20px] w-full bg-earn-right-panel dark:bg-earn-right-panel-dark border border-[#FFFFFF] dark:border-[#FFFFFF34] rounded-[20px] p-[20px]'>
              <div className='flex items-center justify-center'>
                <div className='text-[#707070] dark:text-[#F9D3B4]'>AVAILABLE: USD</div>
                <div className='w-[100px] ml-[20px] rounded-[14px] border border-[#728AB7] p-[2px] pl-[13px] pr-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2]'>{props.workflow.balance}</div>
              </div>
              <div className='flex items-center justify-center mt-[15px]'>
                <div className='text-[#707070] dark:text-[#F9D3B4]'>DEPOSITED: USD</div>
                <div className='w-[100px] ml-[20px] rounded-[14px] border border-[#728AB7] p-[2px] pl-[13px] pr-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2]'>{depositedAmount}</div>
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
                <div className=''>{expectedInterest}</div>
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
      updateBalance
    }
  )
)(Earn);