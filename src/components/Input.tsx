import  { InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label:string,
    id:string,
}

const Input= ({label,id,...rest} : IProps) => {
  return(
    <div className="flex flex-col gap-0.5 mb-4">
    <label
      htmlFor={id}
      className="font-medium text-xl font-ibm-con"
    >
     {label}
    </label>
    <input
      className="py-2 px-3 outline-none border-1 border-[#656565] rounded-lg focus:border-2 focus:border-black"
       id={id}
       {...rest}
    />
  </div>
  ) 
};

export default Input;