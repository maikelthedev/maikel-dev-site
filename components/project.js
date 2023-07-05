import Image from "next/image";
import { Fragment } from "react";
import { useRouter } from "next/router";

export default function Project(props) {
  const { project } = props;
  const router = useRouter();
  const { id, description, technologies, link, name } = project;

  return (
    <Fragment>
      <div
        className="group shadow-lg p-5 md:hover:shadow-none md:hover:bg-indigo-700  rounded-lg break-inside-avoid-column bg-slate-200 my-5"
        onClick={() => router.push("/portfolio/" + link)}
        key={id}
      >
        <div>
          <div className="flex flex-col">
            <div className="text-left mb-4">
              <h1 className="text-3xl text-indigo-700 md:group-hover:text-white">{name}</h1>
              <p className="md:group-hover:text-white">{description}</p>
            </div>

            <div className="grid justify-items-end">
              <div
                className="bg-white rounded-lg grid col-auto gap-2 grid-flow-col auto-cols-auto justify-items-end  p-2 space-x-1
                "
              >
                {technologies.map((technology) => (
                  <Image
                    className="flex object-contain"
                    src={"/logos/" + technology.name + ".webp"}
                    width={50}
                    height={50}
                    key={technology.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
