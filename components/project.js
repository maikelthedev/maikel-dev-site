import Image from "next/image";
import { Fragment } from "react";
import { useRouter } from "next/router";

export default function Project(props) {
  const { project } = props;
  const router = useRouter();
  const { id, description, technologies, link, name } = project;

  return (
    <Fragment>

      <div key={id} className="mb-8 w-full break-inside-avoid-column">
        <div className="bg-white border-indigo-700 border-2 rounded-lg">
          <div className="p-2 bg-indigo-700 text-white rounded-lg border-solid border-white border">
            <div className="float-left mb-0 ml-2 mt-2 mr-3 flex h-20 w-20 items-center justify-center rounded-full bg-white">
              <Image src={"/logos/" + technologies[0].name + ".webp"} 
              className="h-16 w-16 rounded-full text-indigo-700" width={100} height={100} />
            </div>
            <div className="p-2 relative top-0">
              <h2 className="text-2xl font-semibold">{name}</h2>
              <p className="text-sm">{description}</p>
            </div>
          </div>
          <div
            className="flex flex-col  bg-slate-100 p-2 
            space-y-5 space-x-5 
            pb-5 rounded-lg"
          >
            <div className="grid justify-items-end">
              <div
                className="bg-white rounded-lg border border-dashed border-indigo-700 grid col-auto gap-2 grid-flow-col auto-cols-auto justify-items-end  p-2 space-x-1
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
