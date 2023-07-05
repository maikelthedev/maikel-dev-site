import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Project from "./project";

export default function Client(props) {
  const router = useRouter();
  const { client } = props;
  return (
    <Fragment>
      <div className="bg-indigo-700 rounded-lg md:mb-10 text-white   text-center text-4xl font-bold p-5 md:hover:bg-white md:hover:text-indigo-700 duration-200">
        <Link href={"#" + client.name} id={client.name}>
          <h1 className="mx-auto">{client.name}</h1>
        </Link>
      </div>
      <div className="md:columns-3">
        <div
          className="mt-5 flex mx-auto justify-center items-center shadow-lg  p-5 rounded-lg mb-10"
          key={client.id}
        >
          <div className="flex flex-row items-top md:items-center justify-between">
            <div className="text-left mb-4 justify-center items-center">
              
              <p>{client.description}</p>
            </div>

            <div className="ml-3">
              <Image
                className=""
                src={"/clients/" + client.logo}
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>

        {client.projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
      <div className="mb-10"></div>
    </Fragment>
  );
}
