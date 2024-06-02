'use client'

import { useEffect, useState } from 'react';

import Image from "next/image";


  
import { FaSearch } from "react-icons/fa";

import { PostMentees } from '@/components/postMessege';
import ChatMentors from '@/components/chatMentors';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ChatMentees from '@/components/chatMentees';


const messegeMentees = () => {
  const [chat, setchat] = useState<any>([{},{},{}])
  

  return (

    <>

      
          <DefaultLayout>
          <div className="flex h-96 w-full">
  <div className='bg-cover bg-center w-1/2 flex flex-col  '>

    <div className="flex items-center p-1 fixed w-96 border-primary-blue outline-primary-orange mt-10 mr-4 ml-2 rounded mb-6 border-2">
      <FaSearch className="text-primary-orange" />
      <input
        type="text"
        placeholder="Pesquisar"
        className="indent-2 bg-transparent outline-none rounded"
      />
    </div>

    <div className='h-96 w-[470px] fixed mt-32 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400'>
      {chat.map((index: any) => (
        <PostMentees key={index} />
      ))}
    </div>

  </div>

  <ChatMentees />
</div>

      </DefaultLayout>



      </>  

     
    
  )
}

export default messegeMentees