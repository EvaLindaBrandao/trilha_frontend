//Imagem
import Logo from "/public/images/logo/logo.svg";
import Link from "next/link";

//Components
import Image from "next/image";
import { ButtonSecundary } from "../Buttons/button-secundary";

export function Header() {
  return (
    <header className="flex h-20 flex-row-reverse items-center justify-between bg-primary-blue px-32 py-8 ">
      <div>
        <Link href="/">
          <Image src={Logo} alt="Logo" width={100} />
        </Link>
      </div>
      <nav className="flex items-center gap-4 ">
        <ul className="flex gap-4 text-gray-black">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/carreiras">Carreiras</Link>
          </li>
          <li>
            <Link href="#">Sobre</Link>
          </li>
        </ul>
        <Link href="/login">
          <ButtonSecundary
            text="Entrar"
            bgColor="bg-white"
            textColor="text-black"
          />
        </Link>
        <Link href="/cadastro">
          <ButtonSecundary text="Cadastrar" />
        </Link>
      </nav>
    </header>
  );
}
