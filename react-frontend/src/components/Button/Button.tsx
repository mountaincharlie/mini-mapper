import React from 'react';
import './Button.scss';

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, className = '' }) => {
  return (
    <button className={`button ${className}`} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
