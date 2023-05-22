import React, { ChangeEvent, useEffect, useState } from 'react';
import Button from "../Button/index";

import closedEye from "../../assets/images/esconder.png"
import openEye from "../../assets/images/ojo.png"

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  type: string;
  placeholder: string;
  label: string;
  required?: boolean;
  name?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, type, label, placeholder, required = false, name }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    setInputType(type);
  }, [type]);

  const handleClick = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <>
      <div className='Input' >
        <label htmlFor={inputType} className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="flex items-center">
            {inputType === "email" && (
              <input
                type={inputType}
                value={value}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={placeholder}
                required={required}
                name={name}
              />
            )}
          </div>
        </div>
      </div>

      <div className='Input'>
        {inputType === "password" && (
          <>
            <div className='Input__Password'>
              <input
                type={inputType}
                value={value}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={placeholder}
                required={required}
                name={name}
              />
              <Button className="p-2 border border-gray-300 rounded-r focus:outline-none" onClick={handleClick}>
                <img className="IconEye" src={openEye} alt="Icon Eye" />{" "}
              </Button>
            </div>
          </>
        )}
      </div>

      <div className='Input'>
        {inputType === "text" && (
          <>
            <div className="Input__Text">
              <input
                type={inputType}
                value={value}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={placeholder}
                required={required}
                name={name}
              />
              <Button className="p-2 border border-gray-300 rounded-r focus:outline-none" onClick={handleClick}>
                <img className="IconEye" src={closedEye} alt="Icon Eye" />{" "}
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Input;
