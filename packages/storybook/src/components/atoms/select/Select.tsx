import { cls } from "../../../utils";

interface IOption {
  key: string;
  value: string;
}
interface SelectProps {
  options: IOption[];
  className?: string;
  [key: string]: unknown;
}

export const Select = ({ options, className, ...rest }: SelectProps) => {
  return (
    <select
      className={cls(
        "p-1 shadow-sm focus:outline-none hover:bg-gray-100 cursor-pointer rounded-sm transition-colors",
        className!,
      )}
      {...rest}
    >
      {options.map(({ key, value }: IOption) => (
        <option value={key}>{value}</option>
      ))}
    </select>
  );
};
