import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { compose } from "redux";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { useWallet } from "@terra-money/wallet-provider";

import InputAmount from "../../../../components/Form/InputAmount";
import SelectCurrency from "../../../../components/Form/SelectCurrency";
import SelectWallet from "../../../../components/Form/SelectWallet";
import { unmaskCurrency } from "../../../../utils/masks";
import Button from "../../../../components/Button";
import RightBar from "./rightbar";
import { depositCrypto } from "../../../../utils/wallet";
import AgreeWithCheckbox from "../../../../components/Form/AgreeWithCheckbox";
import {
  apiHistoryRecord,
  updateBalance,
} from "../../../../saga/actions/workflow";
import {
  CURRENCY_USD,
  HISTORY_DEPOSIT_CRYPTO,
} from "../../../../utils/appConstants";

function TabCrypto(props) {
  const { sign } = useWallet();
  // get functions to build form with useForm() hook
  const hookForm = useForm();
  const { handleSubmit, setValue } = hookForm;
  // set initial values
  useEffect(() => {
    setValue("amount", 0);
  }, [props.data, setValue]);

  const token = localStorage.getItem("token");

  const [isAgreed, setIsAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState("BTC");
  const [selectedCryptoWallet, setSelectedCryptoWallet] = useState(0);
  // const [ selectedCryptoFiat, setSelectedCryptoFiat ] = useState('USD');
  const [secondPanelShow, setSecondPanelShow] = useState(true);
  const [reservation, setReservation] = useState("");
  const [givenName, setGivenName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [number, setNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street1, setStreet1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [amount, setAmount] = useState("");

  axios.defaults.baseURL = "http://192.168.116.26:3000";
  axios.defaults.headers.common["Authorization"] = token;

  useEffect(() => {
    if (reservation.length > 0) setSecondPanelShow(true);
  }, [reservation]);

  const deposit = async (amount, from, to, network) => {
    setIsLoading(true);
    depositCrypto(
      amount,
      from,
      to,
      network,
      sign,
      () => {
        props.apiHistoryRecord({
          url: "/recordHistory",
          method: "POST",
          data: {
            type: HISTORY_DEPOSIT_CRYPTO,
            terraAddress: from,
            mauiAddress: to,
            amount: amount,
            currency: CURRENCY_USD,
            network: `${props.workflow.network.name}:${props.workflow.network.chainID}`,
            note: "DONE",
          },
          success: (res) => {
            console.log("recordSuccess", res);
          },
          fail: (error) => {
            console.log("recordError", error);
          },
        });
        props.updateBalance(to);
        setIsLoading(false);
        resetForm();
        toast.success("Transaction success");
      },
      (err) => {
        console.log("deposit error", err);
        setIsLoading(false);
        toast.error("Transaction fails");
      }
    );
  };

  function handleCryptoChange(symbol) {
    setSelectedCrypto(symbol);
  }
  function handleCryptoWalletChange(symbol) {
    setSelectedCryptoWallet(symbol);
  }
  // function handleCryptoFiatChange(symbol) {
  //   setSelectedCryptoFiat(symbol);
  // }
  function handleAgreeChange(e) {
    setIsAgreed(e.target.checked);
  }
  function validateAmount(val) {
    const value = unmaskCurrency(val);
    if (!value) {
      return "This input field is required.";
    } else if (parseInt(value) <= 5 || parseInt(value) > 99999) {
      return "The amount must be greater than $5 and be less than $100000";
    }
    return null;
  }
  // handle functions
  const resetForm = () => {
    setValue("amount", 0);
    setIsAgreed(false);
  };
  const onSubmit = (data) => {
    if (!props.workflow.isLogged) {
      toast.error("Please login first.");
      return false;
    }
    if (unmaskCurrency(data.amount) >= 5)
      // const from = props.workflow.terraAddress;
      // const to = props.workflow.mauiAddress;
      // const network = props.workflow.network;
      // deposit(unmaskCurrency(data.amount), from, to, network);
      // return false;

      axios({
        method: "POST",
        headers: { Authorization: `bearer ${token}` },
        data: {
          amount: unmaskCurrency(data.amount),
          paymentMethod: selectedCryptoWallet,
        },
        url: "http://192.168.116.26:3000/v1/reserve",
      })
        .then((result) => {
          const url = result.data?.url || "";
          const reserve = result.data.reservation;
          setReservation(reserve);
          //   if (url) {
          //     window.open(
          //       url,
          //       "_blank",
          //       "toolbar=yes,scrollbars=yes,resizable=yes,right=0,width=450,height=700"
          //     );
          //   }
        })
        .catch((err) => {
          console.log("error", err);
        });
  };

  const onInfoSubmit = () => {
    if (!props.workflow.isLogged) {
      toast.error("Please login first.");
      return false;
    }
    axios({
      method: "POST",
      headers: { Authorization: `bearer ${token}` },
      data: {
        reservationId: "X337TFRQALWZYJREXARZ",
        number: 88888888888,
        year: 2023,
        month: 10,
        cvv: 555,
        givenName: "JIm",
        familyName: "Smith",
        email: "wando0226@gmail.com",
        phone: 12155366465,
        street1: "12 Test Ave",
        city: "Los Angeles",
        state: "CA",
        postalCode: 94123,
        country: "US",
        amount: 10,
      },
      url: "http://192.168.116.26:3000/v1/order",
    })
      .then((result) => {
        console.log("sss", result);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return !secondPanelShow ? (
    <form
      className="flex p-10 md:p-20 flex-col-reverse md:flex-row justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full md:w-[45%]">
        <SelectCurrency
          isCrypto={true}
          className="mt-[40px] md:mt-[10px]"
          label={
            <div className="text-[#273855] dark:text-[#F9D3B4] text-[13px] md:text-[16px] transition-all duration-1000">
              Select crypto you want to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#745FF2] to-[#00DDA2]">
                Deposit
              </span>
            </div>
          }
          selectedSymbol={selectedCrypto}
          onChange={handleCryptoChange}
        />
        <div className="h-[30px]"></div>
        <SelectWallet
          isCrypto={true}
          className="mt-[10px]"
          label={
            <div className="text-[#273855] dark:text-[#F9D3B4] text-[13px] md:text-[16px] transition-all duration-1000">
              Payment Method
            </div>
          }
          selectedSymbol={selectedCryptoWallet}
          onChange={handleCryptoWalletChange}
        />
        <InputAmount
          name="amount"
          className="mt-[40px]"
          label={
            <div className="ml-[15px] text-[#273855] dark:text-[#F9D3B4] text-[13px] md:text-[16px] transition-all duration-1000">
              Enter amount
            </div>
          }
          hookForm={hookForm}
          validate={validateAmount}
        />
        <AgreeWithCheckbox
          className="ml-2 md:ml-4 mb-3 mt-[30px]"
          checked={isAgreed}
          onChange={handleAgreeChange}
        />
        <Button
          isDisabled={!isAgreed}
          isLoading={isLoading}
          className="mt-[10px] bg-deposit-card-btn shadow-main-card-btn rounded-[26px] text-[14px] md:text-[20px] text-[#F0F5F9] tracking-[3px] p-2 w-full"
        >
          Submit
        </Button>
      </div>
      <div className="w-full mt-[10px] md:mt-0 md:w-[45%]">
        <RightBar isCrypto={true} />
      </div>
    </form>
  ) : (
    <form
      className="flex p-10 md:p-20 flex-col-reverse md:flex-row justify-between"
      onSubmit={handleSubmit(onInfoSubmit)}
    >
      <div className="w-full md:w-[45%]">
        <div className="md:mt-[20px]">Card Info</div>
        <div className="md:mt-[10px] flex justify-between">
          <div className="md:w-[45%]">
            <div>First Name*</div>
            <input
              type="text"
              className="md:w-[100%]"
              value={givenName}
              onChange={(e) => setGivenName(e.target.value)}
            />
          </div>
          <div className="md:w-[45%]">
            <div>Last Name*</div>
            <input
              type="text"
              className="md:w-[100%]"
              value={familyName}
              onChange={(e) => setFamilyName(e.target.value)}
            />
          </div>
        </div>
        <div className="md:mt-[10px]">Card Number*</div>
        <input
          type="text"
          className="md:w-[100%]"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className="md:mt-[10px] flex justify-between">
          <div className="md:w-[45%]">
            <div>Expiration*</div>
            <input type="date" className="md:w-[100%]" />
          </div>
          <div className="md:w-[45%]">
            <div>CVV*</div>
            <input
              type="password"
              className="md:w-[100%]"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>
        <div className="md:mt-[20px]">Billing Address</div>
        <div className="md:mt-[10px] flex justify-between">
          <div className="md:w-[45%]">
            <div>Country*</div>
            <input
              type="text"
              className="md:w-[100%]"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="md:w-[45%]">
            <div>State*</div>
            <input
              type="text"
              className="md:w-[100%]"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
        </div>
        <div className="md:mt-[10px]">Address*</div>
        <input
          type="text"
          className="md:w-[100%]"
          value={street1}
          onChange={(e) => setStreet1(e.target.value)}
        />
        <div className="md:mt-[10px] flex justify-between">
          <div className="md:w-[45%]">
            <div>Postal / ZIP code*</div>
            <input
              type="text"
              className="md:w-[100%]"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div className="md:w-[45%]">
            <div>City*</div>
            <input
              type="text"
              className="md:w-[100%]"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className="md:mt-[20px]">Contact</div>
        <div className="md:mt-[10px]">Email*</div>
        <input
          type="text"
          className="md:w-[100%]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="md:mt-[10px]">Phone Number*</div>
        <input
          type="text"
          className="md:w-[100%]"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button
          type="submit"
          className="md:mt-[20px] mx-auto w-[220px] h-[60px] flex justify-center items-center bg-[#1199fa] text-[#FFF] text-[24px] cursor-pointer"
        >
          Deposit
        </Button>
      </div>
      <div className="w-full mt-[10px] md:mt-0 md:w-[45%]">
        <RightBar isCrypto={true} />
      </div>
    </form>
  );
}

export default compose(
  connect(
    (state) => ({
      workflow: state.workflow,
    }),
    {
      apiHistoryRecord,
      updateBalance,
    }
  )
)(TabCrypto);
