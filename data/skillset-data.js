import { v4 as uuidv4 } from "uuid";
import {
    CloudIcon,
    ShieldCheckIcon,
    RectangleStackIcon,
    TableCellsIcon,
    CodeBracketIcon,
    CubeIcon,
    CommandLineIcon,
    ComputerDesktopIcon,
  } from "@heroicons/react/24/outline";

  export const skillsets = [
    {
      title: "Cloud Providers",
      description:
        "These are companies that offer on-demand computing resources and services over the internet, such as storage, servers, and applications",
      icon: CloudIcon,
      id: uuidv4(),
      logos: [
        {
          src: "/logos/aws.webp", // TODO: Simplify this logo structure
          alt: "Amazon Web Services",
          id: uuidv4(),
        },
        {
          src: "/logos/oracle.webp",
          alt: "Oracle Cloud Infrastructure",
          id: uuidv4(),
        },
        {
          src: "/logos/digitalocean.webp",
          alt: "Digital Ocean",
          id: uuidv4(),
        },
        {
          src: "/logos/azure.webp",
          alt: "Azure",
          id: uuidv4(),
        },
        {
          src: "/logos/hetzner.webp",
          alt: "Hetzner",
          id: uuidv4(),
        },
      ],
    },
    {
      title: "Programming & Scripting Languages",
      description:
        "Formal languages comprising a set of instructions that produce various kinds of output",
      icon: CodeBracketIcon,
      id: uuidv4(),
      logos: [
        {
          src: "/logos/python.webp",
          alt: "Python",
          id: uuidv4(),
        },
        {
          src: "/logos/javascript.webp",
          alt: "JavaScript",
          id: uuidv4(),
        },
        {
          src: "/logos/nodejs.webp",
          alt: "Node.js",
          id: uuidv4(),
        },
        {
          src: "/logos/java.webp",
          alt: "Java",
          id: uuidv4(),
        },
        {
          src: "/logos/css.webp",
          alt: "css",
          id: uuidv4(),
        },
        {
          src: "/logos/html.webp",
          alt: "Html",
          id: uuidv4(),
        },
        {
          src: "/logos/rust.webp",
          alt: "Rust",
          id: uuidv4(),
        },
      ],
    },
    {
      title: "Orchestration & Deployment tools",
      description:
        "Tools used to automate the configuration, coordination, and management of computer systems, applications, and services",
      icon: CubeIcon,
      id: uuidv4(),
      logos: [
        {
          src: "/logos/terraform.webp",
          alt: "Terraform",
          id: uuidv4(),
        },
        {
          src: "/logos/ansible.webp",
          alt: "Ansible",
          id: uuidv4(),
        },
        {
          src: "/logos/docker.webp",
          alt: "Docker",
          id: uuidv4(),
        },
        {
          src: "/logos/kubernetes.webp",
          alt: "Kubernetes",
          id: uuidv4(),
        },
        {
          src: "/logos/jenkins.webp",
          alt: "Jenkins",
          id: uuidv4(),
        },
      ],
    },
    {
      title: "Cloud Administration",
      description:
        "The field of work that is in charge of maintaining reliable computer systems in a multi-user environment",
      icon: CommandLineIcon,
      id: uuidv4(),
      logos: [
        {
          src: "/logos/ubuntu.webp",
          alt: "Ubuntu",
          id: uuidv4(),
        },
        {
          src: "/logos/velero.webp",
          alt: "Velero",
          id: uuidv4(),
        },
        {
          src: "/logos/qemu.webp",
          alt: "Qemu",
          id: uuidv4(),
        },
        {
          src: "/logos/debian.webp",
          alt: "Debians",
          id: uuidv4(),
        },
        {
          src: "/logos/alpine.webp",
          alt: "Alpine",
          id: uuidv4(),
        },
        {
          src: "/logos/freebsd.webp",
          alt: "FreeBSD",
          id: uuidv4(),
        },
        {
          src: "/logos/bash.webp",
          alt: "Bash",
          id: uuidv4(),
        },
        {
          src: "/logos/fish.webp",
          alt: "Fish Shell",
          id: uuidv4(),
        },
      ],
    },
    {
      title: "Frameworks & Libraries",
      description:
        "A software platform that provides reusable components, tools and libraries to assist developers",
      icon: TableCellsIcon,
      id: uuidv4(),
      logos: [
        {
          src: "/logos/django.webp",
          alt: "Django",
          id: uuidv4(),
        },
        {
          src: "/logos/scrapy.webp",
          alt: "Scrapy",
          id: uuidv4(),
        },
        {
          src: "/logos/angular.webp",
          alt: "Angular",
          id: uuidv4(),
        },
        {
          src: "/logos/nextjs.webp",
          alt: "Next.js",
          id: uuidv4(),
        },
        {
          src: "/logos/react.webp",
          alt: "React",
          id: uuidv4(),
        },
        {
          src: "/logos/tailwind.webp",
          alt: "Tailwind",
          id: uuidv4(),
        },
        {
          src: "/logos/handlebars.webp",
          alt: "Handlebars",
          id: uuidv4(),
        },
        {
          src: "/logos/bootstrap.webp",
          alt: "Bootstrap",
          id: uuidv4(),
        },
        {
          src: "/logos/express.webp",
          alt: "Express",
          id: uuidv4(),
        },
        {
          src: "/logos/flask.webp",
          alt: "Flask",
          id: uuidv4(),
        },
      ],
    },
    {
      title: "Content Management Systems",
      description:
        "A software platform that provides tools to manage content without the end user having to know anything about coding",
      icon: ComputerDesktopIcon,
      id: uuidv4(),
      logos: [
        {
          src: "/logos/wordpress.webp",
          alt: "Wordpress",
          id: uuidv4(),
        },
        {
          src: "/logos/ghost.webp",
          alt: "Ghost.js",
          id: uuidv4(),
        },
        {
          src: "/logos/publii.webp",
          alt: "Publii",
          id: uuidv4(),
        },
        {
          src: "/logos/drupal.webp",
          alt: "Drupal",
          id: uuidv4(),
        },
        {
          src: "/logos/mediawiki.webp",
          alt: "Mediawiki",
          id: uuidv4(),
        },
        {
          src: "/logos/gatsby.webp",
          alt: "Gatsby",
          id: uuidv4(),
        },
        {
          src: "/logos/jekyll.webp",
          alt: "Jekyll",
          id: uuidv4(),
        },
      ],
    },
    {
      title: "Databases",
      description:
        "Organized collections of data, generally stored and accessed electronically from a computer system",
      icon: RectangleStackIcon,
      id: uuidv4(),
      logos: [
        {
          src: "/logos/pgsql.webp",
          alt: "PostgreSQL",
          id: uuidv4(),
        },
        {
          src: "/logos/mariadb.webp",
          alt: "MariaDB",
          id: uuidv4(),
        },
        {
          src: "/logos/mongo.webp",
          alt: "MongoDB",
          id: uuidv4(),
        },
        {
          src: "/logos/redis.webp",
          alt: "Redis",
          id: uuidv4(),
        },
        {
          src: "/logos/sqlite.webp",
          alt: "SQLite",
          id: uuidv4(),
        },
        {
          src: "/logos/mysql.webp",
          alt: "MySQL",
          id: uuidv4(),
        },
      ],
    },
    {
      title: "Web Servers",
      description:
        "A computer system that processes requests via HTTP, the basic network protocol used to distribute information on the World Wide Web",
      icon: ComputerDesktopIcon,
      id: uuidv4(),
      logos: [
        {
          src: "/logos/nginx.webp",
          alt: "Nginx",
          id: uuidv4(),
        },
        {
          src: "/logos/apache.webp",
          alt: "Apache",
          id: uuidv4(),
        },
        {
          src: "/logos/traefik.webp",
          alt: "Traefik",
          id: uuidv4(),
        },
      ],
    },
    {
      title: "Cloud Monitoring",
      description:
        "The process of evaluating, monitoring, and managing cloud-based services, applications, and infrastructure",
      icon: ShieldCheckIcon,
      id: uuidv4(),
      logos: [
        {
          src: "/logos/grafana.webp",
          alt: "Grafana",
          id: uuidv4(),
        },
        {
          src: "/logos/sensu.webp",
          alt: "sensu",
          id: uuidv4(),
        },
        {
          src: "/logos/locust.webp",
          alt: "locust",
          id: uuidv4(),
        },
        {
          src: "/logos/nagios.webp",
          alt: "Nagios",
          id: uuidv4(),
        },
        {
          src: "/logos/icinga.webp",
          alt: "Icinga",
          id: uuidv4(),
        },
        {
          src: "/logos/pushover.webp",
          alt: "Pushover",
          id: uuidv4(),
        },
      ],
    }
  ];