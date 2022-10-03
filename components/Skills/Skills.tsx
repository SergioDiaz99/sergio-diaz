import React from "react";
import { ShowSkill } from "./ShowSkill/ShowSkill";
import htmlImg from "../../public/assets/skills/html.png";
import cssImg from "../../public/assets/skills/css.png";
import JSImg from "../../public/assets/skills/javascript.png";
import reactImg from "../../public/assets/skills/react.png";
import nextImg from "../../public/assets/skills/nextjs.png";
import tailwindImg from "../../public/assets/skills/tailwind.png";
import nodeImg from "../../public/assets/skills/node.png";
import mongoImg from "../../public/assets/skills/mongo.png";
import firebaseImg from "../../public/assets/skills/firebase.png";
import awsImg from "../../public/assets/skills/aws.png";
import githubImg from "../../public/assets/skills/github.png";
import gitlabImg from "../../public/assets/skills/gitlab.png"

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 pt-24 sm:pt-10">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ShowSkill skill="HTML" imageUrl={htmlImg}/>
          <ShowSkill skill="CSS" imageUrl={cssImg}/>
          <ShowSkill skill="JavaScript" imageUrl={JSImg}/>
          <ShowSkill skill="React" imageUrl={reactImg}/>
          <ShowSkill skill="NextJs" imageUrl={nextImg}/>
          <ShowSkill skill="Tailwind CSS" imageUrl={tailwindImg}/>
          <ShowSkill skill="NodeJs" imageUrl={nodeImg}/>
          <ShowSkill skill="MongoDB" imageUrl={mongoImg}/>
          <ShowSkill skill="Firebase" imageUrl={firebaseImg}/>
          <ShowSkill skill="AWS" imageUrl={awsImg}/>
          <ShowSkill skill="GitHub" imageUrl={githubImg}/>
          <ShowSkill skill="GitLab" imageUrl={gitlabImg}/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
