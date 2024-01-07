import { Rounded, TextSize } from "../../../constants";
import { cls } from "../../../utils";

interface LabelProps {
  label: string;
  textSize?: keyof typeof TextSize;
  rounded?: keyof typeof Rounded;
  className?: string;
  [key: string]: unknown;
}
export const Label = ({
  label,
  textSize = "xs",
  rounded = "md",
  className,
  ...rest
}: LabelProps) => {
  return (
    <label
      className={`${cls(
        "px-2 py-1 tracking-wide text-gray-600",
        TextSize[textSize],
        Rounded[rounded],
        className!,
      )}
    `}
      {...rest}
    >
      {label}
    </label>
  );
};
