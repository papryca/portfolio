import Image from "next/image";
import {ICard} from "@/app/components/card/card-tabs";

interface CardProps {
  card: ICard
}
const Card =({card}:CardProps)=> {
  return (
    <section className='lg:max-w-[70%]'>
      <div className="min-h-64 flex rounded-2xl shadow-lg sm:flex-row xm:flex-col bg-page-background-dark hover:bg-page-background-grey">
        <a href={card.link} target="_blank" className='flex xm:flex-col sm:flex-row'>
          <Image className="sm:w-[45%] rounded-t-lg h-auto xm:w-auto" src={card.image}
                 alt="Project's screen"/>
          <div className="flex flex-col justify-start p-4 leading-normal">
            <h5 className="mb-2 sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-sm">{card.name}</h5>
            <p className="mb-3 font-normal sm:text-sm md:text-base text-gray-700 dark:text-gray-400 text-xs">{card.date}</p>
          </div>
        </a>
        <a href={card.GitHubLink} target="_blank"
           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:outline-none bg-pink hover:bg-yellow">
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
