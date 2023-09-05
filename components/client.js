import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Project from "./project";

export default function Client(props) {
  const { client } = props;
  return (
    <Fragment>
      <div className="lg:max-w-7xl lg:mx-auto">
      <Link href={"#" + client.name} id={client.name}>
        <h1
          className="custom-white-background custom-text-indigo-900 border-2 border-dashed border-indigo-700 text-center text-4xl 
        font-bold mt-10 mx-auto max-w-xs p-5 rounded-lg
         hover:bg-indigo-700 hover:text-white duration-200 md:mb-10
        "
        >
          {client.name}
        </h1>
      </Link>


        <div className="md:columns-3">
          <div
            className="mt-5 flex mx-auto justify-center items-center  p-5 rounded-lg mb-10"
            key={client.id}
          >
            <div className="flex flex-row items-top md:items-center justify-between">
              <div className="text-left mb-4 justify-center items-center">
                <p className="custom-text-black">{client.description}</p>
              </div>

              <div className="ml-3">
                <Image
                  className=""
                  src={"/clients/" + client.logo}
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>

          {client.projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
        <div className="mb-10"></div>
      </div>
    </Fragment>
  );
}
