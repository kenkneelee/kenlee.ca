import { Inter } from "next/font/google";
import Header from "@/components/header";
import { Typography, Link } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Typography variant="h2">
        Hi! I&apos;m <Link>Kenny.</Link>
      </Typography>
      <Typography variant="h6">
        Hi there! I&apos;m Kenny, a passionate and creative full-stack web
        developer based in Toronto. I specialize in crafting modern,
        responsive, and user-friendly websites and applications that leave a
        lasting impression. With a strong foundation in front-end technologies
        like HTML, CSS, and JavaScript, coupled with expertise in backend
        frameworks such as Node.js and databases like PostGreSQL, I bring ideas to
        life from concept to deployment. Whether it&apos;s building robust APIs,
        integrating third-party services, or optimizing performance, I thrive on
        solving complex challenges and delivering scalable solutions. My goal is
        to create seamless digital experiences that not only meet but exceed
        expectations. I&apos;m constantly learning and adapting to new technologies
        to stay ahead in this ever-evolving industry. Take a look at my
        portfolio to explore some of my recent projects. Let&apos;s collaborate and
        turn your ideas into reality!
      </Typography>
    </main>
  );
}
