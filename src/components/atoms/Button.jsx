
import React from 'react';
import './Button.css';

function Button({ onClick, label }) {
  return (
    <button onClick={onClick} className="button">
      {label}
    </button>
  );
}

export default Button;
