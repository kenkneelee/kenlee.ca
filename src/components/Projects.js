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
                  image="https://private-user-images.githubusercontent.com/89105909/325483645-e374524e-24f8-419e-9057-be20e6ae6cd4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQwMjMxNDAsIm5iZiI6MTcxNDAyMjg0MCwicGF0aCI6Ii84OTEwNTkwOS8zMjU0ODM2NDUtZTM3NDUyNGUtMjRmOC00MTllLTkwNTctYmUyMGU2YWU2Y2Q0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDI1VDA1MjcyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNmZDRkZDhkNzU5NmIwODc5MTRmZTlhZDM1Mzc2MDU3MmNiZjgwNjQ2N2JmOGZhYmY1MDRhMTU4NDYzNWNkNWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Cf55ZdNIlAgYUlEq-IZTQiGFsBohHLGM-a7Mq3z8Vks"
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
                  image="https://private-user-images.githubusercontent.com/89105909/325485267-b611ae6b-14c4-4a16-83b2-ea47cdb29d6d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQwMjM2MDAsIm5iZiI6MTcxNDAyMzMwMCwicGF0aCI6Ii84OTEwNTkwOS8zMjU0ODUyNjctYjYxMWFlNmItMTRjNC00YTE2LTgzYjItZWE0N2NkYjI5ZDZkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDI1VDA1MzUwMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZkZDU5NTRiOGNkNmMwYjI3NWNmMDRlYWJkMzI1OTJiYzZjYjI3NTlkMzlmMjU1MmM3MWY4MWFhYjJkNWFlZWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.4UarAN2SdjKSV22Eoa_tSoQBnwv91Q7fXwHeTrFqRzg"
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
