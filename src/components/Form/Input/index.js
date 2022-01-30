import { useState } from 'react';
import MaskedInput from 'react-text-mask';
import { Controller } from "react-hook-form";

function Input(props) {  
  const [ value, setInputValue ] = useState(props.defaultValue);
  const { formState: { errors }, register, setValue, control } = props.hookForm;

  const cn = `border ${errors && errors[props.name] ? 'border-[#ff0000] focus:border-[#ff0000]' : 'border-[#dbe3eb] focus:border-[#008AEA]'} rounded-[3px] w-full h-[46px] p-3 outline-none mt-[13px] transition-all duration-500`;
  
  return (
    <div className={`mt-[18px] ${props.className || ''}`}>
      <div className="text-left font-medium text-[14px] leading-[16px] text-[#000A2F] tracking-tight	">
        {props.label}
      </div>
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
        <div className="text-[#d71f28] text-xs mt-2">
          {errors[props.name]?.message}
        </div>
      }
    </div>
    
  );
}

export default Input;