import classes from "./BlogsOverview.module.css";

import Card from "../UI/Card";

import { Link } from "react-router-dom";

const BlogsOverview = () => {
  const data = [
    {
      id: 1,
      name: "let, var, const",
      desc: "let, var and const are new keywords in JavaScript introduced in ES2015. They are used to declare variables and have different scopes.",
      link: "https://omangmorekar.hashnode.dev/var-let-and-const-in-java-script",
    },

    {
      id: 2,
      name: "Combinators in CSS",
      desc: "Combinators are useful to create more specific CSS selectors. Combinators combine two or more selectors to create a new selector.",
      link: "https://omangmorekar.hashnode.dev/combinators-in-css",
    },

    {
      id: 3,
      name: "Block and inline elements",
      desc: "Understanding block and inline elements in CSS is important to understand how to create a responsive website.",
      link: "https://omangmorekar.netlify.app/blogs/blog1/understanding_html_elements.html",
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
        <Link className={classes.link} to="/blogs">
          To see more blogs click here
        </Link>
      </p>
    </>
  );
};

export default BlogsOverview;
