import { useEffect, useState } from 'react';

import Image from "next/image";
import { IoSendSharp } from "react-icons/io5";









const ChatMentors= () => {
  
 
  


  return (

    <div className="  bg-gray-100   w-1/2  mb-18 h-[550px]   p-4  flex flex-col">
      <div className="   flex-1 ">
        
          <div key="" className="mb-2 flex flex-row gap-4 mt-4">
            <div>
              <Image
                src="https://github.com/iamvictoriaventura.png"
                alt=""
                width={40}
                height={40}
                className=" rounded-full"
              />
            </div>

            <div className="flex-1 bg-gray-200 mt-4 p-2 rounded-lg border-2 border-primary-blue  ">jhjhjjhjh</div>



          </div>
        
      </div>
      <div className="flex items-center fixed bottom-0 w-[470px] right-6 bg-primary-blue h-16 p-4 " >
        <input
          type="text"
          className="flex-1 mr-2 text-base  rounded text-primary-orange border-2  border-primary-blue 
          outline-1 outline-primary-orange  s p-1 "
          placeholder="Escrever mensagem..."
        />
        <button
         
          className="bg-transparent px-4 py-2  w-auto rounded-md  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <IoSendSharp className='text-primary-orange size-6' />
        </button>


        
      </div>

      
    </div>
  );
};

export default ChatMentors