import Image from "next/image";
import {ICard} from "@/app/components/card/card-tabs";

interface CardProps {
  card: ICard;
  reversed: boolean;
}
const Card = ({ card, reversed }: CardProps) => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div
        className={`flex flex-col gap-10 xm:items-center md:items-start md:flex-row ${reversed ? 'md:flex-row-reverse' : ''}`}
      >
        <a
          href={card.link}
          target="_blank"
          className="flex-[2] shadow-deep md:max-w-[36rem] md:h-full"
          style={{borderColor: card.bgColor}}
        >
          <Image
            className="object-cover shadow-lg transition-all duration-300 hover:scale-105"
            src={card.image}
            alt="Project's screen"

          />

        </a>

        <div className="flex flex-col justify-start flex-[1]">
          <h5 className="mb-2 font-bold text-text tracking-tight text-sm sm:text-2xl">
            {card.name}
          </h5>
          <p className="mb-3 font-normal text-text xm:font-xs md:text-lg">
            {card.date}
          </p>
          <button
            onClick={() => window.open(card.GitHubLink, "_blank")}
            className="relative w-24 inline-block text-red text-lg font-semibold text-start focus:outline-none
         after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-red
         after:w-0 hover:after:w-[100%] after:transition-all after:duration-300"
          >
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};



export default Card;

