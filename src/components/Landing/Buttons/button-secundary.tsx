type Props = {
  text: string;
  bgColor?: string;
  textColor?: string;
  border?: string;
  onClick?: () => void;
};

export function ButtonSecundary({
  text,
  bgColor,
  textColor,
  border,
  onClick,
}: Props) {
  const background = bgColor ? bgColor : "bg-primary-orange";
  const color = textColor ? textColor : "text-white";
  return (
    <button
      className={`${background} ${color} h-8 rounded-full px-6 py-1 text-sm ${border} cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
