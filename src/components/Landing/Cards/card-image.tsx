import Image from "next/image";

type Props = {
  src: string,
  alt: string
}

export function CardImage({src, alt}:Props){
  return(
    <Image src={src} alt={alt} width={600} height={150}/>
  )
}