import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Linkedin from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#237",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#fff",
      "&:hover": {
        fill: "white",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<Facebook />} className={classes.root} />
      <BottomNavigationAction icon={<Twitter />} className={classes.root} />
      <BottomNavigationAction icon={<Linkedin />} className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
