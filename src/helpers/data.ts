import mrkt1 from "../assets/mrkt/mrkt1.png";
import mrkt2 from "../assets/mrkt/mrkt2.png";
import mrkt3 from "../assets/mrkt/mrkt3.png";
import mrkt4 from "../assets/mrkt/mrkt4.png";
import mrkt5 from "../assets/mrkt/mrkt5.png";
import mrkt6 from "../assets/mrkt/mrkt6.png";
import lnf1 from "../assets/wiki-maps/lnf1.png";
import lnf2 from "../assets/wiki-maps/lnf2.png";
import lnf3 from "../assets/wiki-maps/lnf3.png";
import lnf4 from "../assets/wiki-maps/lnf4.png";
import pl1 from "../assets/photolabs/pl1.png";
import pl2 from "../assets/photolabs/pl2.png";
import pl3 from "../assets/photolabs/pl3.png";
import pl4 from "../assets/photolabs/pl4.png";
import jsLogo from "../assets/jsLogo.png";
import reactLogo from "../assets/reactLogo.png";
import tailwindcssLogo from "../assets/tailwindcssLogo.png";
import nodejsLogo from "../assets/nodejsLogo.png";
import tsLogo from "../assets/tsLogo.png";
import postgresqlLogo from "../assets/postgresqlLogo.png";
import figmaLogo from "../assets/figmaLogo.png";
import gitLogo from "../assets/gitLogo.png";


export const projects = [
  {
    id: 1,
    name: "Mrkt",
    description: "Mrkt is a full-stack mobile mirtual farmers market allowing users to shop local vendors from the comfort of their own home. Users can arrange for pick up or delivery of their items at a time convenient to them via live chat. Mrkt allows vendors and local producers of any size to reach a large customer base with ease and convenience.",
    techStack: "React, Express, Node.js, TailwindCSS, Socket.io, PostgreSQL, Leaflet.js",
    images: [mrkt1, mrkt2, mrkt3, mrkt4, mrkt5, mrkt6],
    platform: "mobile",
    github: "https://github.com/lilyjwhitford/final-project",
  },
  {
    id: 2,
    name: "Lost&Confused",
    description: "Lost&Confused is a full-stack web application that allows users to collaboratively create and edit maps. Users can add points of interest to their maps, which are then displayed on a shared map, and add maps to their favourites. Lost&Confused is designed to be a fun and interactive way to share information about interesting locations.",
    techStack: "Javascript, Express, Node.js, SaSS, PostgreSQL, Leaflet.js",
    images: [lnf1, lnf2, lnf3, lnf4],
    platform: "desktop",
    github: "https://github.com/lilyjwhitford/Wiki-Map",
  },
  {
    id: 3,
    name: "PhotoLabs",
    description: "PhotoLabs is an engaging React-based single-page application (SPA) designed to offer users an immersive photo-viewing experience. By leveraging a pre-existing API, PhotoLabs has an interactive frontend where users can explore and interact with a variety of photos.",
    techStack: "React, Express, PostgreSQL, Node.js, SaSS",
    images: [pl1, pl2, pl3, pl4],
    platform: "desktop",
    github: "https://github.com/lilyjwhitford/PhotoLabs",
  },
];


type Logo = {
  src: string;
  alt: string;
  title: string;
};

export const logos: Record<string, Logo> = {
  javascript: {
    src: jsLogo,
    alt: "Javascript",
    title: "Javascript",
  },
  react: {
    src: reactLogo,
    alt: "React",
    title: "React",
  },
  tailwindcss: {
    src: tailwindcssLogo,
    alt: "Tailwind CSS",
    title: "Tailwind CSS",
  },
  nodejs: {
    src: nodejsLogo,
    alt: "Node.js",
    title: "Node.js",
  },
  typescript: {
    src: tsLogo,
    alt: "Typescript",
    title: "Typescript",
  },
  postgresql: {
    src: postgresqlLogo,
    alt: "PostgreSQL",
    title: "PostgreSQL",
  },
  figma: {
    src: figmaLogo,
    alt: "Figma",
    title: "Figma",
  },
  git: {
    src: gitLogo,
    alt: "Git",
    title: "Git",
  },
};