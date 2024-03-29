import { useState } from "react";
import axios from "axios";
import cx from "classnames";
import s from "./Contact.module.scss";
import BarLoader from "react-spinners/BarLoader";

import Icon from "../../components/Icon/Icon";

import { ReactComponent as Logo } from "../../assets/svg/logo-light.svg";
import { ReactComponent as DotsPink } from "../../assets/svg/dotsPink.svg";
import { ReactComponent as Mail } from "../../assets/svg/mail.svg";

function Contact() {
  const [user, setUser] = useState({
    lastname: "",
    sub: "",
    email: "",
    message: "",
  });
  const [messageSend, setMessageSend] = useState(false);
  const [loading, setLoading] = useState(false);

  const btnSend = cx({
    [`${s.btn}`]: !messageSend,
    [`${s.sendMessage}`]: messageSend,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("https://portfolio-baptjack.herokuapp.com/contact", user)
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          setMessageSend(true);
          setUser({
            lastname: "",
            sub: "",
            email: "",
            message: "",
          });
        }
        setTimeout(() => {
          setMessageSend(false);
        }, 5000);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className={s.container}>
      <span className={s.dots}>
        <DotsPink />
      </span>
      <div className={s.content} id="Contact">
        <p className={s.intro}>Me contacter</p>
        <h3 className={s.title}>
          Une idée ? Un projet ? Vous voulez en savoir plus ?
        </h3>
        <h3 className={s.title}>N'hésitez pas à me contacter !</h3>
        <span className={s.icon}>
          <a href="mailto:baptiste.parville@protonmail.com">
            <Mail />
          </a>
        </span>
        {/* <form
          id="contact-form"
          method="POST"
          onSubmit={(e) => sendEmail(e)}
          className={s.form}
        >
          <div className={s.formDiv}>
            <label htmlFor="lastname" className={s.label}>
              Nom, prénom <span className={s.required}>*</span>
            </label>
            <input
              type="text"
              className={s.formInput}
              name="lastname"
              id="lastname"
              value={user.lastname}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className={s.formDiv}>
            <label htmlFor="email" className={s.label}>
              Adresse mail <span className={s.required}>*</span>
            </label>
            <input
              type="email"
              className={s.formInput}
              name="email"
              id="email"
              pattern=".+\@.+\..+"
              value={user.email}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className={s.formDiv}>
            <label htmlFor="sub" className={s.label}>
              Sujet du message <span className={s.required}>*</span>
            </label>
            <input
              type="text"
              className={s.formInput}
              value={user.sub}
              name="sub"
              id="sub"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className={s.formDiv}>
            <label htmlFor="message" className={s.label}>
              Message <span className={s.required}>*</span>
            </label>
            <textarea
              className={s.formInput}
              rows="5"
              value={user.message}
              name="message"
              id="message"
              onChange={(e) => handleChange(e)}
              required
            ></textarea>
          </div>
          <button type="submit" className={btnSend}>
            {loading ? (
              <BarLoader
                css={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto",
                }}
                size={20}
                color={"#fff"}
                loading={loading}
              />
            ) : (
              <span>
                {messageSend ? "Message envoyé" : "Envoyer le message"}
              </span>
            )}
          </button>
        </form> */}
        <div className={s.navigation}>
          <span className={s.logo}>
            <Icon
              Icon={Logo}
              size="large"
              inverted={
                localStorage.getItem("portfolio-baptjack-theme") ===
                "theme-dark"
              }
              callback={() => {
                window.open("#");
              }}
            />
          </span>
          <div className={s.anchors}>
            <a className={s.anchor} href="#Header">
              Accueil
            </a>
            <a className={s.anchor} href="#Competences">
              Compétences
            </a>
            <a className={s.anchor} href="#Projects">
              Projets
            </a>
            <a className={s.anchor} href="#About">
              A propos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
