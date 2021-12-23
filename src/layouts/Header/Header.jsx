import s from "./Header.module.scss";

import profil from "../../assets/images/profil.webp";
import { ReactComponent as DotsPurple } from "../../assets/svg/dotsPurple.svg";

import SwitchTheme from "../../components/SwitchTheme/SwitchTheme";

function Header({ changeTheme, setChangeTheme }) {
  return (
    <div className={s.container}>
      <div>
        <h1 className={s.title}>
          Hello, je suis <span className={s.emphase}>développeur</span> web
        </h1>
        <p className={s.text}>
          Je suis <span className={s.emphase}>Baptiste Parville</span>,
          développeur fullstack en région Lilloise. Curieux, passionné et
          dynamique, je vous propose ici mon portfolio regroupant mes
          compétences et mes projets. N'hésitez pas à me contacter pour de plus
          amples informations. <br />{" "}
          <span className={s.emphase}>Au plaisir d'échanger avec vous !</span>
        </p>
        <div className={s.containerTheme}>
          <p className={s.titleTheme}>Thème</p>
          <SwitchTheme
            changeTheme={changeTheme}
            setChangeTheme={setChangeTheme}
          />
        </div>
      </div>
      <div className={s.containerImg}>
        <span className={s.dotsPurple}>
          <DotsPurple />
        </span>
        <img src={profil} alt="image_de_profil" className={s.img} />
      </div>
    </div>
  );
}

export default Header;
