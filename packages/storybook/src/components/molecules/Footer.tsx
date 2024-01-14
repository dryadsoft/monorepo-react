import { Position } from "../../constants";
import { cls } from "../../utils";
import { Span } from "../atoms/span/Span";

interface FooterProps {
  position?: keyof typeof Position;
  className?: string;
  children: React.ReactNode;
}
export const Footer = ({
  position = "static",
  className,
  children,
}: FooterProps) => {
  return (
    <footer
      className={cls(
        "bottom-0 flex items-center justify-center w-full h-16 mx-auto text-center bg-gray-300",
        Position[position],
        position === "absolute" ? "bottom-0" : "",
        className!,
      )}
    >
      <Span textSize="sm">{children}</Span>
    </footer>
  );
};
