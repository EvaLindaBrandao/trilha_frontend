type Props = {
  text: string;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonPrimary({ text, onClick, ...rest }: Props) {
  return (
    <button
      className="w-full rounded-lg bg-primary-orange p-3 text-white"
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
}
