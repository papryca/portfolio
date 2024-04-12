import Card from "@/app/components/card/card";
import Footer from "@/app/components/footer/footer";
import cards from "@/app/components/card/card-tabs";

const AboutMe =() => {
  return (
    <div className='mt-10'>
      <div className='h-96 w-screen bg-gray-50 pt-10 grid grid-rows-1 items-end min-h-screen mx-10'>
        <div>
          <h2 className='text-3xl underline decoration-pink '>My Portfolio</h2>
        </div>
        <div className=' flex justify-between items-end gap-10 flex-col mr-32'>
          {cards.map(card =>( <Card card={card} key={card.index}/>))}
      </div>
      </div>
      <Footer></Footer>
    </div>

  )
}
export default AboutMe;
