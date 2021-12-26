import mainSvg from "../../assets/svg/main.svg";
import classes from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div className={classes["section-intro"]}>
      <p className={classes.desc}>
        I am a front-end web developer with a passion for creating clean and
        elegant single page applications (SPA<small>s</small>).
      </p>

      <img className={classes.img} src={mainSvg} alt="main-svg" />
    </div>
  );
};

export default Introduction;
