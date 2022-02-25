import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, ListItem, List } from "@mui/material"

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function Links() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <React.Fragment>
      <Link to="/" className="navbar-brand">
        My first MERN Application
      </Link>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Menu />
        </ListItemIcon>
        <ListItemText primary="Opciones" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          <ListItem>
            <Link to="/movies/list" className="nav-link">
              List Movies
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/movies/create" className="nav-link">
              Create Movie
            </Link>
          </ListItem>
        </List>
      </Collapse>
    </React.Fragment>
  )
}

export default Links