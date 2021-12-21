import SwitchTheme from "../../components/SwitchTheme/SwitchTheme";
import s from "./Footer.module.scss";

function Footer({ changeTheme, setChangeTheme }) {
  return (
    <div className={s.container}>
      <div className={s.containerTheme}>
        <h4 className={s.titleTheme}>Thème</h4>
        <SwitchTheme
          changeTheme={changeTheme}
          setChangeTheme={setChangeTheme}
        />
      </div>
      <p>2021 Baptiste Parville</p>
    </div>
  );
}

export default Footer;
