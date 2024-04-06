// pages/index.js
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow : 1}}>
            Kenny Lee
          </Typography>

          <Button color="inherit">About Me</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Contact Me</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
