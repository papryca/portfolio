'use client';
import Image from 'next/image';
import backgroundImage from '@/assets/blob.svg';
import AboutMe from "@/app/components/about-me";
import Footer from "@/app/components/footer/footer";
import linkedIn from "@/assets/LI-Logo.png";

const Page = () => {

  const textWords = [
    "Front-End", "Developer", "crafting", "games,", "dashboards,", "and", "eCommerce", "sites.",
    "Driven", "by", "clean", "design", "and", "intuitive", "UX."
  ];

  return (
    <div className='flex flex-col justify-between font-inter'>
      <div className=' w-full max-w-[1200px] m-auto  xm:px-6 lg:px-8'>
        <div className="relative min-h-screen bg-white ">
          <div className="fixed top-[-10%] right-[-6%] -z-10 w-[60vw] h-[55vw] pointer-events-none">
            <Image
              src={backgroundImage}
              alt="Background blob"
              className="w-full h-full object-cover"
            />
          </div>


          <div className="relative flex flex-col justify-start items-start  mt-10 sm:w-3/4 xm:w-full md:gap-44 xm:gap-32">
            <h1>
              {["Inesa", "Smarhunova"].map((word, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-fade-up-scale sm:text-base xm:text-base xl:text-lg"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                {word}&nbsp;
              </span>
              ))}
            </h1>

            <p className="tracking-wide text-black font-light ">
              {textWords.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block opacity-0 animate-fade-up-scale xm:text-2xl sm:text-4xl md:leading-[1.3] md:text-[46px] ${
                    word === "Front-End" || word === "Developer" ? "font-semibold text-black" : "font-light"
                  }`}
                  style={{animationDelay: `${index * 120}ms`}}
                >{word}&nbsp;</span>
              ))}

            </p>
            <div className=' flex flex-col justify-start  gap-4'>
              <a href="mailto:email@shelter.com">
                <h4
                  className="font-light hover:underline hover:text-gray-dark inline-block opacity-0 animate-fade-up-scale xm:text-base sm:text-lg md:text-lg"
                  style={{animationDelay: "120ms"}}
                >
                  inessasmorgunova@gmail.com
                </h4></a>
              <a
                href="https://www.linkedin.com/in/inesa-smarhunova-466b5a28a/" target="_blank"
                className="hover:underline me-4">
                <Image className="h-6 inline-block opacity-0 animate-fade-up-scale xm:w-20 sm:w-30  "
                       style={{animationDelay: "140ms"}}
                       src={linkedIn}
                       alt="LinkedIn logo"/></a>
            </div>
          </div>


        </div>

        <AboutMe/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Page;

