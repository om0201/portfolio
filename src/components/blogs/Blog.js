import React from "react";

import classes from "./Blog.module.css";

const data = [
  {
    id: 1,
    link: "google.com",
    heading: "let, var, const",
    desc: "let, var and const are new keywords in JavaScript introduced in ES2015. They are used to declare variables and have different scopes.",
  },

  {
    id: 2,
    link: "google.com",
    heading: "combinators",
    desc: "Combinators are useful to create more specific CSS selectors. Combinators combine two or more selectors to create a new selector.",
  },

  {
    id: 3,
    link: "google.com",
    heading: "The Context API",
    desc: "The Context API is a new API for React 16.8. It allows you to create a context object and use it to share data between components.",
  },

  {
    id: 4,
    link: "google.com",
    heading: "Semantics, Inline & Block elements in HTML",
    desc: "Block and Inline Elements are two different ways to define HTML elements. They have specific behaviour and are used to define the layout of your page.",
  },
];

const Blog = () => {
  return (
    <>
      <p className="header">My blogs</p>

      <p className={classes.para}>
        Writing blogs helps me to grasp concepts properly. I also learned to
        read documentation which in turn helped me to write better code.
      </p>

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

export default Blog;
