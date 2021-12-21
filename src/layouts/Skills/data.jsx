import { ReactComponent as Screen } from "../../assets/svg/screen-light.svg";
import { ReactComponent as Server } from "../../assets/svg/server-light.svg";
import { ReactComponent as Note } from "../../assets/svg/note-light.svg";
import { ReactComponent as Book } from "../../assets/svg/book.svg";

import { ReactComponent as Javascript } from "../../assets/svg/javascript.svg";
import { ReactComponent as React } from "../../assets/svg/react.svg";
import { ReactComponent as Redux } from "../../assets/svg/redux.svg";
import { ReactComponent as Sass } from "../../assets/svg/sass.svg";

import { ReactComponent as NodeJs } from "../../assets/svg/node-js.svg";
import { ReactComponent as MySQL } from "../../assets/svg/mysql.svg";
import { ReactComponent as Mongo } from "../../assets/svg/mongodb.svg";

import { ReactComponent as Scrum } from "../../assets/svg/scrum.svg";
import { ReactComponent as Trello } from "../../assets/svg/trello.svg";
import { ReactComponent as Gitlab } from "../../assets/svg/gitlab.svg";
import { ReactComponent as Github } from "../../assets/svg/github-color.svg";

import { ReactComponent as CodeWars } from "../../assets/svg/codewars-color.svg";
import { ReactComponent as Rootme } from "../../assets/svg/rootme-color.svg";
import { ReactComponent as Google } from "../../assets/svg/google.svg";
import { ReactComponent as StackOverflow } from "../../assets/svg/stack-overflow.svg";

const data = [
  {
    Icon: Screen,
    title: "Front End",
    description:
      "Elaboration, conception graphique, intégration, référencement SEO, contenu dynamique, composants autonomes, cycle de vie, logique d’interaction, optimisation des performances",
    bgColorIcon: "#E9F9FF",
    colorIcon: "#58CFFF",
    skills: [
      { title: "Javascript", Icon: Javascript },
      { title: "React", Icon: React },
      { title: "Redux", Icon: Redux },
      { title: "Sass", Icon: Sass },
    ],
  },
  {
    Icon: Server,
    title: "Back End",
    description:
      "Applications réseau évolutives, construction d’une API, gestion côté serveur, base de données, requêtes SQL, noSQL",
    bgColorIcon: "#FFF4E4",
    colorIcon: "#FFC261",
    skills: [
      { title: "NodeJs", Icon: NodeJs },
      { title: "MySQL", Icon: MySQL },
      { title: "MongoDB", Icon: Mongo },
    ],
  },
  {
    Icon: Note,
    title: "Gestion",
    description: "Outil de développement, commandes git, trello, méthode scrum",
    bgColorIcon: "#FFF5F6",
    colorIcon: "#F66565",
    skills: [
      { title: "Scrum", Icon: Scrum },
      { title: "Trello", Icon: Trello },
      { title: "Gitlab", Icon: Gitlab },
      { title: "Github", Icon: Github },
    ],
  },
  {
    Icon: Book,
    title: "Apprentissage",
    description:
      "Amélioration de la logique, apprentissage constant, veille technologique",
    bgColorIcon: "#F4F3FF",
    colorIcon: "#665AFF",
    skills: [
      { title: "CodeWars", Icon: CodeWars },
      { title: "Rootme", Icon: Rootme },
      { title: "Google", Icon: Google },
      { title: "StackOverflow", Icon: StackOverflow },
    ],
  },
];

export default data;
