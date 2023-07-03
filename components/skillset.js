import Image from "next/image";
import Link from "next/link";

import {
  CloudIcon,
  ShieldCheckIcon,
  RectangleStackIcon,
  TableCellsIcon,
  CodeBracketIcon,
    CubeIcon,

} from "@heroicons/react/24/outline";

const skillsets = [
  {
    title: "Cloud Providers",
    description:
      "Theses are companies that offer on-demand computing resources and services over the internet, such as storage, servers, and applications.",
    icon: CloudIcon,
    logos: [
      {
        src: "/logos/aws3.png",
        alt: "Amazon Web Services",
      },
      {
        src: "/logos/oracle.png",
        alt: "Oracle Cloud Infrastructure",
      },
      {
        src: "/logos/digitalocean.png",
        alt: "Digital Ocean",
      },
      {
        src: "/logos/azure2.png",
        alt: "Azure",
      },
      {
        src: "/logos/hetzner2.png",
        alt: "Hetzner",
      },
    ],
  },
  {
    title: "Programming & Scripting Languages",
    description:
      "A programming language is a formal language comprising a set of instructions that produce various kinds of output. Programming languages are used in computer programming to implement algorithms.",
    icon: CodeBracketIcon,
    logos: [
      {
        src: "/logos/python.png",
        alt: "Python",
      },
      {
        src: "/logos/ecma6.png",
        alt: "JavaScript",
      },
      {
        src: "/logos/java.png",
        alt: "Java",
      },
      {
        src: "/logos/css3.png",
        alt: "css3",
      },
      {
        src: "/logos/html5.png",
        alt: "Html",
      },
      {
        src: "/logos/rust2.png",
        alt: "Rust",
      },
    ],
  },
  {
    title: "Orchestration & Deployment tools",
    description:
      "Orchestration tools are used to automate the configuration, coordination, and management of computer systems, applications, and services.",
    icon: CubeIcon,
    logos: [
      {
        src: "/logos/terra.png",
        alt: "Terraform",
      },
      {
        src: "/logos/ansible.png",
        alt: "Ansible",
      },
      {
        src: "/logos/docker.png",
        alt: "Docker",
      },
      {
        src: "/logos/kubernetes.png",
        alt: "Kubernetes",
      },
      {
        src: "/logos/jenkins.svg",
        alt: "Jenkins",
      },
    ],
  },
  {
    title: "Frameworks",
    description: "A framework is a software development platform.",
    icon: TableCellsIcon,
    logos: [
      {
        src: "/logos/django.png",
        alt: "Django",
      },
      {
        src: "/logos/angular.png",
        alt: "Angular",
      },
      {
        src: "/logos/next.svg",
        alt: "Next.js",
      },
      {
        src: "/logos/react3.png",
        alt: "React",
      },
      {
        src: "/logos/tailwind.png",
        alt: "Tailwind",
      },
      {
        src: "/logos/bootstrap.png",
        alt: "Bootstrap",
      },
      {
        src: "/logos/express.png",
        alt: "Express",
      },
      {
        src: "/logos/flask.png",
        alt: "Flask",
      },
    ],
  },
  {
    title: "Databases",
    description:
      "A database is an organized collection of data, generally stored and accessed electronically from a computer system.",
    icon: RectangleStackIcon,
    logos: [
      {
        src: "/logos/pgsql.png",
        alt: "PostgreSQL",
      },
      {
        src: "/logos/mariadb2.png",
        alt: "MariaDB",
      },
      {
        src: "/logos/mongo2.png",
        alt: "MongoDB",
      },
      {
        src: "/logos/redis.png  ",
        alt: "Redis",
      },
      {
        src: "/logos/sqlite2.png",
        alt: "SQLite",
      },
      {
        src: "/logos/mysql3.png",
        alt: "MySQL",
      },
    ],
  },
  {
    title: "Cloud Monitoring",
    description:
      "Cloud monitoring is the process of evaluating, monitoring, and managing cloud-based services, applications, and infrastructure.",
    icon: ShieldCheckIcon,
    logos: [
      {
        src: "/logos/grafana.png",
        alt: "Grafana",
      },
      {
        src: "/logos/sensu.jpg",
        alt: "sensu",
      },
      {
        src: "/logos/nagios.png ",
        alt: "Nagios",
      },
      {
        src: "/logos/icinga.png",
        alt: "Icinga",
      },
      {
        src: "/logos/pushover.png ",
        alt: "Pushover",
      },
    ],
  },
];

export default function Skillset() {
  return (
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
      <p className="text-white text-2xl text-center justify-center mt-10">
        These are all the technologies I have worked with up-to-date
      </p>
      <div className="mx-auto px-6 lg:px-8 pb-10 md:pb-2">
        <div className="mx-auto mt-16">
          <div className="flex flex-col flex-wrap justify-center md:flex-row gap-5">
            {skillsets.map((item) => (
              <div className="basis-1/4">
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
                  <div className="flex flex-row flex-wrap bg-white p-2 space-y-5 space-x-5 items-center justify-center pb-10">
                    <div></div>
                    {item.logos.map((logo) => (
                      <Image
                        className=""
                        src={logo.src}
                        alt={logo.alt}
                        width={100}
                        height={100}
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
  );
}
