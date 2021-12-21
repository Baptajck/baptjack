import s from "./Skills.module.scss";
import data from "./data";

function Skills() {
  return (
    <div className={s.container} id="Competences">
      <h2 className={s.title}>Compétences</h2>
      <div className={s.containerCards}>
        {data.map(
          ({ Icon, title, bgColorIcon, colorIcon, description, skills }, i) => (
            <div className={s.card} key={i}>
              <div className={s.headerCard}>
                <span
                  className={s.headerCardSvg}
                  style={{
                    "--bgColorIcon": bgColorIcon,
                    "--colorIcon": colorIcon,
                  }}
                >
                  <Icon />
                </span>
                <h3 className={s.headerCardTitle}>{title}</h3>
              </div>
              <p className={s.text}>{description}</p>
              <ul className={s.containerSkills}>
                {skills.map(({ title, Icon }, i) => (
                  <li key={i} title={title} className={s.skill}>
                    {<Icon />}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Skills;
