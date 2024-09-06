import React from 'react';

interface FormInputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ type, value, onChange, placeholder, required }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input input-bordered w-full"
      required={required}
    />
  );
};

export default FormInput;
