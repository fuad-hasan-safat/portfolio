"use client";

import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  type = undefined, 
  className = '' 
}) => {
  const typeClass = 
    type === 'button' 
      ? 'bg-blue-500 text-white font-semibold rounded hover:bg-blue-600'
      : type === 'submit' 
      ? 'bg-green-500 text-white font-semibold rounded hover:bg-green-600' 
      : type === 'reset' 
      ? 'bg-red-500 text-white font-semibold rounded hover:bg-red-600' 
      : 'text-[#878584] font-semibold rounded hover:text-[#fffcfa]';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 ${typeClass} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
