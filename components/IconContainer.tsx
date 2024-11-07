"use client";
import React, { ReactNode } from 'react';
import { motion } from "framer-motion"

type IconProps = {
  children: ReactNode; // The icons to render
  onClick?: () => void; // Optional click handler for clickable icons
  isClickable?: boolean; // Determines if the icon is clickable
  customClass?: string; // Custom class for styling
};

const IconContainer: React.FC<IconProps> = ({ children, onClick, isClickable = false, customClass = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ scale: 1, transition: { duration: 0.2 }, opacity: 1 }}
      className={`icon-container shadow-lg  ${customClass} ${isClickable ? 'clickable' : ''}`}
      onClick={isClickable ? onClick : undefined}
      style={{
        display: 'inline-block',
        padding: '10px',
        margin: '5px',
        backgroundColor: '#2E2E2E',
        borderRadius: '8px',
        cursor: isClickable ? 'pointer' : 'default',
      }}
    >
      {children}
    </motion.button>
  );
};

export default IconContainer;
