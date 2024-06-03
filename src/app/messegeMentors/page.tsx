'use client'

import { useEffect, useState } from 'react';

import Image from "next/image";


  
import { FaSearch } from "react-icons/fa";

import { PostMessage } from '@/components/postMentees';
import ChatMentees from '@/components/chatMentees';
import ChatMentors from '@/components/chatMentors';
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";




const messegeMentors = () => {
   

    
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
      {chat.map((arrayInterno: any, index: any) => (
        <PostMessage key={index} />
      ))}
    </div>

  </div>

  <ChatMentors />
</div>

      </DefaultLayout>



      </>  

     
    
  )
}

export default messegeMentors