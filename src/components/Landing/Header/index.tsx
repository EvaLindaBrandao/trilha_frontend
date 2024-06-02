import Logo from "/public/images/logo/logo.svg";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  
} from "@/components/ui/navigation-menu"

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
        <NavigationMenu>
            <NavigationMenuItem>
          <NavigationMenuTrigger className="w-48 text-black bg-primary-orange h-8 rounded-full px-6 py-1 text-sm  cursor-pointer bg-transparent">Entrar</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" ">
             
            <Link href="/login">
                        <li className=" hover:bg-gray-200 text-md font-bold w-48 mb-2   ">
                      
                          Mentorado
        
                        </li>
                   
                    </Link>
             
            </ul>
            <ul className=" ">
             
            <Link href="/lmentees">
                        <li className=" hover:bg-gray-200 text-md font-bold w-48 ">
                           
            Mentor
        
                        </li>
                   
                    </Link>
             
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        </NavigationMenu>
        



        <NavigationMenu>
            <NavigationMenuItem>
          <NavigationMenuTrigger className="w-48 text-black bg-white text-xl font-bold bg-transparent">Entrar</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" ">
             
            <Link href="/cadastro">
                        <li className=" hover:bg-gray-200 text-md font-bold w-48 mb-2   ">
                      
                      Mentorado
        
                        </li>
                   
                    </Link>
             
            </ul>
            <ul className=" ">
             
            <Link href="/mentees">
                        <li className=" hover:bg-gray-200 text-md font-bold w-48 ">
                           
                           Mentor<ButtonSecundary text="Cadastrar" />
        
                        </li>
                   
                    </Link>
             
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        </NavigationMenu>
        
       
      </nav>
    </header>
  );
}

