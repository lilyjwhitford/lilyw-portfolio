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

export const projects = [
  {
    id: 1,
    name: "Mrkt",
    description: "Online farmers market.",
    techStack: "React, Express, TailwindCSS",
    images: [mrkt1, mrkt2, mrkt3, mrkt4, mrkt5, mrkt6],
    platform: "mobile",
  },
  {
    id: 2,
    name: "Lost&Confused",
    description: "Wiki-maps project.",
    techStack: "Javascript, Express, SaSS",
    images: [lnf1, lnf2, lnf3, lnf4],
    platform: "desktop",
  },
  {
    id: 3,
    name: "PhotoLabs",
    description: "PhotoLabs Project",
    techStack: "React, idk, idk",
    images: [pl1, pl2, pl3, pl4],
    platform: "desktop",
  },
];
