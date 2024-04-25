// pages/index.js
import * as React from "react";

import styles from "./projects.module.css";

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

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Projects = () => {
  return (
    <Box className={styles.projectsContainer} id="Projects">
      <Typography variant="h3">Past Projects</Typography>

      <Box className={styles.projects}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="#dbdbdb">
              <Box>
                <Typography variant="h4">Feb 2024</Typography>
                <Typography variant="h5">
                  Lighthouse Labs Bootcamp - Final Project
                </Typography>
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card className={styles.projectCard} sx={{ width: "60%", mr: 1 }}>
                <CardMedia
                  component="img"
                  alt="GoForage preview"
                  height="140"
                  image="https://github.com/emilyem1/go-forage/blob/main/frontend/public/images/Search.png?raw=true"
                />
                <CardContent className={styles.cardContent}>
                  <Typography gutterBottom variant="h5" component="div">
                    GoForage
                  </Typography>
                  <Typography variant="body2">
                    GoForage is a fullstack web app made using PostgreSQL,
                    Express, React, and Node. It is designed to demystify
                    mushroom foraging and foster a thriving community of
                    enthusiasts.
                  </Typography>
                </CardContent>
                <CardActions sx={{ padding: "1rem" }}>
                  <Button
                    size="small"
                    href="https://github.com/emilyem1/go-forage"
                  >
                    View Repo
                  </Button>
                </CardActions>
              </Card>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="#dbdbdb">
              <Box>
                <Typography variant="h4">Oct 2023</Typography>
                <Typography variant="h5">
                  Lighthouse Labs Bootcamp - Midterm Project
                </Typography>
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card
                className={styles.projectCard}
                sx={{ width: "60%", marginLeft: "auto" }}
              >
                <CardMedia
                  component="img"
                  alt="Programmer.com preview"
                  height="140"
                  image="https://github.com/kenkneelee/LHL-midterm-programmer.com/raw/master/docs/home_page.png"
                />
                <CardContent className={styles.cardContent}>
                  <Typography gutterBottom variant="h5" component="div">
                    Programmer.com
                  </Typography>
                  <Typography variant="body2">
                    Programmer is a full stack web application built with
                    Express, Node and PostgreSQL that connects buyers and sellers
                    of tech-services and skills.
                  </Typography>
                </CardContent>
                <CardActions sx={{ padding: "1rem", justifyContent: "right" }}>
                  <Button
                    size="small"
                    href="https://github.com/kenkneelee/LHL-midterm-programmer.com"
                  >
                    View Repo
                  </Button>
                </CardActions>
              </Card>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="#dbdbdb">
              <Box>
                <Typography variant="h4">Sep 2023</Typography>
                <Typography variant="h5">Lighthouse Labs Bootcamp - Project</Typography>
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card className={styles.projectCard} sx={{ width: "60%" }}>
                <CardMedia
                  component="img"
                  alt="Tweeter preview"
                  height="140"
                  image="https://github.com/kenkneelee/tweeter/raw/master/docs/responsive.gif"
                />
                <CardContent className={styles.cardContent}>
                  <Typography gutterBottom variant="h5" component="div">
                    Tweeter
                  </Typography>
                  <Typography variant="body2">
                    Tweeter is a simple, single-page Twitter clone. This project
                    was built on a starter repository with server-side code
                    pre-written. It provided practice for responsive design
                    using HTML and CSS, and client-side javascript (including
                    form handling, serialization, XSS, jQuery).
                  </Typography>
                </CardContent>
                <CardActions sx={{ padding: "1rem" }}>
                  <Button
                    size="small"
                    href="https://github.com/kenkneelee/tweeter"
                  >
                    View Repo
                  </Button>
                </CardActions>
              </Card>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="#dbdbdb">
              <Box>
                <Typography variant="h4">Jun 2022</Typography>
                <Typography variant="h5">The Odin Project - Assignment</Typography>
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card
                className={styles.projectCard}
                sx={{ width: "60%", marginLeft: "auto" }}
              >
                <CardMedia
                  component="img"
                  alt="Odin Tic Tac Toe preview"
                  height="140"
                  image="/tictactoe.png"
                />
                <CardContent className={styles.cardContent}>
                  <Typography gutterBottom variant="h5" component="div">
                    Odin Tic Tac Toe
                  </Typography>
                  <Typography variant="body2">
                    A tictactoe game featuring unbeatable AI using the minmax
                    algorithm.
                  </Typography>
                </CardContent>
                <CardActions sx={{ padding: "1rem", justifyContent: "right" }}>
                  <Button
                    size="small"
                    href="https://github.com/kenkneelee/odin-tictactoe"
                  >
                    View Repo
                  </Button>
                  <Button
                    size="small"
                    href="https://kenkneelee.github.io/odin-tictactoe/"
                  >
                    Live Preview
                  </Button>
                </CardActions>
              </Card>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="#dbdbdb">
              <Box>
                <Typography variant="h4">Dec 2021</Typography>
                <Typography variant="h5">The Odin Project - Assignment</Typography>
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card className={styles.projectCard} sx={{ width: "60%" }}>
                <CardMedia
                  component="img"
                  alt="Tweeter preview"
                  height="140"
                  image="/etchasketch.png"
                />
                <CardContent className={styles.cardContent}>
                  <Typography gutterBottom variant="h5" component="div">
                    Odin Etch-a-Sketch
                  </Typography>
                  <Typography variant="body2">
                    A simple webapp etch-a-sketch made to practice DOM
                    manipulation and CSS hover effects.
                  </Typography>
                </CardContent>
                <CardActions sx={{ padding: "1rem" }}>
                  <Button
                    size="small"
                    href="https://github.com/kenkneelee/odin-etch-a-sketch"
                  >
                    View Repo
                  </Button>
                  <Button
                    size="small"
                    href="https://kenkneelee.github.io/odin-etch-a-sketch/"
                  >
                    Live Preview
                  </Button>
                </CardActions>
              </Card>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Box>
  );
};

export default Projects;
