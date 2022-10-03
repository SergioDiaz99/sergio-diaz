import React from "react";
import Image from "next/image";

interface Props {
  skill?: string;
  imageUrl?: string | any;
}

export const ShowSkill: React.FC<Props> = ({ skill, imageUrl }) => {
  return (
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image alt={`/${skill}`} src={imageUrl} width={64} height={64} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>{skill}</h3>
          </div>
        </div>
      </div>
  );
};
