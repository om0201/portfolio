import { FaHtml5, FaCss3, FaJs, FaReact, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiReactrouter, SiRedux } from "react-icons/si";

import classes from "./Technologies.module.css";

const Technologies = () => {
  return (
    <>
      <p className="header">Technologies I Use</p>
      <ul className={classes["list-icons"]}>
        <li className={classes.icon}>
          <FaHtml5 />
        </li>
        <li className={classes.icon}>
          <FaCss3 />
        </li>
        <li className={classes.icon}>
          <FaJs />
        </li>
        <li className={classes.icon}>
          <FaReact />
        </li>
      </ul>
      <p className={classes.description}>
        I use React Router <SiReactrouter /> for routing purposes. I also have
        working knowledge of redux <SiRedux /> and redux-toolkit which is a
        newer way of developing using redux.
        <br />
        <br />
        Besides this I am learning nodeJs <FaNode /> for backend integration of
        a React app and NextJS which is a react frame-work. I am also learning
        Tailwind CSS <SiTailwindcss /> which is a utility-first CSS framework.
      </p>
    </>
  );
};

export default Technologies;
