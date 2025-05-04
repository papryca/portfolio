import screenshot1 from '@/assets/page1.png';
import screenshot2 from '@/assets/page2.png';
import screenshot3 from '@/assets/page3.png';
import {StaticImageData} from "next/image";


export interface ICard {
  index: number;
  image: StaticImageData;
  name: string;
  date: string;
  link: string;
  GitHubLink: string;
  bgColor: string;
}

const cards: ICard[] = [
  {
    index: 0,
    image: screenshot1,
    name: "Health App",
    date:'This dashboard is designed for families to track their medical appointments, monitor their medical expenses, and receive reminders to stay informed and organized. Users can conveniently compare their expenditures over time, manage upcoming appointments, and set reminders to ensure they stay up-to-date and never miss important events.',
    link: "https://precious-mochi-becaaa.netlify.app/",
    GitHubLink: "https://github.com/papryca/Health-app",
    bgColor: "#F8B294 ",

  },
  {
    index: 1,
    image: screenshot2,
    name: "Pokemon-searcher",
    date:'This is an interactive resource for Pokémon fans that not only informs but also allows users to personalize their experience by collecting their favorite Pokémon in one place. The project uses PokeAPI to retrieve data about Pokémon, including their types, abilities, and other characteristics. Data is loaded dynamically, and users can add Pokémon to their favorites.',
    link: "https://illustrious-lily-e1e57a.netlify.app/",
    GitHubLink: "https://github.com/papryca/pokemon-api/tree/master",
    bgColor: " #a4785b",
  },
  {
    index: 2,
    image: screenshot3,
    name: "Shelter for pets",
    date:'This is an interactive website designed for animal lovers, providing the ability to explore and support their favorite furry friends.',
    link: "https://dancing-genie-313cb6.netlify.app/shelter",
    GitHubLink: "https://github.com/papryca/shelter",
    bgColor: "#F5D864",

  },
];

export default cards;
