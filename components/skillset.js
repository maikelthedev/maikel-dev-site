import Image from "next/image";
import Link from "next/link";

import { skillsets } from "@/data/skillset-data";
import { Fragment } from "react";

export default function Skillset() {
  return (
    <Fragment>
      <div className="bg-indigo-700 md:py-5 md:pb-10 pt-5 md:pt-10">
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
        <div className="">
          <div className="">
            <div className="md:columns-3 pt-10 gap-8 p-5">
              {skillsets.map((item) => (
                <div className="mb-8 w-full break-inside-avoid-column">
                  <div className="bg-white border-indigo-700 border-2 rounded-lg">
                    <div className="p-2 bg-indigo-700  text-white rounded-lg border-solid border-white border">
                      <div className="float-left mb-1 ml-2 mt-3 mr-3 flex h-20 w-20 items-center justify-center rounded-full bg-white">
                        <item.icon
                          className="h-10 w-10 text-indigo-700"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="p-2 relative top-0">
                        <h2 className="text-2xl font-semibold">{item.title}</h2>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </div>
                    <div
                      className="flex flex-row flex-wrap bg-white p-2 
                                space-y-5 space-x-5 items-center 
                                justify-center pb-10 rounded-b-full"
                    >
                      <div></div>
                      {item.logos.map((logo) => (
                        <Image
                          className=""
                          src={logo.src}
                          alt={logo.alt}
                          width={100}
                          height={100}
                          key={logo.alt}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
