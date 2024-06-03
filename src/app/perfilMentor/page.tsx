import { Header } from "@/components/Landing/Header";
import Image from "next/image";
import MentorImage from "/public/assets/Mentor.svg";
import MentoredImage from "/public/assets/Mentored.svg";

export default function PerfilMentor(){
  return(
    <>
      <Header />
      <div className="">
        <div className="w-full h-60 bg-slate-900"></div>
        <div className="flex flex-col items-center gap-2">
        
            <Image src={MentoredImage} alt="mbdnndndn" className="rounded-full h-40 w-40"/>
          
          <p className="text-3xl text-black">Pedro Manuel</p>
          <p className="text-black text-xl">Progrador web | desenvolvedor de software </p>
          <div className=" flex gap-6 items-center px-12 shadow-[rgba(17,_17,_26,_0.3)_0px_0px_16px] w-115 h-10">
             <p>259</p>
             <p>Trilhas</p>
             <p>25</p>
             <p>Reações</p>
             <p>50</p>
             <p>Mentorados</p>
          </div>
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, 
            e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
          </p>
        </div>
      
      </div>
    </>

    )
}