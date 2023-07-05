import { v4 as uuidv4 } from "uuid";

export const clients = [
  {
    name: "Survation",
    logo: "surva.webp",
    id: uuidv4(),
    description:
      "Survation is a Market Research & Political Pooling company based in London, UK.",
    projects: [
      {
        name: "Panel Frontend",
        id: uuidv4(),
        technologies: [
          { name: "angular", id: uuidv4() },
          { name: "bootstrap", id: uuidv4() },
          { name: "html", id: uuidv4() },
          { name: "css", id: uuidv4() },
        ],
        markdown: "panel-frontend",
      },
      {
        name: "Panel Backend",
        id: uuidv4(),
        technologies: [
          { name: "express", id: uuidv4() },
          { name: "nodejs", id: uuidv4() },
          { name: "mongo", id: uuidv4() },
          { name: "redis", id: uuidv4() },
        ],
        markdown: "panel-backend",
      },
      {
        name: "Panel Utils",
        id: uuidv4(),
        technologies: [
          { name: "python", id: uuidv4() },
          { name: "aws", id: uuidv4() },
          { name: "mongo", id: uuidv4() },
          { name: "redis", id: uuidv4() },
          { name: "foundation", id: uuidv4() },
        ],
        markdown: "panel-utils",
      },
      {
        name: "Survation Cloud",
        id: uuidv4(),
        technologies: [
          { name: "kubernetes", id: uuidv4() },
          { name: "nginx", id: uuidv4() },
          { name: "traefik", id: uuidv4() },
          { name: "aws", id: uuidv4() },
          { name: "digitalocean", id: uuidv4() },
          { name: "hetzner", id: uuidv4() },
          { name: "velero", id: uuidv4() },
          { name: "locust", id: uuidv4() },
          { name: "mariadb", id: uuidv4() },
          { name: "wordpress", id: uuidv4() },
        ],
        markdown: "survation-cloud",
      },
    ],
  },
  {
    name: "SkunkWerks",
    logo: "skunkwerks.webp",
    id: uuidv4(),
    description:
      "SkunkWerks specialises in designing, building and providing ongoing support for distributed computer systems and multi-peer networking technologies",
    projects: [
      {
        name: "OCI Development Cloud",
        id: uuidv4(),
        technologies: [
          { name: "oracle", id: uuidv4() },
          { name: "terraform", id: uuidv4() },
          { name: "freebsd", id: uuidv4() },
        ],
        markdown: "oci-dev-cloud",
      },
      {
        name: "Automated FreeBSD Builds for OCI",
        id: uuidv4(),
        technologies: [
          { name: "oracle", id: uuidv4() },
          { name: "ansible", id: uuidv4() },
          { name: "freebsd", id: uuidv4() },
          { name: "qemu", id: uuidv4() },
        ],
        markdown: "automated-freebsd-oci",
      },
    ],
  },
  {
    name: "Maikel OÜ",
    logo: "companylogo.webp",
    id: uuidv4(),
    description:
      "Maikel OÜ is a company that provides IT services to small and medium-sized businesses everywhere on the globe.",
    projects: [
      {
        name: "This Website",
        id: uuidv4(),
        technologies: [
          { name: "nextjs", id: uuidv4() },
          { name: "tailwind", id: uuidv4() },
          { name: "html", id: uuidv4() },
          { name: "css", id: uuidv4() },
        ],
        markdown: "this-website",
      },
      {
        name: "Personal Blog",
        id: uuidv4(),
        technologies: [
          { name: "publii", id: uuidv4() },
          { name: "handlebars", id: uuidv4() },
        ],
        markdown: "personal-blog",
      },
    ],
  },
];
