import { Inter } from "next/font/google";
import Header from "@/components/header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import ParticleBackground from "@/components/ParticleBackground";
import { Typography, Link } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <ParticleBackground class="particleBackground"/>
      <Header></Header>
      <Hero></Hero>
      <TechStack></TechStack>
      <Projects></Projects>
    </main>
  );
}
