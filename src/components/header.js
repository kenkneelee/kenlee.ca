// pages/index.js
import * as React from "react";

import styles from "./header.module.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";

const Header = () => {
  return (
    <AppBar
      className={styles.headerContainer}
      position="static"
      color="primary"
    >
      <Toolbar sx={{ gap: "2rem" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Button className={styles.logoButton} href="/">
            <Box>
              <Typography variant="h3" className={styles.logoName}>
                Kenny Lee
              </Typography>
              <Typography variant="h7" className={styles.logoName}>
                Full-Stack Web Developer
              </Typography>
            </Box>
          </Button>
        </Box>

        {/* <Button href="/testRoute">
          About Me
        </Button> */}
        <Button href="#Projects">Projects</Button>
        <Box className={styles.socials}>
          <Button href="https://github.com/kenkneelee">
            <GitHubIcon></GitHubIcon>
          </Button>
          <Button href="https://www.linkedin.com/in/kenny-lee-/">
            <LinkedInIcon></LinkedInIcon>
          </Button>
          {/* <Button>
            <EmailIcon></EmailIcon>
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
