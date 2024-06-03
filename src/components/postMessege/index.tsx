import Image from "next/image";


export const PostMentees = () => {
  
  
  
  
  return (
    <>
      <section className="   hover:bg-white rounded shadow " >
        <div className="flex items-center gap-2 ">
          <Image
            src="https://github.com/BorderLinne.png"
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-bold">Mentorados </p>
            <p className="absolute top-0 right-0 ml-5 mr-5 rounded-full text-primary-orange ">12h</p>

            <p>Estou bem...</p>
            <div className="mt-8">
              <p className="flex items-center gap-2 text-sm  ">
              </p>
            </div>
          </div>
        </div>

      </section>

    </>
  );
};
