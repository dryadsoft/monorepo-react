import { JustifyContent } from "../../../constants";
import { cls } from "../../../utils";

interface FlexProps {
  justifyContent?: keyof typeof JustifyContent;
  children?: React.ReactNode;
  [key: string]: unknown;
}
export const Flex = ({
  justifyContent = "center",
  children,
  ...rest
}: FlexProps) => {
  return (
    <div
      className={cls(
        "flex items-center justify- gap-2 px-2 py-1 bg-gray-300 rounded-sm",
        JustifyContent[justifyContent],
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
