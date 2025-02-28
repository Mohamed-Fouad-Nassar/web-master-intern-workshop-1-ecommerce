import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const Input = ({ label, id, ...rest }: IProps) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor={id} className="font-medium font-ibm-con">
        {label}
      </label>
      <input
        className="py-2 px-3 border-1 border-gray-500 rounded-lg focus:ring focus:ring-black"
        id={id}
        {...rest}
      />
    </div>
  );
};

export default Input;
