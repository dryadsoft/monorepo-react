import {
  AlignItems,
  FlexBgColor,
  JustifyContent,
  Position,
  Rounded,
  Shadow,
} from "../../../constants";
import { cls } from "../../../utils";

interface FlexProps {
  justifyContent?: keyof typeof JustifyContent;
  alignItems?: keyof typeof AlignItems;
  bgColor?: keyof typeof FlexBgColor;
  shadow?: keyof typeof Shadow;
  rounded?: keyof typeof Rounded;
  position?: keyof typeof Position;
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}
export const Flex = ({
  bgColor = "transparent",
  shadow = "none",
  rounded = "none",
  justifyContent = "center",
  alignItems = "center",
  position = "static",
  children,
  className,
  ...rest
}: FlexProps) => {
  return (
    <div
      className={cls(
        "flex gap-2 px-2 py-1",
        JustifyContent[justifyContent],
        Shadow[shadow],
        Rounded[rounded],
        FlexBgColor[bgColor],
        AlignItems[alignItems],
        Position[position],
        className!,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
