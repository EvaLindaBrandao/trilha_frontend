//Components
import { CardCarreira } from "@/components/Landing/Cards/card-career";
import { Header } from "@/components/Landing/Header";

//Image
import ImagemCarreira1 from "/public/assets/imagemcarreira1.svg";
import ImagemCarreira2 from "/public/assets/imagemcarreira2.svg";

export default function Carreiras() {
  return (
    <>
      <Header />
      <div className="mt-12 px-12">
        <h2 className="text-2xl font-medium text-secondary-blue">
          <span className="text-primary-orange">As carreiras</span> recomendadas
          que melhor conbinam contigo
        </h2>
        <p className="text-gray-black">
          Consoante as tuas respostas baseadas em tuas habilidades,
          dsasdadajhdsajhvdsahgdsahcdsa hjdfsahgxgfdsad vsadjfasytdyashd
          ...vimos as areas que melhor podem conbinar tigo são as seguintes
          listadas
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6">
          <CardCarreira
            src={ImagemCarreira1}
            alt="Imagem de Carreira"
            titulo="Programador"
            paragrafo="Essa pessoa é a responsável por criar softwares e atender às demandas por aplicações em diversas áreas..."
          />
          <CardCarreira
            src={ImagemCarreira2}
            alt="Imagem de Carreira"
            titulo="Analista de Sistema"
            paragrafo="O analista de sistemas desempenha um papel crucial na indústria de Tecnologia da Informação, utilizando sua expertise ..."
          />
          <CardCarreira
            src={ImagemCarreira1}
            alt="Imagem de Carreira"
            titulo="Arquiteto"
            paragrafo="O arquiteto é um profissional que realiza planos, projeta e constrói espaços para que sejam úteis para o uso humano; tais como casas, prédios ..."
          />
          <CardCarreira
            src={ImagemCarreira2}
            alt="Imagem de Carreira"
            titulo="Dançarino"
            paragrafo="Além de atuar diretamente na apresentação artística, o profissional de Dança está habilitado para a criação, produção, coordenação ou direção em Dança.O ..."
          />
        </div>
      </div>
    </>
  );
}
