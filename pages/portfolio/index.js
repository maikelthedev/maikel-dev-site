import Image from "next/image";
import { useRouter } from "next/router";

const clients = [
  {
    name: "Survation",
    logo: "/surva.png",
    description:
      "Survation is a Market Research & Political Pooling company based in London, UK.",
    projects: [
      {
        name: "Panel Frontend",
        description: "This is a project",
        technologies: ["angular", "bootstrap", "html", "css"],
        markdown: "panel-frontend",
      },
      {
        name: "Panel Backend",
        description: "This is a project",
        technologies: ["express", "nodejs", "mongo", "redis"],
        markdown: "panel-frontend",
      },
      {
        name: "Survation Cloud",
        description: "This is a project",
        technologies: [
          "kubernetes",
          "nginx",
          "traefik",
          "aws",
          "digitalocean",
          "hetzner",
          "velero",
        ],
        markdown: "panel-frontend",
      },
    ],
  },
  {
    name: "SkunkWerks",
    logo: "/skunkwerks.png",
    description:
      "Survation is a Market Research & Political Pooling company based in London, UK.",
    projects: [
      {
        name: "OCI Development Cloud",
        description: "This is a project",
        technologies: ["oracle", "terraform", "freebsd"],
        markdown: "panel-frontend",
      },
      {
        name: "Automated FreeBSD Builds for OCI",
        description: "This is a project",
        technologies: ["oracle", "ansible", "freebsd", "qemu"],
        markdown: "panel-frontend",
      },
    ],
  },
  {
    name: "Maikel OÜ",
    logo: "/companylogo.png",
    description:
      "Survation is a Market Research & Political Poolling company based in London, UK.",
    projects: [
      {
        name: "This Website",
        description: "This is a project",
        technologies: ["nextjs", "tailwind", "html", "css"],
        markdown: "panel-frontend",
      },
      {
        name: "Personal Blog",
        description: "This is a project",
        technologies: ["publii", "handlebars"],
        markdown: "panel-frontend",
      },
    ],
  },
];

function Portfolio() {
  const router = useRouter();

  return (
    <div>
      <div className="bg-white py-10 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-semibold leading-7 text-indigo-600">
              Portfolio of Clients
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Providing a glimpse into my client portfolio, past and present
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Each project has list of technologies it used, and a short
              description of what it was that is accessible by clicking on the
              project name.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-indigo-700 p-5">
        {/* The Client Box*/}
        {clients.map((client) => (
          <div className="bg-white m-1 mb-8 md:m-10 rounded-2xl flex flex-col md:flex-row">
            <div className="flex justify-center items-center md:items-left md:justify-start bg-white rounded-2xl">
              <div className="flex flex-col justify-center items-center  bg-white p-10 rounded-2xl">
                <Image src={client.logo} width={200} height={200} />
                <p className="text-slate-900 mt-5 justify-center font-semibold text-2xl">
                  {client.name}
                </p>
              </div>
            </div>
            <div className=" bg-slate-300 w-full border-2 border-white rounded-2xl">
              <div className=" text-slate-900 p-5 text-xl font-bold uppercase md:capitalize hidden md:block md:border-b-2 text-center md:text-left">
                {client.description}
              </div>
              <div class="p-5 text-white flex">
                <div className="w-full">
                  {client.projects.map((project) => (
                    <div
                      className="md:flex md:flex-row mb-5 hover:scale-110 duration-200"
                      onClick={() => router.push("/portfolio/" + project.markdown)}
                    >
                      <div
                        className="bg-white rounded-t-lg flex flex-row flex-none justify-center p-2 space-x-1
                      md:rounded-l-lg md:rounded-r-none flex-wrap "
                      >
                        {project.technologies.map((technology) => (
                          <Image
                            className="flex object-contain"
                            src={"/logos/" + technology + ".png"}
                            width={50}
                            height={50}
                          />
                        ))}
                      </div>
                      <p className="bg-indigo-700 flex justify-center items-center border-white border-2 p-2 rounded-b-lg md:rounded-l-none md:rounded-r-lg">
                        {project.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
