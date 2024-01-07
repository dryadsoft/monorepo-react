import { useEffect, useState } from "react";

type svgIcons =
  | "cards"
  | "creditCard"
  | "depositCard"
  | "github"
  | "logout"
  | "user"
  | "video";
type pngImages = "logo";
interface IIconsProps {
  name: svgIcons | pngImages;
  width?: number;
  height?: number;
  className?: string;
}
export const Icons = ({ name, ...rest }: IIconsProps) => {
  // const ImportedIconRef = useRef();
  // const [isLoading, setIsLoading] = useState(false);
  const [svgIcon, setSvgIcon] = useState("");

  useEffect(() => {
    (async () => {
      let icon = "";
      if (name !== "logo") {
        icon = (await import(`../../assets/${name}.svg`)).default;
      } else {
        icon = (await import(`../../assets/${name}.png`)).default;
      }
      setSvgIcon(icon);
    })();
  }, [name]);

  return <img src={svgIcon} alt={name} {...rest} />;
};
