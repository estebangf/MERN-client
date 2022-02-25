import React, { Component } from 'react'
import { AppBar, Container, Toolbar } from "@mui/material"

import Logo from './Logo'
import Links from './Links'


class NavBar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Logo />
          <Links />
        </Toolbar>
      </AppBar>
    )
  }
}

export default NavBar