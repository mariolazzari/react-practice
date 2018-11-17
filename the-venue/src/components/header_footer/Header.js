import React, { Component } from "react";

// MUI components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

// MUI icons
import MenuIcon from "@material-ui/icons/Menu";

// components
import SideDrawer from "./SideDrawer";

class Header extends Component {
  state = {
    drawerOpen: false
  };

  toggleDrawer = value => this.setState({ drawerOpen: value });

  render() {
    const { drawerOpen } = this.state;

    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#2f2f2f",
          boxShadow: "none",
          padding: "10px 0px"
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>

          <IconButton arialabel="Menu" color="inherit">
            <MenuIcon onClick={() => this.toggleDrawer(true)} />
          </IconButton>
        </Toolbar>
        <SideDrawer open={drawerOpen} onClose={this.toggleDrawer} />
      </AppBar>
    );
  }
}

export default Header;
