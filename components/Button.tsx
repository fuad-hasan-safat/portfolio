"use client";

import { motion } from 'framer-motion';
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
    <motion.button
      whileHover={{
        scale: 1.2,
        transition: { duration: 2, delay: 1, ease: 'easeInOut' },
      }}
      whileTap={{ scale: 0.9 }}
      type={type}
      onClick={onClick}
      className={`px-4 py-2 ${typeClass} ${className}`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
