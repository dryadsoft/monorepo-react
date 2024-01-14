import { Option } from "../atoms/option/Option";
import { Select } from "../atoms/select/Select";

interface IOption {
  key: string;
  value: string;
}
interface SelectProps {
  options: IOption[];
  className?: string;
  [key: string]: unknown;
}

export const SelectBox = ({ options, className, ...rest }: SelectProps) => {
  return (
    <Select className={className} {...rest}>
      {options.map(({ key, value }: IOption) => (
        <Option key={key} code={key} text={value} />
      ))}
    </Select>
  );
};
