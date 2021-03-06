/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import s from "./SwitchTheme.module.scss";
import { setTheme } from "../../utils/theme";

import Toggle from "../Toggle/Toggle";
import Icon from "../Icon/Icon";

import { ReactComponent as Sun } from "../../assets/svg/sun.svg";
import { ReactComponent as Moon } from "../../assets/svg/moon.svg";

function SwitchTheme({ changeTheme = false, setChangeTheme = () => {} }) {
  const [_, setTogClass] = useState("dark");
  let theme = localStorage.getItem("portfolio-baptjack-theme");

  const handleOnClick = () => {
    if (localStorage.getItem("portfolio-baptjack-theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass("light");
    } else {
      setTheme("theme-dark");
      setTogClass("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("portfolio-baptjack-theme") === "theme-dark") {
      setTogClass("dark");
      setChangeTheme(true);
    } else {
      setTogClass("light");
      setChangeTheme(false);
    }
  }, [theme]);

  return (
    <div className={s.container}>
      <Icon Icon={Sun} size="medium" classname={s.sun} />
      <span onClick={handleOnClick} className={s.switchTheme}>
        <Toggle changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
      </span>
      <Icon Icon={Moon} size="medium" classname={s.moon} />
    </div>
  );
}

export default SwitchTheme;
