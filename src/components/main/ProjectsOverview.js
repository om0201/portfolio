import classes from "./ProjectsOverview.module.css";

import Card from "../UI/Card";

const ProjectsOverview = () => {
  const data = [
    {
      id: 1,
      name: "Github Profile finder",
      desc: "A simple React app that allows you to search for a Github profile.",
      link: "https://github-profile-finder.netlify.app/",
    },

    {
      id: 2,
      name: "Tic Tac Toe",
      desc: "A simple Tic Tac Toe game built React.",
      link: "https://tictactoe-react.netlify.app/",
    },

    {
      id: 3,
      name: "Mapty",
      desc: "A vanilla JS app for planning your outdoor runs.",
      link: "https://mapty.netlify.app/",
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
        <a className={classes.link} href="/">
          To checkout all my projects click here
        </a>
      </p>
    </>
  );
};

export default ProjectsOverview;
