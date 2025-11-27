import React from 'react';

type InputProps = {
    label: string;
    type?: string;
    value: string;
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ label, type="text", value, onChange}) => {
  return (
    <div className='mb-4'>
      <label className='block text-sm font-medium mb-1'>{label}</label>
      <input 
        type={type}
        value={value}
        onChange={onChange}
        className='w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500'

      />
    </div>
  )
}

export default Input
