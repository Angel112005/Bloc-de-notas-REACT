
import React from 'react';
import './TextInput.css';

function TextInput({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="text-input"
    />
  );
}

export default TextInput;
