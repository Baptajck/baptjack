import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.scss";
import cx from "classnames";

import { useWindowSize } from "../../utils/windowSize";

import { ReactComponent as Logo } from "../../assets/svg/logo-light.svg";
import { ReactComponent as Hamburger } from "../../assets/svg/hamburger-menu.svg";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/linkedin.svg";
import { ReactComponent as Github } from "../../assets/svg/github.svg";
import { ReactComponent as CodeWars } from "../../assets/svg/codewars.svg";
import { ReactComponent as RootMe } from "../../assets/svg/rootme.svg";

import Icon from "../Icon/Icon";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const classes = cx(s.navigation, { [`${s.openNavigation}`]: showMenu });

  return (
    <>
      <div className={s.container} id="Header">
        <div className={classes} role="banner">
          <div className={s.logoContainer}>
            <Icon
              Icon={Logo}
              size="large"
              inverted={
                localStorage.getItem("portfolio-baptjack-theme") ===
                "theme-dark"
              }
            />
          </div>
          <div className={s.anchor}>
            <a href="#Competences">Compétences</a>
            <a href="#Projects">Projets</a>
            <a href="#About">A propos</a>
            <a href="#Contact">Contact</a>
          </div>
          <div className={s.networks}>
            <Icon Icon={Linkedin} size="small" title="LinkedIn" />
            <Icon Icon={Github} size="small" title="GitHub" />
            <Icon Icon={CodeWars} size="small" title="CodeWars" />
            <Icon Icon={RootMe} size="small" title="RootMe" />
          </div>
          <div className={s.navigationContainer}>
            {showMenu ? (
              <Icon
                Icon={Close}
                size="small"
                hamburger
                callback={() => setShowMenu(!showMenu)}
              />
            ) : (
              <Icon
                Icon={Hamburger}
                size="small"
                hamburger
                callback={() => setShowMenu(!showMenu)}
              />
            )}
          </div>
        </div>
        {showMenu && (
          <>
            <nav role="navigation" className={s.menu}>
              <a href="#Competences" onClick={() => setShowMenu(!showMenu)}>
                Compétences
              </a>
              <a href="#Projects" onClick={() => setShowMenu(!showMenu)}>
                Projets
              </a>
              <a href="#About" onClick={() => setShowMenu(!showMenu)}>
                A propos
              </a>
              <a href="#Contact" onClick={() => setShowMenu(!showMenu)}>
                Contact
              </a>
            </nav>
            <div className={s.bg} onClick={() => setShowMenu(!showMenu)}></div>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
