import Card from "@/app/components/card/card";
import cards from "@/app/components/card/card-tabs";

const AboutMe =() => {
  return (
    <div className=' bg-gray-50'>
      <div className=' pt-10 grid grid-rows-1 items-end mx-10 h-auto'>
        <div>
          <h2 className='text-3xl underline decoration-yellow pb-5'>My Portfolio</h2>
        </div>
        <div className=' flex items-center gap-10 flex-col py-10'>
          {cards.map(card =>( <Card card={card} key={card.index}/>))}
      </div>
      </div>
    </div>

  )
}
export default AboutMe;
