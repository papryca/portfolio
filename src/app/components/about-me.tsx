import Card from "@/app/components/card/card";
import cards from "@/app/components/card/card-tabs";

const AboutMe = () => {
  return (
    <div className="">
      <div className="pt-20 xm:pt-0">
        <div className="flex flex-col gap-24">
          {cards.map((card, index) => (
            <div
              key={card.index}
              className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className="">
                <Card card={card} reversed={index % 2 !== 0} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default AboutMe;

