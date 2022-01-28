import React from "react";

import { FaLink, FaGithub } from "react-icons/fa";

import classes from "./Project.module.css";

import projectSvg from "../../assets/svg/Projects.svg";

const data = [
  {
    id: 1,
    github: "https://github.com/om0201/workout-mapper",
    link: "https://wrkout-mper.netlify.app/",
    heading: "Workout Mapper",
    desc: "Workout Mapper is a web application that helps you to track your out-door runs and cycling sessions.",
  },

  {
    id: 2,
    github: "https://github.com/om0201/tic-tac-toe",
    link: "https://tic-t-t.netlify.app/",
    heading: "Tic Tac Toe",
    desc: "A simple tic-ta-toe game built using React.",
  },

  {
    id: 3,
    github: "https://github.com/om0201/github-finder",
    link: "https://gh-prof-find.vercel.app/",
    heading: "Github Finder",
    desc: "Github Finder is a web application that helps you to find github users. You can also view additional information about a particular user.",
  },

  {
    id: 4,
    github: "https://github.com/om0201/calorie-tracker",
    link: "https://caltrac.netlify.app/",
    heading: "Tracalorie",
    desc: "Tracalorie is a web application that helps you keep track of your meals, it is built using vanlla JS.",
  },

  {
    id: 5,
    github: "https://github.com/om0201/feedback",
    link: "https://fbuir.netlify.app/",
    heading: "Feedback UI",
    desc: "A sample feedback form built using React.",
  },
];

const Project = () => {
  return (
    <>
      <div className={classes["section-intro"]}>
        <p className={classes.info}>
          I use a project based learning approach to learn new technologies.
          This helps me to learn new technologies faster and to get better at
          them. Below are some of my projects.
        </p>

        <img className={classes.img} src={projectSvg} alt="main-svg" />
      </div>

      <p className="header">My Projects</p>

      <section className={classes.container}>
        {data.map((item) => (
          <div className={classes.card}>
            <h3>{item.heading}</h3>

            <p className={classes.description}>{item.desc}</p>

            <div className={classes.links}>
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                <FaLink />
              </a>

              <a
                key={item.id}
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Project;
