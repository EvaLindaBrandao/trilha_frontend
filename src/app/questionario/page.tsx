"use client";
import { ButtonSecundary } from "@/components/Landing/Buttons/button-secundary";
import { Header } from "@/components/Landing/Header";
import { QuestionService } from "@/services/QuestionService";
import { Question } from "@/types/question";
import { Response } from "@/types/response";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Questionario() {
  const [questions, setQuestions] = useState<Question[]>([{id: 0, text: '', response: []}]);
  const [selectedResponse, setSelectedResponse] = useState<Response>()
  const [totalPoint, setTotalPoint] = useState(0)
  const [index, setIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    QuestionService.getAll().then(data => {
        setQuestions(data)
    });
}, []);

function addIndex() {
    const isLastIndexQuiz = index === questions.length - 1;

    if(!selectedResponse) return toast.warn('Seleciona uma responsta !')

    setTotalPoint(totalPoint + selectedResponse.point)
    if (!isLastIndexQuiz) setIndex(index + 1);

    if (isLastIndexQuiz) {
      const averagePoint = totalPoint / questions.length
      router.push(`/carreiras/recomendadas/${averagePoint}`);
    }
  }

  function removeIndex() {
    if (index != 0) {
      setIndex(index - 1);
    }
  }

  return (
    <>
      <Header />
      <div className="mx-auto flex w-[600px] flex-col items-center gap-6">
        <h2 className="mt-8 text-center text-2xl font-medium text-secondary-blue">
          <span className="text-primary-orange">Questionário</span> para
          Recomendação de Área <br /> Profissional{" "}
        </h2>
        <p className="text-center  text-gray-black">
          Por favor, responda com atenção às perguntas apresentadas.
        </p>
      </div>

      <div className="mx-auto mt-9 flex w-[600px] flex-col items-center gap-6 px-8">
        <div className="w-full rounded-lg p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <p>{questions[index].text}</p>
        </div>
        <div className="flex w-full flex-col  gap-2">
          {questions[index].response.map((response, i) => {
            return (
              <div 
                key={i}
                onClick={()=> setSelectedResponse(response)}
                className={`flex h-14 w-full items-center rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:bg-primary-orange focus:bg-primary-orange cursor-pointer hover:text-white ${selectedResponse?.id === response.id && 'bg-primary-orange text-white'}`}
              >
                <p className="p-3">{response.text}</p>
              </div>
            );
          })}
        </div>
        <div className="mb-16 flex w-full justify-between ">
          <ButtonSecundary
            text="Anterior"
            bgColor="bg-secondary-blue"
            textColor="text-white"
            onClick={removeIndex}
          />
          <ButtonSecundary text="Proximo" onClick={addIndex} />
        </div>
      </div>
    </>
  );
}
