// pages/index.js
import * as React from "react";

import styles from "./techstack.module.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import Button from "@mui/material/Button";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const TechStack = () => {
  const technologies = [
    {
      name: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: "Javascript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },

    {
      name: "JQuery",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg",
    },
    {
      name: "ReactJs",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    },
    {
      name: "Sass",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    },
    {
      name: "NodeJs",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
    },
    {
      name: "Express",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
    },
    {
      name: "PostgreSQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
    },

    {
      name: "Ruby on Rails",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg",
    },
    {
      name: "Git",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
    },
    {
      name: "GitHub",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
  ];

  return (
    <Box className={styles.stackContainer}>
      <Typography variant="h3">My Tech Stack (So far!)</Typography>

      <Box className={styles.stack}>
        {technologies.map((tech, index) => (
          <Box key={index} className={styles.techBox}>
            <img src={tech.img} alt={tech.name} className={styles.techImg} />
            {/* <Typography variant="subtitle1">{tech.name}</Typography> */}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TechStack;
