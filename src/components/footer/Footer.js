import classes from "./Footer.module.css";

import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const data = [
    {
      id: 1,
      tag: <FaGithub className={classes.icon} />,
      link: "https://github.com/om0201",
    },
    {
      id: 2,
      tag: <FaTwitter className={classes.icon} />,
      link: "https://twitter.com/omang_wd",
    },
    {
      id: 3,
      tag: <FaInstagram className={classes.icon} />,
      link: "https://www.instagram.com/omang_0102/",
    },
  ];
  return (
    <>
      <p className="header">My Socials</p>
      <div className={classes.container}>
        {data.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            {item.tag}
          </a>
        ))}
      </div>
    </>
  );
};

export default Footer;
