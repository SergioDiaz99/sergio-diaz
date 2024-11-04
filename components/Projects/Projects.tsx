import Image from "next/image";
import Link from "next/link";
import React from "react";
import marusiaImg from "../../public/assets/projects/marusia.jpg";
import TuAlmacen from "../../public/assets/projects/TuAlmacen.png";
import netflixImg from "../../public/assets/projects/netflix.jpg";
import nxtpImg from "../../public/assets/projects/nxtp-background.jpg";
import twitchImg from "../../public/assets/projects/twitch.jpg";

import ProjectItem from "./ProjectItem/ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full py-24 sm:py-16 md:py-28">
      <div className="max-w-[1240px] mx-auto px-2 pt-2">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">{"What I've Build"}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Tu Almacen"
            backgroundImg={TuAlmacen}
            projectUrl="/tu_almacen"
            tech="Next JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Next JS"
          />
          <ProjectItem
            title="Marusia - Real Estate"
            backgroundImg={marusiaImg}
            projectUrl="/marusia"
            tech="Next JS"
          />
          <ProjectItem
            title="Nxtp"
            backgroundImg={nxtpImg}
            projectUrl="/nxtp"
            tech="React JS"
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
