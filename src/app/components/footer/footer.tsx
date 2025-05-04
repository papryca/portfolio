import linkedIn from '@/assets/LI-Logo.png';
import github from '@/assets/github-mark.png';
import Image from "next/image";
const Footer = () => {
  return (
    <section className='w-full max-w-[1200px] m-auto'>
      <span className='h-[0.1px] bg-page-background-dark block mt-28 mx-auto'></span>
      <footer className=" max-w-screen-lg h-24">
        <div className="w-full h-full mx-auto max-w-screen-xl px-4 flex justify-around flex-col items-center sm:flex-row md:justify-between">
      <span className="text-sm text-text">
        <a href="mailto:email@shelter.com">
                        <h4 className="font-light text-text sm:text-xl lg:text-lg">inessasmorgunova@gmail.com</h4>
                    </a>
    </span>
          <ul
            className="flex flex-wrap gap-10 items-center self-end text-sm font-medium text-text justify-center w-full sm:justify-end">
          <li>
              <a
                href="https://www.linkedin.com/in/inesa-smarhunova-466b5a28a/" target="_blank"
                className="hover:underline me-4">
                <Image className="sm:w-32 w-24 h-6"
                       src={linkedIn}
                       alt="LinkedIn image"/></a>
            </li>
            <li>
              <a
                href="https://github.com/papryca" target="_blank"
                className="hover:underline me-4">
                <Image className="sm:w-12 w-8 rounded-t-lg"
                       src={github}
                       alt="Github image"/></a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  )
}
export default Footer
