import classes from "./ProjectsOverview.module.css";
import { Link } from "react-router-dom";

import Card from "../UI/Card";

const ProjectsOverview = () => {
  const data = [
    {
      id: 1,
      name: "Github Profile finder",
      desc: "A simple React app that allows you to search for a Github profile.",
      link: "https://gh-prof-find.vercel.app/",
    },

    {
      id: 2,
      name: "Tic Tac Toe",
      desc: "A simple Tic Tac Toe game built using React.",
      link: "https://tic-t-t.netlify.app/",
    },

    {
      id: 3,
      name: "Workout Mapper",
      desc: "A vanilla JS app for planning your outdoor runs and cycling sessions.",
      link: "https://wrkout-mper.netlify.app/",
    },
  ];

  return (
    <>
      <p className="header">My projects</p>
      <div className={classes.container}>
        {data.map((item) => (
          <Card
            id={item.id}
            link={item.link}
            name={item.name}
            desc={item.desc}
          ></Card>
        ))}
      </div>
      <p className={classes.desc}>
        <Link to="/projects" className={classes.link}>
          To checkout all my projects click here
        </Link>
      </p>
    </>
  );
};

export default ProjectsOverview;
