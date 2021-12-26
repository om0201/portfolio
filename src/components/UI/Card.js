import classes from "./Card.module.css";

const Card = ({ id, link, name, desc }) => {
  return (
    <div key={id} className={classes.card}>
      <div className={classes.cardBody}>
        <a
          className={classes.link}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={classes.heading}>{name}</p>
          <div className={classes.border} />
          <p className={classes.desc}>{desc}</p>
        </a>
      </div>
    </div>
  );
};

export default Card;
