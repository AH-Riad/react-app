import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Button = ({ children }: Props) => {
  return <button className="btn btn-dark btn-primary">{children}</button>;
};

export default Button;
