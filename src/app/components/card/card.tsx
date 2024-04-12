import Image from "next/image";
import {ICard} from "@/app/components/card/card-tabs";

interface CardProps {
  card: ICard
}
const Card =({card}:CardProps)=> {
  return (
    <section className='md:max-w-[70%]'>
      <div className="flex bg-white border border-gray-dark rounded-lg shadow md:flex-row hover:bg-page-background-light dark:border-back dark:bg-page-background-dark dark:hover:bg-page-background-grey">
        <a href={card.link} target="_blank" className='flex'>
          <Image className="w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg" src={card.image}
                 alt="Background colorful slash"/>
          <div className="flex flex-col justify-start p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.name}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.date}</p>
          </div>
        </a>
        <a href={card.GitHubLink} target="_blank"
           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-pink dark:hover:bg-gray-soft dark:focus:ring-blue-800">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
               fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </section>
  )
}
export default Card
