import Image from 'next/image';
import portraitImage from '@/assets/me.jpeg';
import backgroundImage from '@/assets/background.svg';
import AboutMe from "@/app/components/about-me";
import Footer from "@/app/components/footer/footer";

const Page = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <div>
        <div className='flex md:justify-between sm:justify-center xm:px-5 md:px-0 sm:h-96 h-60 bg-page-background-dark'>
          <div className='hidden md:block'>
            <Image className='w-full min-h-full' src={backgroundImage} alt="Background colorful slash"/>
          </div>
          <div className=' w-[65%]'>
            <div className='flex w-full justify-center items-center content-end md:gap-10 lg:gap-36 sm:justify-around'>
              <div>
                <h1 className='font-semibold xl:text-5xl text-pink sm:text-4xl text-xl'>Inesa Smarhunova</h1>
                <p className='sm:text-xl xl:text-2xl pt-5 text-white text-sm '>I&apos;m a Front End Developer</p>
                <p className='text-gray-soft pt-5 sm:text-base xm:text-xs'>My goal is to craft intuitive interfaces that not only<br/> meet
                  users&apos; needs but also exceed their expectations.</p>
              </div>
              <Image src={portraitImage} alt="Portrait"
                      className='sm:h-96 sm:w-72 xm:h-60 xm:w-40'/>
            </div>
          </div>
        </div>
        <AboutMe/>
      </div >
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}
export default Page;
