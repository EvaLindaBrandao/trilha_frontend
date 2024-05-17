// Components
import { ButtonSecundary } from "@/components/Landing/Buttons/button-secundary";
import { Header } from "@/components/Landing/Header";
import Image from "next/image";

// Image
import Programmer from "/public/assets/Programmer.svg";

export default function Informativo() {
  return (
    <>
      <Header />
      <div className=" w-full ">
        <div className="mt-7 flex h-40 w-[1327px] justify-between bg-[#F0F2F5] px-5">
          <div>
            <h1 className="text-secondary-blue mt-2 text-2xl font-bold">
              Carreira<span className="text-primary-orange"> de Progração</span>
            </h1>
            <p className="text-gray-black mb-2 mt-2">
              "Por favor, responda com atenção às <br /> perguntas
              apresentadas."
            </p>
            <ButtonSecundary
              text="Teste agora"
              bgColor="bg-primary-orange"
              textColor="text-white"
            />
          </div>
          <div>
            <Image src={Programmer} alt="Imagem de programador" width={260} />
          </div>
        </div>
        <div className="w'ful flex gap-7">
          <div className="mt-4 h-[400px] w-[500px] bg-[#F0F2F5]"></div>
          <div>
            <h2 className="text-secondary-blue">Introduçao</h2>
            <p>
              A carreira de programação é uma área dinâmica e em constante
              evolução, que oferece diversas oportunidades para profissionais
              interessados em tecnologia da informação e
              <br /> desenvolvimento de software. Aqui estão alguns aspectos
              importantes sobre a carreira de programação:
            </p>
            <h2 className="text-secondary-blue">Aspecos</h2>
            <p>
              1. Variedade de Especializações: Dentro da programação, existem
              diversas especializações, como desenvolvimento web,
              desenvolvimento de aplicativos móveis, desenvolvimento de jogos,
              inteligência artificial, análise de dados, segurança da
              informação, entre outras. Cada uma dessas áreas exige conjunto
              específico de habilidades e conhecimentos.
            </p>
            <p>
              2. Demanda por Profissionais Qualificados: Com a crescente
              digitalização de processos em empresas e organizações de todos os
              setores, há uma demanda crescente por programadores qualificados.
              Essa demanda é especialmente alta em tecnologias emergentes, como
              inteligência artificial, aprendizado de máquina e computação em
              nuvem.
            </p>
            <p>
              3. Flexibilidade e Autonomia: Muitos programadores têm a
              flexibilidade de trabalhar remotamente ou de forma freelance, o
              que permite maior autonomia e liberdade na organização do
              trabalho. Isso também possibilita a participação em projetos
              diversos e a colaboração com equipes internacionais.
            </p>
            <p>
              4. Aprendizado Contínuo: A tecnologia está sempre evoluindo, e os
              programadores precisam estar constantemente atualizando suas
              habilidades e conhecimentos para acompanhar as novas tendências e
              ferramentas. O aprendizado contínuo é uma parte essencial da
              carreira de programação.
            </p>
            <p>
              5. Remuneração Competitiva: Os salários na área de programação
              tendem a ser competitivos, especialmente para profissionais com
              habilidades especializadas e experiência relevante. Além disso,
              existem oportunidades de crescimento na carreira, como se tornar
              líder técnico, gerente de projetos ou iniciar um empreendimento
              próprio.
            </p>
            <h2 className="text-secondary-blue">Media Salarial:</h2>
            <p>
              Em Angola, a média salarial de um programador pode variar
              consideravelmente dependendo do nível de experiência. Aqui estão
              algumas estimativas da média salarial para programadores em
              Angola, com base no nível de experiência:
            </p>
            <p>
              1. Júnior/Iniciante: Em torno de 100.000 a 300.000 Kz por mês.
            </p>
            <p>
              2. Programador Pleno: Em média, entre 300.000 e 700.000 Kz por
              mês.
            </p>
            <p>3. Sênior: Acima de 700.000 Kz por mês.</p>
            <p>
              Esses valores são apenas estimativas e podem variar dependendo de
              fatores como a empresa empregadora, localização geográfica, setor
              de atuação e habilidades específicas
              <br /> do programador. Além disso, é importante considerar que o
              custo de vida e outros benefícios oferecidos pelas empresas também
              podem influenciar os salários na região.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
