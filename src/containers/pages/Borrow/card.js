import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Checkbox from "../../../components/Form/Checkbox";
import InputAmount from "../../../components/Form/InputAmount";
import { unmaskCurrency } from "../../../utils/masks";
import { compose } from "redux";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Dec } from "@terra-money/terra.js";
import { apiEarnBorrow, updateBalance } from "../../../saga/actions/workflow";
import Button from "../../../components/Button";
import { appConfig } from "../../../appConfig";
import { ethers } from "ethers";
import alchemistAbi from "../../../alchemix_abi/AlchemistV2.json";
import daiTokenAbi from "../../../alchemix_abi/AlchemicTokenV1.json";

import { toString } from "lodash";
import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";
import { MaxInt256 } from "@ethersproject/constants";

function Cards(props) {
  // get functions to build form with useForm() hook
  const hookForm = useForm();
  const { handleSubmit, setValue } = hookForm;
  const { account, active } = useWeb3React();
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = provider.getSigner();
  // set initial values
  useEffect(() => {
    setValue("amount", 0);
  }, [setValue]);

  const [isAgreed, setIsAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setValue("amount", 0);
    setIsAgreed(false);
  };

  function handleAgreeChange(e) {
    setIsAgreed(e.target.checked);
  }

  function validateAmount(val) {
    const value = unmaskCurrency(val);
    if (!value) {
      return "This input field is required.";
    }
    if (!props.isBorrow) {
      if (Number(value) > new Dec(props.depAmount)) {
        return "Not enough borrow";
      }
    } else {
      if (Number(value) > Number(props.workflow.balance)) {
        return "Insufficient balance";
      }
    }
    return null;
  }

  // handle functions
  const onSubmit = async (data) => {
    console.log("onSubmit");
    if (!active) {
      toast.error("Please connect wallet first.");
      return false;
    }
    setIsLoading(true);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const daiTokenContract = new ethers.Contract(
      appConfig.daiTokenAddr,
      daiTokenAbi.abi,
      signer
    );
    console.log("step1");

    const alchemistContract = new ethers.Contract(
      appConfig.alchemistProxyAddr,
      alchemistAbi.abi,
      signer
    );

    if (props.isBorrow) {
      console.log("step2");

      /*--------------------- mint ---------------------*/
      try {
        const depAmount = new BigNumber(data.amount).multipliedBy(
          appConfig.MICRO
        );
        console.log("dep amount", depAmount.toString());
        await alchemistContract.mint(
          depAmount.toString(), //,
          account
        );
        props.handleAfterSubmit();

        toast.success("Transaction success");
      } catch (err) {
        console.log(err);
        toast.error("Transaction fail");
      }
    } else {
      try {
        const exchangeRate =
          await alchemistContract.getUnderlyingTokensPerShare(
            appConfig.daiYieldTokenAddr
          );

        const borrowYieldAmount = new BigNumber(data.amount.toString())
          .multipliedBy(new BigNumber(appConfig.MICRO))
          .multipliedBy(new BigNumber(appConfig.MICRO))
          .dividedBy(new BigNumber(exchangeRate.toString()));

        const minimumAmount = borrowYieldAmount.multipliedBy(0.97);

        console.log(
          exchangeRate.toString(),
          borrowYieldAmount.toString(),
          minimumAmount.toString()
        );

        console.log(
          appConfig.daiYieldTokenAddr,
          borrowYieldAmount.toNumber().toFixed(0).toString(),
          account,
          minimumAmount.toNumber().toFixed(0).toString()
        );
        await alchemistContract.withdrawUnderlying(
          appConfig.daiYieldTokenAddr,
          borrowYieldAmount.toNumber().toFixed(0).toString(),
          account,
          minimumAmount.toNumber().toFixed(0).toString()
        );
        props.handleAfterSubmit();

        toast.success("Transaction success");
      } catch (err) {
        console.log(err);
        toast.error("Transaction fail");
      }
    }

    setIsLoading(false);
    return false;
  };

  return (
    <form
      name={props.name}
      id={props.name}
      className="w-full bg-earn-card rounded-[40px] p-[30px] pl-[50px] border dark:border-[#FFFFFF30]"
      onSubmit={handleSubmit(onSubmit)}
    >
      {props.isBorrow ? (
        <div className=" font-semibold text-[24px] text-[#273855] dark:text-[#F9D3B4]">
          Enter an amount for 15% APY{" "}
          <span className="text-[#745FF2]">Borrow</span>
        </div>
      ) : (
        <div className=" font-semibold text-[24px] text-[#273855] dark:text-[#F9D3B4]">
          How much would you like to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FF0000FF] to-[#FF000010]">
            Withdraw
          </span>{" "}
          ?
        </div>
      )}

      <InputAmount
        name="amount"
        className="mt-[30px]"
        label={
          <div className="ml-[15px] text-[#273855] dark:text-[#F9D3B4] text-[16px] transition-all duration-1000">
            Enter amount
          </div>
        }
        hookForm={hookForm}
        // validate={validateAmount}
      />
      <Checkbox
        className="ml-4 mb-3 mt-[30px]"
        onChange={handleAgreeChange}
        checked={isAgreed}
      >
        <div className="text-[16px] pt-[6px] text-[#000] dark:text-[#FFF]">
          I Agree with&nbsp;
          <span className="underline text-[#745FF2]">Terms and conditions</span>
        </div>
      </Checkbox>
      <Button
        type="submit"
        isDisabled={!isAgreed}
        isLoading={isLoading}
        className={`${
          props.isBorrow ? "bg-deposit-card-btn" : "bg-earn-withdraw-card-btn"
        } shadow-main-card-btn rounded-[26px] text-[20px] text-[#F0F5F9] tracking-[3px] p-2 w-full mt-[20px]`}
      >
        {props.isBorrow ? "Borrow" : "Withdraw"}
      </Button>
    </form>
  );
}

export default compose(
  connect(
    (state) => ({
      workflow: state.workflow,
    }),
    {
      // apiEarnBorrow,
    }
  )
)(Cards);
