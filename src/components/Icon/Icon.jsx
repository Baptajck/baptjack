import cx from "classnames";
import s from "./Icon.module.scss";

function Icon({
  Icon = null,
  size = "small",
  inverted = false,
  hamburger = false,
  callback = () => {},
  title = "",
  classname = "",
}) {
  const classes = cx(
    { [`${s.small}`]: size === "small" },
    { [`${s.medium}`]: size === "medium" },
    { [`${s.large}`]: size === "large" },
    { [`${s.inverted}`]: inverted },
    { [`${s.hamburger}`]: hamburger },
    classname
  );

  return (
    <div className={classes} onClick={callback}>
      <span className={s.icon} title={title}>
        <Icon />
      </span>
    </div>
  );
}

export default Icon;
