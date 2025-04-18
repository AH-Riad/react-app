import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  OnClick: () => void;
}
const Button = ({ children, OnClick }: Props) => {
  return (
    <button className="btn btn-dark btn-primary" onClick={OnClick}>
      {children}
    </button>
  );
};

export default Button;
