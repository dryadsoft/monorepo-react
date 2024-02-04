import React from "react";
import { cls } from "../../../utils";

interface LiProps {
  isSelected?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Li = ({ isSelected = false, className, children }: LiProps) => {
  return (
    <li
      className={cls(
        "min-w-fit select-none rounded-2xl transition-colors sm:w-full sm:rounded-full sm:px-6 sm:py-2",
        isSelected
          ? "bg-black px-2 py-1 text-gray-200"
          : "bg-white px-2 py-1 text-gray-600 hover:bg-gray-200",
        className!,
      )}
    >
      {children}
    </li>
  );
};
