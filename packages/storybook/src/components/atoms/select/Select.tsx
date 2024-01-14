import React from "react";
import { cls } from "../../../utils";

interface SelectProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}

export const Select = ({ className, children, ...rest }: SelectProps) => {
  return (
    <select
      className={cls(
        "p-1 shadow-sm focus:outline-none hover:bg-gray-100 cursor-pointer rounded-sm transition-colors",
        className!,
      )}
      {...rest}
    >
      {children}
    </select>
  );
};
