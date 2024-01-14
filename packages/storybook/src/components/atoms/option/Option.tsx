interface OptionProps {
  code: string;
  text: string;
  className?: string;
}
export const Option = ({ code, text, className }: OptionProps) => {
  return (
    <option value={code} className={className}>
      {text}
    </option>
  );
};
