import { Controller } from "react-hook-form";

type Props = {
  label: string;
  placeholder: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, placeholder, type, onChange, ...rest }: Props) => {
  return (
    <div className="flex w-full flex-col ">
      <label>{label}</label>
      <input
        className="w-full rounded-lg border-2 border-primary-blue p-2
         outline-1 outline-primary-orange "
        type={type}
        placeholder={placeholder}
        required
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};
