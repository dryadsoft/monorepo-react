import React from "react";
import { cls } from "../../../utils";

interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}
export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div
      className={cls(
        "h-screen mx-auto bg-red-100 max-w-screen-xl relative overflow-hidden flex flex-col",
        className!,
      )}
    >
      {children}
    </div>
  );
};
