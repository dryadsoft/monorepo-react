import {
  ButtonBgColor,
  ButtonBgHover,
  ButtonLabelColor,
  Rounded,
  TextSize,
} from "../../../constants";
import { cls } from "../../../utils";

interface IButtonProps {
  /**
   * backgroundColor
   */
  bgColor: keyof typeof ButtonBgColor;
  /**
   * backgroundColor
   */
  bgHover: keyof typeof ButtonBgHover;
  /**
   * textColor
   */
  labelColor: keyof typeof ButtonLabelColor;
  /**
   * 버튼 텍스트
   */
  labelSize: keyof typeof TextSize;
  /**
   * 버튼 텍스트
   */
  label: string;
  /**
   * rounded
   */
  rounded?: keyof typeof Rounded;
  /**
   * 로딩여부
   */
  isLoading?: boolean;
  className?: string;
  [key: string]: unknown;
}

export const Button: React.FC<IButtonProps> = ({
  bgColor = "primary",
  bgHover = "primary",
  labelColor = "primary",
  labelSize = "lg",
  label,
  rounded = "none",
  isLoading = false,
  className,
  ...rest
}) => {
  // const bgColor = primary
  //   ? "bg-lime-600 hover:bg-lime-700 dark:bg-gray-700 dark:hover:bg-gray-500"
  //   : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-400 dark:hover:bg-gray-500";
  // const textColor = primary
  //   ? "text-white"
  //   : "text-gray-500 dark:text-gray-200 dark:hover:text-gray-300";
  const borderColor =
    bgColor !== "primary" && bgColor !== "actionPrimary"
      ? "border-gray-200"
      : "border-transparent";
  const loading = isLoading ? "pointer-events-none" : "";
  return (
    <button
      type="button"
      className={cls(
        "py-2 px-4 tracking-wide font-medium transition-colors focus:outline-none box-border border",
        ButtonLabelColor[labelColor],
        ButtonBgColor[bgColor],
        ButtonBgHover[bgHover],
        TextSize[labelSize],
        loading,
        Rounded[rounded],
        borderColor,
        className!,
      )}
      {...rest}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};
