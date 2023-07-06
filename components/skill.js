import Image from "next/image";

export default function Skill(props) {
  const { skill } = props;
  const { id, logos, description, title } = skill;

  return (
    <div key={id} className="mb-8 w-full break-inside-avoid-column">
      <div className="bg-white border-indigo-700 border-2 rounded-lg">
        <div className="p-2 bg-indigo-700  text-white rounded-lg border-solid border-white border">
          <div className="float-left mb-1 ml-2 mt-3 mr-3 flex h-20 w-20 items-center justify-center rounded-full bg-white">
            <skill.icon
              className="h-10 w-10 text-indigo-700"
              aria-hidden="true"
            />
          </div>
          <div className="p-2 relative top-0">
            <h2 className="text-2xl font-semibold">{title}</h2>
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
              {logos.map((logo) => (
                <Image
                  className="flex object-contain"
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                  key={logo.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
