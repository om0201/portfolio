import classes from "./Blogs.module.css";

import Card from "../UI/Card";

const Blogs = () => {
  const data = [
    {
      id: 1,
      name: "let, var, const",
      desc: "let, var and const are new keywords in JavaScript introduced in ES2015. They are used to declare variables and have different scopes.",
      link: "https://www.google.com",
    },

    {
      id: 2,
      name: "Combinators in CSS",
      desc: "Combinators are useful to create more specific CSS selectors. Combinators combine two or more selectors to create a new selector.",
      link: "https://www.google.com",
    },

    {
      id: 3,
      name: "The Context API",
      desc: "The Context API is a new API for React 16.8. It allows you to create a context object and use it to share data between components.",
      link: "https://www.google.com",
    },
  ];

  return (
    <>
      <p className="header">My blogs</p>
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
          To see more blogs click here
        </a>
      </p>
    </>
  );
};

export default Blogs;
