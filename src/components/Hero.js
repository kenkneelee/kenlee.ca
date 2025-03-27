// pages/index.js
import * as React from "react";

import styles from "./hero.module.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Hero = () => {
  return (
    <Box className={styles.hero}>
      <Box className={styles.heroText}>
        <Typography variant="h4" className={styles.heroIntro}>
          Hi! I&apos;m <Link href="https://www.linkedin.com/in/kenny-lee-/">Kenny.</Link>
        </Typography>
        <Typography variant="subtitle1" id="bodytext">
          I&apos;m a passionate and creative full-stack web developer based in
          Toronto. I specialize in crafting modern, responsive, and
          user-friendly websites and applications that leave a lasting
          impression. My goal is to create seamless digital experiences that not
          only meet but exceed expectations. I&apos;m constantly learning and
          adapting to new technologies to stay ahead in this ever-evolving
          industry. Take a look at my portfolio to explore some of my recent
          projects. Let&apos;s collaborate and turn your ideas into reality!
        </Typography>
      </Box>

    </Box>
  );
};

export default Hero;
