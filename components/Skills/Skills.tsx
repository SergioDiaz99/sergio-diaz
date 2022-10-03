import React from "react";
import { ShowSkill } from "./ShowSkill/ShowSkill";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 pt-24 sm:pt-10">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ShowSkill skill="HTML" imageUrl="/../public/assets/skills/html.png"/>
          <ShowSkill skill="CSS" imageUrl="/../public/assets/skills/css.png"/>
          <ShowSkill skill="JavaScript" imageUrl="/../public/assets/skills/javaScript.png"/>
          <ShowSkill skill="React" imageUrl="/../public/assets/skills/react.png"/>
          <ShowSkill skill="NextJs" imageUrl="/../public/assets/skills/nextjs.png"/>
          <ShowSkill skill="Tailwind CSS" imageUrl="/../public/assets/skills/tailwind.png"/>
          <ShowSkill skill="NodeJs" imageUrl="/../public/assets/skills/node.png"/>
          <ShowSkill skill="MongoDB" imageUrl="/../public/assets/skills/mongo.png"/>
          <ShowSkill skill="Firebase" imageUrl="/../public/assets/skills/firebase.png"/>
          <ShowSkill skill="AWS" imageUrl="/../public/assets/skills/aws.png"/>
          <ShowSkill skill="GitHub" imageUrl="/../public/assets/skills/github.png"/>
          <ShowSkill skill="GitLab" imageUrl="/../public/assets/skills/gitlab.png"/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
