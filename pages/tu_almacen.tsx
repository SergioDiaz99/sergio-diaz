import React from "react";
import Image from "next/image";
import TuAlmacenImage from "../public/assets/projects/TuAlmacen.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const TuAlmacen = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={TuAlmacenImage}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Tu Almacen</h2>
          <h3>Next JS / Tailwind / Redux</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="pt-4">
            {`I developed this e-commerce website using Next.js for the frontend
            framework, leveraging its server-side rendering capabilities for
            improved performance. I incorporated Tailwind CSS to streamline the
            styling process with utility-first CSS classes, ensuring responsive
            design and a modern UI. Redux was implemented for state management,
            allowing efficient handling of the application's global state,
            especially in managing cart functionality, user sessions, and
            product data. The combination of these technologies resulted in a
            fast, scalable, and maintainable web platform.`}
          </p>
          <a href="https://tualmacen.com.ar/" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node.js
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default TuAlmacen;
