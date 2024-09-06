import React from 'react';

interface ButtonProps {
  type: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ type, onClick, children, className }) => {
  return (
    <button type={type} onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
