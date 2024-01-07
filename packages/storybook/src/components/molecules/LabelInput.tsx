import { InputHTMLAttributes, forwardRef } from "react";
import { Input } from "../atoms/inputs/Input";
import { Label } from "../atoms/labels/Label";

interface LabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export const LabelInput = forwardRef<HTMLInputElement, LabelInputProps>(
  ({ label, ...rest }: LabelInputProps, ref) => {
    return (
      <div className="relative group">
        <Label
          label={label}
          className="absolute ml-2 -top-6 group-hover:bg-gray-50"
        />
        <Input
          ref={ref}
          className="group-hover:border-input-border-hover focus:border-input-border-focus"
          {...rest}
        />
      </div>
    );
  }
);
