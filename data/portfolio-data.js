import { v4 as uuidv4 } from "uuid";

export const clients = [
  {
    name: " Headbright Group",
    logo: "headbright1.webp",
    id: uuidv4(),
    description:
      "Headbright Group creates for the Web and Mobile. ",
    projects: [
      {
        name: "Min.io cluster deployment",
        id: uuidv4(),
        description:
          "Scripts to deploy a custom-made Min.io deployment in Hetzner Cloud",
        technologies: [
          { name: "bash", id: uuidv4() },
          { name: "cloud-init", id: uuidv4() },
          { name: "hetzner", id: uuidv4() },
        ],
        link: "minio-deployment-headbright",
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
        description:
          "Oracle Cloud Infrastructure as Code with custom-made FreeBSD image",
        technologies: [
          { name: "terraform", id: uuidv4() },
          { name: "oracle", id: uuidv4() },
          { name: "freebsd", id: uuidv4() },
        ],
        link: "oci-dev-cloud",
      },
      {
        name: "Automated FreeBSD Builds for OCI",
        id: uuidv4(),
        description: "Ansible script to run a builder machine that builds FreeBSD in & for OCI, launch it and test it",
        technologies: [
          { name: "ansible", id: uuidv4() },
          { name: "oracle", id: uuidv4() },
          { name: "freebsd", id: uuidv4() },
          { name: "qemu", id: uuidv4() },
        ],
        link: "automated-freebsd-oci",
      },
    ],
  },
  {
    name: "Survation",
    logo: "surva.webp",
    id: uuidv4(),
    description:
      "Survation is a Market Research & Political Polling company based in London, UK.",
    projects: [
      {
        name: "Panel Frontend",
        id: uuidv4(),
        description:
          "Angular app for panelists to complete surveys and researchers to manage surveys",
        technologies: [
          { name: "angular", id: uuidv4() },
          { name: "bootstrap", id: uuidv4() },
          { name: "html", id: uuidv4() },
          { name: "css", id: uuidv4() },
        ],
        link: "panel-frontend",
      },
      {
        name: "Panel Backend",
        id: uuidv4(),
        description: "ExpressJS app serving a REST API to the frontend",
        technologies: [
          { name: "javascript", id: uuidv4() },
          { name: "express", id: uuidv4() },
          { name: "nodejs", id: uuidv4() },
          { name: "mongo", id: uuidv4() },
          { name: "redis", id: uuidv4() },
        ],
        link: "panel-backend",
      },
      {
        name: "Panel Utils",
        id: uuidv4(),
        description:
          "Background utilities for the panel to create samples and send emails",
        technologies: [
          { name: "python", id: uuidv4() },
          { name: "aws", id: uuidv4() },
          { name: "mongo", id: uuidv4() },
          { name: "redis", id: uuidv4() },
          { name: "foundation", id: uuidv4() },
        ],
        link: "panel-utils",
      },
      {
        name: "Survation Cloud",
        id: uuidv4(),
        description:
          "Kubernetes cluster for hosting the panel and every other Survation services",
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
        link: "survation-cloud",
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
        description: "My company website, showcasing my portfolio, services and contact information",
        technologies: [
          { name: "nextjs", id: uuidv4() },
          { name: "tailwind", id: uuidv4() },
          { name: "html", id: uuidv4() },
          { name: "css", id: uuidv4() },
        ],
        link: "this-website",
      },
      {
        name: "Personal Blog",
        id: uuidv4(),
        description: "My personal blog, where I write about my experiences and thoughts",
        technologies: [
          { name: "publii", id: uuidv4() },
          { name: "handlebars", id: uuidv4() },
        ],
        link: "personal-blog",
      },
    ],
  },
];
