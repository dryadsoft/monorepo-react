import { Rounded, Shadow } from "../../../constants";
import { cls } from "../../../utils";

interface BoxProps {
  children?: React.ReactNode;
  rounded?: keyof typeof Rounded;
  shadow?: keyof typeof Shadow;
}
export const Box = ({ rounded = "md", shadow = "sm", children }: BoxProps) => {
  return (
    <div
      className={`${cls("px-2 py-1 border", Rounded[rounded], Shadow[shadow])}`}
    >
      {children}
    </div>
  );
};
