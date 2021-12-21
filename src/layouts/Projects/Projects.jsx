import s from "./Projects.module.scss";

import { ReactComponent as ArrowRight } from "../../assets/svg/arrow-right.svg";

import Likemovie from "../../assets/images/likemovie.png";
import Becomepote from "../../assets/images/BeComePote.png";
import Spreadthelive from "../../assets/images/spreadthelive.png";

function Projects() {
  const data = [
    {
      title: "LikeMovie",
      description: "Votre ticket s'il vous plait",
      img: Likemovie,
      link: "https://baptajck.github.io/likemovie/#/",
    },
    {
      title: "BeComePote",
      description: "L'app où tu papotes",
      img: Becomepote,
      link: "http://becomepote.fr/",
    },
    {
      title: "SpreadTheLive",
      description: "Appli de captation vidéo",
      img: Spreadthelive,
      link: "https://spreadthelive.com/",
    },
  ];
  return (
    <div id="Projects">
      <div className={s.rectangularShape}></div>
      <div className={s.container}>
        <div className={s.header}>
          <h2 className={s.title}>Mes Projets</h2>
          <p className={s.text}>
            Découvrir tous mes projets sur
            <a
              href="https://github.com/Baptajck?tab=repositories"
              target="_blank"
              className={s.link}
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/Baptajck?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className={s.arrow}
            >
              <ArrowRight />
            </a>
          </p>
        </div>
        <div className={s.projects}>
          {data.map(({ title, img, description, link }, i) => (
            <div key={i} className={s.containerImg}>
              <img className={s.img} src={img} alt={title} />
              <div className={s.info}>
                <div>
                  <h4 className={s.infoTitle}>{title}</h4>
                  <p className={s.description}>{description}</p>
                </div>
                <a
                  href={link}
                  target="_blank"
                  className={s.button}
                  rel="noreferrer"
                >
                  Consulter
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
