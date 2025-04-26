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

const projectData = [
  {
    date: "April 2025",
    title: "Vanilla HTML/CSS/JS - Practice",
    name: "Quizlify",
    desc: "A simple quiz web app built with vanilla HTML, CSS, and JavaScript. This project was a chance to practice working with APIs, responsive layout, and basic front-end logic & design.",
    image: "/quizlify.png",
    repo: "https://github.com/kenkneelee/quizlify",
    live: "https://kenkneelee.github.io/quizlify/"
  },
  {
    date: "Feb 2024",
    title: "Lighthouse Labs Bootcamp - Final Project",
    name: "GoForage",
    desc: "My final bootcamp group project, GoForage is a fullstack web app made using PostgreSQL, Express, React, and Node. It is designed to demystify mushroom foraging and foster a thriving community of enthusiasts.",
    image: "https://github.com/emilyem1/go-forage/blob/main/frontend/public/images/Search.png?raw=true",
    repo: "https://github.com/emilyem1/go-forage",
    live: "",
  },
  {
    date: "Oct 2023",
    title: "Lighthouse Labs Bootcamp - Midterm Project",
    name: "Programmer.com",
    desc: "My midterm bootcamp group project, Programmer is a full stack web application built with Express, Node, and PostgreSQL that connects buyers and sellers of tech-services and skills.",
    image: "https://github.com/kenkneelee/LHL-midterm-programmer.com/raw/master/docs/home_page.png",
    repo: "https://github.com/kenkneelee/LHL-midterm-programmer.com",
    live: "",
  },
  {
    date: "Sep 2023",
    title: "Lighthouse Labs Bootcamp - Project",
    name: "Tweeter",
    desc: "Tweeter is a simple, single-page Twitter clone. This project was built on a starter repository with server-side code pre-written. It provided practice for responsive design using HTML and CSS, and client-side javascript (including form handling, serialization, XSS, jQuery).",
    image: "https://github.com/kenkneelee/tweeter/raw/master/docs/responsive.gif",
    repo: "https://github.com/kenkneelee/tweeter",
    live: "",
  },
  {
    date: "Jun 2022",
    title: "The Odin Project - Assignment",
    name: "Odin Tic Tac Toe",
    desc: "A tictactoe game featuring unbeatable AI using the minmax algorithm.",
    image: "/tictactoe.png",
    repo: "https://github.com/kenkneelee/odin-tictactoe",
    live: "https://kenkneelee.github.io/odin-tictactoe/",
  },
  {
    date: "Dec 2021",
    title: "The Odin Project - Assignment",
    name: "Odin Etch-a-Sketch",
    desc: "A simple webapp etch-a-sketch made to practice DOM manipulation and CSS hover effects.",
    image: "/etchasketch.png",
    repo: "https://github.com/kenkneelee/odin-etch-a-sketch",
    live: "https://kenkneelee.github.io/odin-etch-a-sketch/",
  },
];

const Projects = () => {
  return (
    <Box className={styles.projectsContainer} id="Projects">
      <Typography variant="h3">Past Projects</Typography>

      <Box className={styles.projects}>
        <Timeline position="alternate">

          {projectData.map((project, index) => (
            <TimelineItem key={index} className={styles.timelineItem}>
              <TimelineOppositeContent className={styles.timelineItemLabel}>
                <Box>
                  <Typography variant="h4">{project.date}</Typography>
                  <Typography variant="h5">
                    {project.title}
                  </Typography>
                </Box>
              </TimelineOppositeContent>
              <TimelineSeparator className={styles.timelineSeparator}>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card className={styles.projectCard} sx={{ width: "100%", marginLeft: index % 2 === 0 ? "0" : "auto", marginRight: index % 2 === 0 ? "auto" : 0 }}>
                  <CardMedia
                    component="img"
                    alt={project.name + " preview"}
                    height="140"
                    image={project.image}
                  />
                  <CardContent className={styles.cardContent}>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.name}
                    </Typography>
                    <Typography variant="body2">
                      {project.desc}
                    </Typography>
                  </CardContent>
                  <CardActions className={styles.cardActions} sx={{ padding: "1rem", justifyContent: index % 2 === 0 ? "flex-start" : "flex-end", }}>
                    <Button
                      size="small"
                      href={project.repo}
                    >
                      View Repo
                    </Button>
                    {project.live && (
                      <Button
                        size="small"
                        href={project.live}
                      >
                        Live Preview
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}

        </Timeline>
      </Box>
    </Box>
  );
};

export default Projects;
