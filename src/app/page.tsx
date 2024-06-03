//Image
import MentorImage from "/public/assets/Mentor.svg";
import MentoredImage from "/public/assets/Mentored.svg";
import WomanOffice from "/public/assets/womanOffice.svg";
import womanMeeting from "/public/assets/womanMeeting.svg";
import womanStudying from "/public/assets/womanStudying.svg";
import Man from "/public/assets/Man.svg";
import Study from "/public/assets/study.svg";
import Advisor from "/public/assets/Orientadores.png";
import Testemunho from "/public/assets/Testemunho.svg";
import Computer from "/public/assets/Computer.svg";
import crianca from "/public/assets/children.svg";
import logo from "/public/images/logo/logo.svg";

//Components
import { Banner } from "@/components/Landing/Banner";
import { CardImage } from "@/components/Landing/Cards/card-image";
import { CardInfo } from "@/components/Landing/Cards/card-info";
import Image from "next/image";
import Link from "next/link";

// Icons
import { MdOutlineStar } from "react-icons/md";
import { CardPrimary } from "@/components/Landing/Cards/card-primary";

export default function Home() {
  return (
    <div>
      <Banner />
      {/* SECCAO DE ESCOLHE A TUA CARREIRA */}
      <section className="flex flex-col items-center justify-center gap-9">
        <h2 className="mt-7 text-2xl font-bold text-secondary-blue">
          Escolha a tua <span className="text-primary-orange">Carreira</span>
        </h2>
        <p className="text-center text-gray-black">
          A Trilha é uma plataforma cativante que proporciona uma <br />{" "}
          abordagem interativa para auxiliar na tomada de decisões sobre a{" "}
          <br /> sua carreira.
        </p>
        <div className="flex gap-10">
          <CardInfo
            title="Interativa"
            text="Capaz de envolver os usuários de maneira ativa, proporcionando uma experiência envolvente e participativa"
          />
          <CardInfo
            title="Informativa"
            text="Oferece informações valiosas sobre carreiras, fornecendo insights e dados úteis para ajudar os usuários em suas decisões profissionais"
          />
          <CardInfo
            title="Personalizada"
            text="Adaptada às necessidades individuais, a Trilha oferece um serviço personalizado, auxiliando os usuários a explorar caminhos profissionais que se alinhem com seus interesses e habilidades"
          />
        </div>
      </section>
      {/* SECCAO DE mAIS AFINAL, O QUE E TRILHA */}
      <section className="flex flex-col items-center justify-center gap-9">
        <h2 className="mt-16 text-2xl font-bold text-secondary-blue">
          Mais afinal,o que e a{" "}
          <span className="text-primary-orange">Trilha</span> ?
        </h2>
        <p className="text-center text-gray-black">
          A Trilha é um inovador sistema de apoio à decisão profissional,
          dedicado a orientar <br /> indivíduos na escolha da carreira ideal,
          proporcionando uma jornada personalizada
          <br /> para o sucesso profissional.
        </p>
        <div className="flex gap-14">
          <Image
            src={MentorImage}
            alt="Imagem de um mentor"
            width={320}
            height={150}
          />
          <Image
            src={MentoredImage}
            alt="Imagem de mentorados"
            width={320}
            height={150}
          />
        </div>
      </section>
      {/* SECCAO DE Tudo que precisas para escolher a tua carreira */}
      <section className="flex items-center justify-between px-32 py-24">
        <div className="mt-[-40px] flex flex-col gap-4">
          <h2 className="mt-16 text-2xl font-medium text-secondary-blue">
            Tudo que precisas para escolher a <br /> tua carreira{" "}
            <span className="text-primary-orange">encontras na Trilha</span>
          </h2>
          <p className="text-gray-black ">
            Explore todas as ferramentas necessárias para definir o <br /> seu
            caminho profissional na Trilha. Descubra recursos <br />
            valiosos que o ajudarão a fazer escolhas informadas e a <br />{" "}
            traçar uma carreira de sucesso
          </p>
          <p className="text-gray-black">
            <Link href="/">Ver mais</Link>
          </p>
        </div>
        <div>
          <Image src={WomanOffice} alt="Mulher" width={400} height={250} />
        </div>
      </section>
      {/* SECCAO DE RECURSOS QUE A TRILHA OFERECE */}
      <section className=" flex flex-col gap-3 px-32">
        <h2 className="text-center text-2xl font-medium text-secondary-blue">
          <span className="text-primary-orange">Recursos</span> que a Trilha
          oferece{" "}
        </h2>
        <p className="mb-2  text-center text-gray-black">
          Estes recursos extraordinário pode tornar a escolha da carreira mais
          eficientes
        </p>
        <div className="flex items-center justify-between gap-32">
          <div>
            <Image src={womanMeeting} alt=" " width={400} height={200} />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold text-secondary-blue">
              <span className="text-primary-orange">Avaliação </span> de Perfil{" "}
            </h2>
            <p className="text-gray-black ">
              A plataforma começará com uma avaliação abrangente do perfil do
              usuário
            </p>
            <p className="text-gray-black ">
              Incluindo seus interesses, habilidades, valores, paixões e
              objetivos de carreira
            </p>
            <p className="text-gray-black ">
              Isso será feito por meio de questionários interativos
            </p>
          </div>
        </div>
        <section className=" flex items-center justify-between">
          <div className="mt-[-100px] flex flex-col gap-5">
            <h2 className="text-2xl font-semibold text-secondary-blue">
              Exploração de{" "}
              <span className="text-primary-orange">Carreiras</span>
            </h2>
            <p className="text-gray-black ">
              Oferece informações detalhadas sobre várias <br /> profissões,
              incluindo especificações, <br /> perspectivas de emprego, faixas
              salariais e <br /> requisitos educacionais. Isso pode ajudar os{" "}
              <br /> usuários a entender melhor as opções disponíveis.
            </p>
          </div>
          <div>
            <Image src={Man} alt="" width={400} height={200} />
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between gap-28">
            <div>
              <Image src={womanStudying} alt=" " width={350} height={200} />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-semibold text-secondary-blue">
                <span className="text-primary-orange">Testes </span> de Aptidão
              </h2>
              <p className="text-gray-black ">
                Incorporar testes de exigência e personalidade que <br /> possam
                sugerir carreiras compatíveis com o perfil <br /> do usuário.
              </p>
            </div>
          </div>
        </section>
        <section className=" flex items-center justify-between ">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold text-secondary-blue">
              Recursos<span className="text-primary-orange"> Educacionais</span>
            </h2>
            <p className="text-gray-black ">
              {" "}
              Fornece informações sobre programas educacionais,
              <br /> cursos, faculdades e universidades que são relevantes{" "}
              <br /> para as carreiras escolhidas.
            </p>
          </div>
          <div>
            <Image src={Study} alt="" width={400} height={200} />
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between gap-28">
            <div>
              <Image src={Advisor} alt=" " width={400} height={200} />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-semibold text-secondary-blue">
                <span className="text-primary-orange">Orientação </span>{" "}
                Profissional
              </h2>
              <p className="text-gray-black ">
                Conecte os usuários a conselheiros de carreira <br /> ou
                orientadores que podem oferecer orientações <br />
                personalizadas com base no perfil do usuário
              </p>
            </div>
          </div>
        </section>
      </section>
      {/* SECCAO DE FEEDBACK */}
      <section className=" mt-36 flex flex-col gap-7 px-32">
        <div className="flex items-center gap-5">
          <hr className="w-16 text-secondary-blue" />
          <h4 className="text-xs text-secondary-blue">TESTEMUNHO</h4>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl text-secondary-blue">
              {" "}
              Qual foi o feedback <br /> que recebemos?
            </h2>
            <p className="font-normal text-secondary-blue">
              A Trilha obteve mais de 100 mil avaliações <br /> positivas de
              nossos usuários em todo o <br /> mundo
            </p>
            <p className="font-normal text-secondary-blue">
              Alguns dos mentorados e mentores foram <br /> muito ajudados pela
              Trilha
            </p>
            <p className="font-normal text-secondary-blue">
              Você também? Por favor, dê sua avaliação
            </p>
            <button className="h-10 w-full rounded-xl bg-primary-blue">
              Dê a sua avaliação
            </button>
          </div>
          <div>
            <Image
              src={Testemunho}
              alt="Imagem de Testemunho"
              width={300}
              height={20}
              className="mt-[-40px]"
            />
            <div className=" ml-11 mt-[-100px] flex h-56 w-[450px] items-center rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ">
              <div className="h-full w-3 rounded-lg bg-color-red"></div>
              {/*<hr className="w-40 text-secondary-blue"/>*/}
              <div className="flex-1 bg-white p-8">
                <p className="text-sm text-gray-black">
                  {" "}
                  "Muito obrigado pela sua ajuda. É exatamente o que <br /> eu
                  estava procurando. Você não vai se arrepender.
                  <br />
                  Isso realmente me poupa tempo e esforço. A Trilha <br /> é
                  exatamente o que faltava em nosso dia-a-dia"
                </p>
                <div className="mt-8 flex justify-between">
                  <p className="text-gray-black">Glória Rosa</p>
                  <div className="flex ">
                    <MdOutlineStar color="#FBA333" />
                    <MdOutlineStar color="#FBA333" />
                    <MdOutlineStar color="#FBA333" />
                    <MdOutlineStar color="#FBA333" />
                    <MdOutlineStar color="#FBA333" />
                  </div>
                </div>
                <p className="flex justify-end text-sm text-gray-black">
                  12 avaliações{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECCAO DE Areas em Destaque */}
      <section className=" mt-16 px-32">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-secondary-blue">
            Áreas em Destaque
          </h2>
          <p className="mt-2 text-gray-black">
            Confira agora as últimas notícias em diversas áreas
          </p>
        </div>
        <div className=" mt-12 flex justify-between gap-16">
          <div className="flex-1">
            <Image
              src={Computer}
              alt="Imagem de computador"
              width={600}
              height={150}
              className="w-full"
            />
            <p className="mt-4 h-6 w-28 rounded-lg bg-yellow-200 text-center">
              Informatica
            </p>
            <p className="mt-4 text-xl font-medium text-blue-black">
              A area de informatica é hoje a que mais <br /> emprega tecnicos
              médio
            </p>
            <p className="mt-6 text-gray-black">
              Uma estatistica mostra que um terço das pessoas que terminam o
              medio na area de informatica estão no mer...
            </p>
            <p className="mt-4 text-gray-black">Ler mais...</p>
          </div>
          <div className="flex w-[500px] flex-col gap-8">
            <CardPrimary
              src={crianca}
              alt="Imagem de crianca"
              titulo="Electicidade"
              paragrafo=" Class Technologies Inc., the company that created Class,..."
            />
            <CardPrimary
              src={crianca}
              alt="Imagem de crianca"
              titulo="Electicidade"
              paragrafo=" Class Technologies Inc., the company that created Class,..."
            />
            <CardPrimary
              src={crianca}
              alt="Imagem de crianca"
              titulo="Electicidade"
              paragrafo=" Class Technologies Inc., the company that created Class,..."
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/areas">
            <button className="h-12 w-40 rounded-2xl border-[1px] border-primary-orange text-sm text-primary-orange">
              Veja mais areas
            </button>
          </Link>
        </div>
      </section>
      {/* Footer */}
      <footer className="mt-14 h-[350px] w-full bg-blue-black">
        <div className=" flex items-center justify-center">
          <Link href="/">
            <Image src={logo} alt="Imagem de Logotipo" width={80} />
          </Link>
          <div className="flex">
            <hr className="w-10 bg-slate-600" />
          </div>
          <p className="font-semibold text-white">Orientação Profissional</p>
        </div>
        <div className="mt-14 flex flex-col items-center justify-center gap-4">
          <p className="text-gray-300">Inscreva-se para receber as Noticias</p>
          <div className="flex gap-3">
            <input
              className="border-gray-600 rounded-2xl border-[1px] bg-transparent px-2 text-sm "
              placeholder="Digite o seu E-mail"
              type="email"
            />
            <Link href="#">
              <button className="h-10 w-32 rounded-2xl bg-blue text-sm text-white">
                inscreva-se
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="text-gray-300 mt-14 flex items-center justify-center gap-2">
            <p>Carreiras</p>
            <hr className="w-4" />
            <p>Política de Privacidade</p>
            <hr className="w-4 text-slate-700" />
            <p>Termos e Condições</p>
          </div>
          <p className=" text-gray-300 mt-2 flex justify-center">
            © 2021 Class Technologies Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}
