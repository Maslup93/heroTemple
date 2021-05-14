import React, {useState} from "react";
import {AppBar,Toolbar,IconButton,Typography,Button,makeStyles, MenuItem} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import './navbar.css';

const NavBar = () => {
    

    const useStyles= makeStyles(theme=>({
        offset: theme.mixins.toolbar
    }))

    const classes = useStyles()

    
  return (
    <div>
      <AppBar position="static" className="navbar">
        <Toolbar>
           
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon/>
          </IconButton>
          
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
