import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
 
  root:{
    position:"sticky"
  },
  bar:{
    paddingLeft: "5%",
    textDecoration: "none"
  },
  a:{
    textDecoration: "none"
  }

}));


function NavBar() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar >
        <Link  className={classes.bar} to="/">    <Typography variant="h6" className={classes.title}>
            HOME
          </Typography> </Link>
        <Link className={classes.bar}  to="/about">    <Typography variant="h6" className={classes.title}>
            ABOUT
          </Typography> </Link>
        <Link className={classes.bar} to="/product">    <Typography variant="h6" className={classes.title}>
            PRODUCT
          </Typography> </Link>
         
      
  
       
        </Toolbar>
      </AppBar>
  
    </div>
  );

  


}

export default NavBar;
