export function setTheme(themeName) {
  localStorage.setItem("portfolio-baptjack-theme", themeName);
  document.documentElement.className = themeName;
}

export function keepTheme() {
  if (localStorage.getItem("portfolio-baptjack-theme")) {
    localStorage.getItem("portfolio-baptjack-theme") === "theme-light"
      ? setTheme("theme-light")
      : setTheme("theme-dark");
  } else {
    setTheme("theme-light");
  }
}
