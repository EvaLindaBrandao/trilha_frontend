import { FaFileInvoice } from "react-icons/fa";
 
type Props = {
  title: string,
  text: string
}

export function CardInfo({title,text}: Props){
  return(
    <div className=" w-[270px] p-4 rounded-lg flex flex-col gap-6 items-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ">
      <div className="rounded-full w-14 h-14 bg-blue flex items-center justify-center mt-[-40px]">
        <FaFileInvoice size={30} color="#FFF" />
      </div>
      <h2 className="text-secondary-blue font-medium text-xl ">{title}</h2>
      <p className="text-center text-gray-black ">{text}</p>
    </div>
  )
}