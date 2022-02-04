import { useState } from "react";
import _ from "lodash";
import MaskedInput from 'react-text-mask';
import { Controller } from "react-hook-form";
import { FIAT, CRYPTO } from "../SelectCurrency";
import { maskCurrency } from "../../../utils/masks";

const getSelected = (isCrypto, selectedSymbol) => {
  let found = isCrypto ? FIAT[0]: CRYPTO[0];
  if (!selectedSymbol)
    return found;
  _.map(isCrypto ? FIAT : CRYPTO, item => {
    if (item.symbol === selectedSymbol) {
      found = {...item};
    }
  })
  return found;
}

function InputAmount({isCrypto = false, name, className, label, hookForm, selectedSymbol, onChange, handleAmountChange, defaultValue}) {
  const { formState: { errors }, setValue, control } = hookForm;
  const [ value, setInputValue ] = useState(defaultValue);
  const cn = `mt-[13px] border-0 dark:border ${errors && errors[name] ? 'border border-[#ff0000] focus:border-[#ff0000]' : 'border-[#745FF2] focus:border-[#745FF2]'} rounded-[13px] w-full h-[46px] p-3 pl-4 pr-4 outline-none bg-[#FFFFFF] dark:bg-transparent text-black dark:text-white dark:bg-[#32283C]`;

  const [isOpen, setIsOpen] = useState(false);
  const selected = getSelected(isCrypto, selectedSymbol);
  const caret = !isOpen ? 'bg-common-caret-up dark:bg-common-caret-up-dark' : 'bg-common-caret-down dark:bg-common-caret-down-dark'
  const dropdown_crypto = _.map(FIAT, item=>{
    return (<div
      key={item.symbol}
      title={item.desc}
      className={`cursor-pointer p-[3px] pl-[10px] pr-[10px] bg-[#232325] hover:bg-black hover:text-[#00DDA2] border border-[#62D1CD] text-center ${selected.symbol !== item.symbol?'text-white':'text-[#00DDA2]'}`}
      onClick={handleDropdownSelect.bind(this, item.symbol)}
    >
      {item.symbol}
    </div>)
  })
  
  function handleOpen() {
    setIsOpen(!isOpen);
  }

  function handleDropdownSelect (symbol) {
    setIsOpen(false);
    onChange(symbol);
  }

  return (
    <div className={`relative w-full ${className}`}>
      {label}
      <Controller
        render={({ field }) => (
          <MaskedInput
            id={name}
            mask={maskCurrency}
            className={cn}
            value={value}
            placeholder="0.00"
            onChange={(e) => {
              const changedValue = e.target.value;
              if (handleAmountChange) {
                handleAmountChange(e);
              } else {                  
                setValue(name, changedValue) 
              }
              setInputValue(changedValue);
            }}
          />
        )}
        control={control}
      />
      
			{errors && errors[name] &&
        <div className="ml-[15px] text-[#d71f28] text-xs mt-2">
          {errors[name]?.message}
        </div>
      }
      {isCrypto ?
        <div className="absolute right-[10px] top-[53px]">
          <div
            className={`${caret} bg-cover bg-center w-[15px] h-[15px] cursor-pointer`}
            onClick={handleOpen}
          />
          <div className="absolute right-[-3px] top-[-8px] rounded-[5px] border border-[#888888] p-[2px] pl-[10px] pr-[25px] pointer-events-none text-black dark:text-white">{selectedSymbol}</div>
        </div>
        :
        <div className="absolute right-[10px] top-[46px] rounded-[5px] border border-[#888888] p-[2px] pl-[10px] pr-[10px] text-black dark:text-white ">{selectedSymbol}</div>
      }
      {isOpen && isCrypto && <div className={`absolute right-[5px] top-[75px] z-50 rounded-[5px] overflow-hidden`}>
        {dropdown_crypto}
      </div>}
    </div>
  )
}

export default InputAmount;