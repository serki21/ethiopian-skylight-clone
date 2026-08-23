import React from 'react';

export const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition duration-200 shadow-sm cursor-pointer flex items-center justify-center";
  
  const variants = {
    primary: "bg-skylight-blue text-white hover:bg-opacity-90 hover:shadow-md",
    gold: "bg-skylight-gold text-white hover:bg-opacity-90 hover:shadow-md",
    outline: "border-2 border-skylight-blue text-skylight-blue hover:bg-skylight-blue hover:text-white"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};