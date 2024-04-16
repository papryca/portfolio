import Card from "@/app/components/card/card";
import cards from "@/app/components/card/card-tabs";

const AboutMe =() => {
  return (
    <div className=' bg-gray-50'>
      <div className='h-96 pt-10 grid grid-rows-1 items-end mx-10 h-auto'>
        <div>
          <h2 className='text-3xl underline decoration-pink pb-5'>My Portfolio</h2>
        </div>
        <div className=' flex justify-between items-end gap-10 flex-col lg:mr-32 py-10'>
          {cards.map(card =>( <Card card={card} key={card.index}/>))}
      </div>
      </div>
    </div>

  )
}
export default AboutMe;
