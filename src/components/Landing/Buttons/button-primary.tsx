type Props = {
  text: string;
  onClick?: () => void;
};

export function ButtonPrimary({ text, onClick }: Props) {
  return (
    <button
      className="w-full rounded-lg bg-primary-orange p-3 text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
