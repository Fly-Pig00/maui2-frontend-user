import { useState } from 'react';
import MaskedInput from 'react-text-mask';
import { Controller } from "react-hook-form";

function Input(props) {  
  const [ value, setInputValue ] = useState(props.defaultValue);
  const { formState: { errors }, register, setValue, control } = props.hookForm;

  const cn = `border-0 dark:border ${errors && errors[props.name] ? 'border-[1px] border-[#ff0000] focus:border-[#ff0000]' : 'border-[#745FF2] focus:border-[#745FF2]'} rounded-[13px] w-full h-[46px] p-3 outline-none mt-[13px] bg-[#FFFFFF] dark:bg-transparent text-black dark:text-white dark:bg-[#32283C] transition-all duration-500`;
  
  return (
    <div className={`${props.className || ''}`}>
      {props.label && <div className="text-left font-medium text-[14px] leading-[16px] text-[#000A2F] tracking-tight	">
        {props.label}
      </div>}
      {props.isMasked &&
        <Controller
          render={({ field }) => (
            <MaskedInput
              autoFocus={props.autoFocus}
              id={props.id || props.name}
              mask={props.isMasked}
              className={cn}
              value={value}
              placeholder={props.placeholder || ''}
              onChange={(e) => {
                const changedValue = e.target.value;
                if (props.onChange) {
                  props.onChange(e);
                } else {                  
                  setValue(props.name, changedValue) 
                }
                setInputValue(changedValue);
              }}
            />
          )}
          control={control}
        />
      }
      {!props.isMasked &&
        <input
          autoFocus={props.autoFocus}
          id={props.id || props.name}
          name={props.name}
          type="text"
          className={cn}
          {...register(props.name)}
        />
      }
			{errors && errors[props.name] &&
        <div className="ml-[15px] text-[#d71f28] text-xs mt-2">
          {errors[props.name]?.message}
        </div>
      }
    </div>
    
  );
}

export default Input;