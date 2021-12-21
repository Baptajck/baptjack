import { useEffect, useState } from "react";
import "./App.scss";
import { keepTheme } from "../../utils/theme";

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../layouts/Header/Header";

import { ReactComponent as RoundShape } from "../../assets/svg/roundShape.svg";
import Skills from "../../layouts/Skills/Skills";
import About from "../../layouts/About/About";
import Projects from "../../layouts/Projects/Projects";
import Contact from "../../layouts/Contact/Contact";
import Footer from "../../layouts/Footer/Footer";

function App() {
  const [changeTheme, setChangeTheme] = useState(false);
  useEffect(() => {
    keepTheme();
  }, []);

  return (
    <div className="app">
      <span className="roundShape">
        <RoundShape />
      </span>
      <Navbar />
      <div className="containerApp">
        <Header changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
      </div>
    </div>
  );
}

export default App;
