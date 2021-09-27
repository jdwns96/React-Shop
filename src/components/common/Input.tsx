import React from "react";

// type
type Props = {
  label?: string;
  placeholder?: string;
};

const Input = (props: Props) => {
  return (
    <div>
      <label htmlFor="input-component">{props.label}</label>
      <input type="text" placeholder={props.placeholder} id="input-component" />
    </div>
  );
};

export default Input;
