import linkedIn from '@/assets/LI-Logo.png';
import github from '@/assets/github-mark.png';
import Image from "next/image";
const Footer = () => {
  return (
    <section>
      <footer className="bg-white shadow dark:bg-page-background-dark flex-shrink-0 w-full mt-10">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-dark sm:text-center dark:text-gray-soft">
        <a href="mailto:email@shelter.com">
                        <h4 className="text-xl">inessasmorgunova@gmail.com</h4>
                    </a>
    </span>
          <ul
            className="flex flex-wrap gap-10 items-center mt-3 text-sm font-medium text-gray-soft dark:text-gray-soft sm:mt-0">
          <li>
              <a
                href="https://www.linkedin.com/in/inesa-smarhunova-466b5a28a/" target="_blank"
                className="hover:underline me-4 md:me-6">
                <Image className="w-32 rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-s-lg"
                       src={linkedIn}
                       alt="Background colorful slash"/></a>
            </li>
            <li>
              <a
                href="https://github.com/papryca" target="_blank"
                className="hover:underline me-4 md:me-6">
                <Image className="w-12 rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg"
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
