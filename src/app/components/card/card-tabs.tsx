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
}

const cards: ICard[] = [
  {
    index: 1,
    image: screenshot1,
    name: "Health App",
    date:'This dashboard is designed for families to track their medical appointments, monitor their medical expenses, and receive reminders to stay informed and organized. Users can conveniently compare their expenditures over time, manage upcoming appointments, and set reminders to ensure they stay up-to-date and never miss important events.',
    link: "https://precious-mochi-becaaa.netlify.app/",
    GitHubLink: "https://github.com/papryca/Health-app",

  },
  {
    index: 2,
    image: screenshot2,
    name: "Pokemon-searcher",
    date:'This is an interactive website designed for Pokemon enthusiasts, providing the ability to explore and manage their favorite Pokemon.',
    link: "https://illustrious-lily-e1e57a.netlify.app/",
    GitHubLink: "https://github.com/papryca/pokemon-api/tree/master",
  },
  {
    index: 3,
    image: screenshot3,
    name: "Shelter for pets",
    date:'This is an interactive website designed for animal lovers, providing the ability to explore and support their favorite furry friends.',
    link: "https://dancing-genie-313cb6.netlify.app/shelter",
    GitHubLink: "https://github.com/papryca/shelter",

  },
];

export default cards;
