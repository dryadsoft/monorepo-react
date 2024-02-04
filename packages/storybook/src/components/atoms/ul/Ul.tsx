import React from "react";

interface UlProps {
  children?: React.ReactNode;
}
export const Ul = ({ children }: UlProps) => {
  return (
    <ul className="flex flex-row items-center justify-start px-2 py-3 space-x-2 overflow-x-auto text-sm font-medium text-center text-gray-100 sm:flex-col sm:space-x-0 sm:space-y-4 sm:pt-4 sm:text-base">
      {children}
    </ul>
  );
};
