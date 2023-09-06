import Image from "next/image";
import Link from "next/link";

import { skillsets } from "@/data/skillset-data";
import { Fragment } from "react";
import Skill from "./skill";

export default function Skillset() {
  return (
    <Fragment>
      
      <div className="bg-indigo-700">
        <div className="bg-indigo-700 md:py-5 md:pb-10 pt-5 md:pt-10 lg:max-w-7xl lg:mx-auto">
          <Link href="#skillset" id="skillset">
            <h1
              className="text-white border-2 border-dashed border-white text-center text-4xl 
          font-bold mt-10 bg-indigo-700 mx-auto max-w-xs p-5 rounded-lg
           hover:bg-white hover:text-indigo-700 duration-200 
          "
            >
              The Skillset
            </h1>
          </Link>
          <p className="text-white text-2xl text-center justify-center mt-10 px-10">
            These are all the technologies I have worked with up-to-date
          </p>

          <div className="md:flex flex-wrap">
            {skillsets.map((item) => (
              <Skill key={item.id} skill={item} />
            ))}
          </div>
        </div>
      </div>
      
    </Fragment>
  );
}
