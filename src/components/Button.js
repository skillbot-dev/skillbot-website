import React from 'react';
import { navigate } from '@reach/router'

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size, toPage = '#' }) => {
  return (
    <button
      type="button"
      onClick= { () => navigate(toPage) }
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-primary-darker
        hover:bg-primary
        rounded
        text-white
    `}
    >
      {children}
    </button>
  );
};

export default Button;
