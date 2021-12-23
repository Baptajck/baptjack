import s from "./About.module.scss";

import { ReactComponent as Linkedin } from "../../assets/svg/linkedin-color.svg";
import { ReactComponent as Github } from "../../assets/svg/github-color.svg";
import { ReactComponent as Download } from "../../assets/svg/download.svg";
import pdf from "../../assets/Baptiste_Parville-CV.pdf";

function About() {
  const data = [
    {
      link: "https://www.linkedin.com/in/baptiste-parville/",
      text: "LinkedIn",
      Icon: <Linkedin />,
    },
    {
      link: "https://github.com/Baptajck",
      text: "GitHub",
      Icon: <Github />,
    },
  ];
  return (
    <div id="About">
      <div className={s.rectangularShape}></div>
      <div className={s.container}>
        <p className={s.intro}>Ravi de vous rencontrer.</p>
        <h2 className={s.title}>
          Hello, je suis Baptiste Parville, développeur fullstack.
        </h2>
        <p className={s.description}>
          Passionné par les nouvelles technologies depuis de nombreuses années,
          mon goût pour le développement web commence un peu par hasard après
          quelques cours pris sur OpenClassrooms. Je réalise alors une
          reconversion professionnelle en suivant une formation intensive chez
          O'clock. Après un an de travail sur des projets perso, je décide de
          consolider mes connaissances par une formation en alternance avec
          l'école 3WA.
        </p>
        <p className={s.description}>
          J'effectue mon alternance chez une jeune start-up Lilloise où j'ai à
          charge le développement de l'application de captation vidéo.
          Intervenant aussi bien sur le visuel que sur tout le back de
          l'application, je dispose aujourd'hui d'une réelle expertise
          fullstack.
        </p>
        <a className={s.downloadLink} href={pdf} download>
          <button className={s.btn}>
            Télécharger mon CV{" "}
            <span className={s.icon}>
              <Download />
            </span>
          </button>
        </a>
        <div className={s.networks}>
          {data.map(({ link, text, Icon }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noreferrer"
              className={s.network}
            >
              <span className={s.networkIcon}>{Icon}</span>
              <span className={s.networkName}>{text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
