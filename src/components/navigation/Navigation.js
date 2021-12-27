import Navbrand from "./Navbrand";
import NavItems from "./NavItems";
// import { useMediaQuery } from "react-responsive";

import classes from "./Navigation.module.css";

const Navigation = () => {
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    // <header className={classes.navigation}>
    //   {isTabletOrMobile ? (
    //     <p>You are a tablet or mobile phone</p>
    //   ) : (
    //     <>
    //       <Navbrand />
    //       <NavItems />
    //     </>
    //   )}
    // </header>

    <header className={classes.navigation}>
      <Navbrand />
      <NavItems />
    </header>
  );
};

export default Navigation;
