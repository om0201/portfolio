import classes from "./Navbrand.module.css";
import { Link } from "react-router-dom";

const Navbrand = () => {
  return (
    <div className={classes.brand}>
      <p className={classes["brand-name"]}>
        <Link to="/home">Omang Morekar</Link>
      </p>
    </div>
  );
};

export default Navbrand;
