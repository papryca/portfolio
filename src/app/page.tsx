import Image from 'next/image';
import portraitImage from '@/assets/me.jpeg';
import backgroundImage from '@/assets/background.svg';
import AboutMe from "@/app/components/about-me";

const Page = () => {
  return (
    <div>
      <div className='flex justify-between h-96 bg-page-background-dark'>
        <div className=''>
          <Image className='w-full min-h-full' src={backgroundImage} alt="Background colorful slash"/>
        </div>
        <div>
          <div className='flex w-full justify-center items-center gap-36'>
            <div>
              <h1 className='font-semibold text-5xl text-pink'>Inesa Smarhunova</h1>
              <p className='text-2xl pt-5 text-white'>I&apos;m a Front End Developer</p>
              <p className='text-gray-soft pt-5'>My goal is to craft intuitive interfaces that<br/>not only meet users&apos; needs but also exceed their expectations.</p>
            </div>
            <Image src={portraitImage} alt="Portrait"
                    height={384}/>
          </div>
        </div>
      </div>
      <AboutMe/>
    </div>
  )
}
export default Page;
