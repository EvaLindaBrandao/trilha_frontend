//Components
import { ButtonSecundary } from "@/components/Landing/Buttons/button-secundary";
import Image from "next/image";
import Link from "next/link";
import noImage from '../../../../public/images/no-image.png'

type Props = {
  src?: string;
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
      <div className="w-44 h-36">
        <Image src={src || noImage} alt={alt} className={`w-full h-full object-cover ${imageStyle}`} width={100} height={100} unoptimized/>
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
