//Components
import { ButtonSecundary } from "@/components/Landing/Buttons/button-secundary";
import Image from "next/image";
import Link from "next/link";

type Props = {
  src: string;
  alt: string;
  titulo: string;
  paragrafo: string;
  imageStyle?: string;
  href?: string;
};

export function CardCarreira({
  src,
  alt,
  titulo,
  paragrafo,
  imageStyle,
  href
}: Props) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-48">
        <Image src={src} alt={alt} className={imageStyle} />
      </div>
      <div className="flex flex-1 flex-col items-start gap-2">
        <h2 className="text-blue-black">{titulo}</h2>
        <p className="text-gray-black text-ellipsis overflow-hidden h-20">{paragrafo}</p>
        <Link href={href || ''}>
          <ButtonSecundary
            text="Ler mais"
            bgColor="bg-primary-orange"
            textColor="text-white"
          />
        </Link>
      </div>
    </div>
  );
}
