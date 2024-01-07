import { PlaceholderSize, Rounded } from "../../../constants";
import { cls } from "../../../utils";

interface InputProps {
  rounded?: keyof typeof Rounded;
  placeholder?: string;
  placeholderSize?: keyof typeof PlaceholderSize;
  className?: string;
  [key: string]: unknown;
}
export const Input = ({
  rounded = "md",
  placeholder,
  placeholderSize = "sm",
  className,
  ...rest
}: InputProps) => {
  return (
    <input
      className={`${cls(
        `w-full p-2 tracking-wider text-input-primary transition-colors border hover:border-input-border-hover focus:border-input-border-focus focus:outline-none`,
        Rounded[rounded],
        PlaceholderSize[placeholderSize],
        className!,
      )}`}
      placeholder={placeholder}
      {...rest}
    />
  );
};
