//Components
import { CardCarreira } from "@/components/Landing/Cards/card-career";
import { Header } from "@/components/Landing/Header";

//Image
import ImagemCarreira1 from "/public/assets/imagemcarreira1.svg";
import ImagemCarreira2 from "/public/assets/imagemcarreira2.svg";
import crianca from "/public/assets/children.svg";

export default function Areas() {
  return (
    <>
      <Header />
      <div className="mt-4 px-12">
        <h2 className="text-2xl font-medium text-secondary-blue"> Áreas </h2>
        <div className="mt-6 grid grid-cols-2 gap-6">
          <CardCarreira
            src={ImagemCarreira1}
            alt="Imagem de uma adulta"
            titulo="Electicidade"
            paragrafo=" Class Technologies Inc., the company that created Class,..."
          />
          <CardCarreira
            src={crianca}
            alt="Imagem de crianca"
            titulo="Educação"
            paragrafo=" Class Technologies Inc., the company that created Class,..."
          />
          <CardCarreira
            src={crianca}
            alt="Imagem de crianca"
            titulo="Saúde"
            paragrafo=" Class Technologies Inc., the company that created Class,..."
          />
          <CardCarreira
            src={crianca}
            alt="Imagem de crianca"
            titulo="Administração"
            paragrafo=" Class Technologies Inc., the company that created Class,..."
          />
          <CardCarreira
            src={crianca}
            alt="Imagem de crianca"
            titulo="Culinária"
            paragrafo=" Class Technologies Inc., the company that created Class,..."
          />
          <CardCarreira
            src={crianca}
            alt="Imagem de crianca"
            titulo="Jurídica"
            paragrafo=" Class Technologies Inc., the company that created Class,..."
          />
        </div>
      </div>
    </>
  );
}
