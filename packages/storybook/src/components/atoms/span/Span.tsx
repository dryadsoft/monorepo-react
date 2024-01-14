import React from "react";
import { TextSize } from "../../../constants";
import { cls } from "../../../utils";

interface SpanProps {
  textSize?: keyof typeof TextSize;
  className?: string;
  children?: React.ReactNode;
}

export const Span = ({ textSize = "base", className, children }: SpanProps) => {
  return (
    <span className={cls("py-3 text-gray-600", TextSize[textSize], className!)}>
      {children}
    </span>
  );
};
