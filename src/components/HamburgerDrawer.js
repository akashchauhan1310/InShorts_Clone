import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import 'bootstrap/dist/css/bootstrap.min.css';

import MenuIcon from '@material-ui/icons/Menu'; // for hamburger

import { createMuiTheme, ThemeProvider, useMediaQuery } from '@material-ui/core';  //for dark theme

import '../App.css';
import categories from '../data/category';

const useStyles = makeStyles({
  list: {
    width: 200,
    paddingLeft:10,
    paddingRight:5,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer({setCategory}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });


  // FOR DARK MODE 
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
 

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
          <ListItem style={{fontFamily: 'cursive' , fontSize: 18}}>
           Categories {"->"}
          </ListItem>
    
      </List>

      <Divider />
      
      <List>
        {categories.map((text, index) => (
          <ListItem className='clss' style={{height:55 , borderRadius:8}} button key={text} onClick={() => setCategory(text)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <br/>
        <Divider />
      </List>

    

    </div>
  );

  return (
    <div>

      {/* Fragments is for a component to return multiple elements... */}

        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}>
            <MenuIcon style={{height:'50'}}/><span className='hamburger-text'>&nbsp;Menu</span>
          </Button>
          
          {/* for dark theme */}
          
         <ThemeProvider theme={theme}>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
          </ThemeProvider>

        </React.Fragment>
  
    </div>
  );
}