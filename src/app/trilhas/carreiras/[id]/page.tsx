'use client'
// Components
import { Header } from "@/components/Landing/Header";
import Image from "next/image";

// Image
import { Trail } from "@/types/trail";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { TrailService } from "@/services/TrailService";
import Link from "next/link";
import { toast } from "react-toastify";

export default function CarreiaraDetalhes() {
  const [trails, setTrails] = useState<Trail[]>([])
  const { id } = useParams()
  const careerId = Number(id)
  const router = useRouter()

  useEffect(() =>{
    TrailService.getByCareer(careerId).then(data => setTrails(data))
  },[careerId])

  if(!trails.length) return

  return (
    <>
      <Header />
      <div className="p-8 max-w-[1300px] m-auto">
        <div>
          <h2 className="text-2xl font-semibold text-secondary-blue mb-8">
            Trilhas de <span className="text-primary-orange">{trails[0].career?.name}</span>
          </h2>
        </div>
        <div className="flex gap-8 flex-wrap justify-between">
          {trails.map(trail => (
            <div key={trail.id} className="h-64 flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md flex-1 max-w-[38rem] min-w-[36rem]">
                <div
                  className="w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                  <Image
                    src={trail.imageSrc}
                    alt="card-image" className="object-cover w-full h-full"
                    unoptimized
                    width={100}
                    height={100} 
                  />
                </div>
                <div className="p-6">
                  <h6
                    className="block mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 ">
                    {trail.mentor?.user.name}
                  </h6>
                  <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {trail.name}
                  </h4>
                  <p className="h-20 block mb-4 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 text-ellipsis overflow-hidden">
                    {trail.description}
                  </p>
                  <Link href={`/trilhas/${trail.id}/info`} className="inline-block">
                    <button
                      className="flex items-center gap-2 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                      type="button"
                    >
                      Ler mais
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        stroke-width="2" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
