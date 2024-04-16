import linkedIn from '@/assets/LI-Logo.png';
import github from '@/assets/github-mark.png';
import Image from "next/image";
const Footer = () => {
  return (
    <section>
      <footer className="bg-white shadow dark:bg-page-background-dark w-full mt-10 h-24">
        <div className="w-full h-full mx-auto max-w-screen-xl px-4 flex sm:flex-row md:justify-between justify-around flex-col items-center">
      <span className="text-sm text-gray-dark dark:text-gray-soft">
        <a href="mailto:email@shelter.com">
                        <h4 className="md:text-xl text-xs">inessasmorgunova@gmail.com</h4>
                    </a>
    </span>
          <ul
            className="flex flex-wrap gap-10 items-center self-end text-sm font-medium text-gray-soft dark:text-gray-soft justify-end w-full">
          <li>
              <a
                href="https://www.linkedin.com/in/inesa-smarhunova-466b5a28a/" target="_blank"
                className="hover:underline me-4">
                <Image className="sm:w-32 w-24 rounded-t-lg h-6"
                       src={linkedIn}
                       alt="Background colorful slash"/></a>
            </li>
            <li>
              <a
                href="https://github.com/papryca" target="_blank"
                className="hover:underline me-4">
                <Image className="sm:w-12 w-8 rounded-t-lg"
                       src={github}
                       alt="Background colorful slash"/></a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  )
}
export default Footer
