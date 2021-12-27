import React from "react";

import classes from "./Project.module.css";

import projectSvg from "../../assets/svg/Projects.svg";

const data = [
  {
    id: 1,
    link: "google.com",
    heading: "Mapty",
    desc: "Mapty is a web application that helps you to find the best place to eat in your area. You can search for restaurants, cafes, bars, pubs, etc. and get the best deals.",
  },

  {
    id: 2,
    link: "google.com",
    heading: "Tic Tac Toe",
    desc: "Tic Tac Toe is a game where you play against the computer. You can play with a friend or with the computer.",
  },

  {
    id: 3,
    link: "google.com",
    heading: "Github Finder",
    desc: "Github Finder is a web application that helps you to find the best github user in your area. You can search for users by name, location, etc.",
  },

  {
    id: 4,
    link: "google.com",
    heading: "Tracalorie",
    desc: "Tracalorie is a web application that helps you to find the best place to eat in your area. You can search for restaurants, cafes, bars, pubs, etc. and get the best deals.",
  },

  {
    id: 5,
    link: "google.com",
    heading: "Micorposts",
    desc: "Micorposts is a web application that helps you to find the best place to eat in your area. You can search for restaurants, cafes, bars, pubs, etc. and get the best deals.",
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

      {data.map((item) => (
        <div className={classes.card}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
            className={classes.blog}
          >
            <p className={classes.heading}>{item.heading}</p>
            <p className={classes.desc}>{item.desc}</p>
          </a>
        </div>
      ))}
    </>
  );
};

export default Project;
