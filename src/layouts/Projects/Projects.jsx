import s from "./Projects.module.scss";

import { ReactComponent as ArrowRight } from "../../assets/svg/arrow-right.svg";

import Likemovie from "../../assets/images/likemovie.webp";
import Becomepote from "../../assets/images/BeComePote.webp";
import Spreadthelive from "../../assets/images/spreadthelive.webp";
import TalentPicker from "../../assets/images/talentPicker.png";

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
    {
      title: "TalentPicker",
      description: "Appli de recrutement",
      img: TalentPicker,
      link: "https://www.talentpicker.io/",
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
              <span className={s.arrow}>
                <ArrowRight />
              </span>
            </a>
          </p>
        </div>
        <div className={s.projects}>
          {data.map(({ title, img, description, link }, i) => (
            <div key={i} className={s.containerImg}>
              <img className={s.img} src={img} alt={title} />
              <div className={s.info}>
                <div>
                  <h3 className={s.infoTitle}>{title}</h3>
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
