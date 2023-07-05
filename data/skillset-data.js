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
      logos: [
        {
          src: "/logos/aws.webp", // TODO: Simplify this logo structure
          alt: "Amazon Web Services",
        },
        {
          src: "/logos/oracle.webp",
          alt: "Oracle Cloud Infrastructure",
        },
        {
          src: "/logos/digitalocean.webp",
          alt: "Digital Ocean",
        },
        {
          src: "/logos/azure.webp",
          alt: "Azure",
        },
        {
          src: "/logos/hetzner.webp",
          alt: "Hetzner",
        },
      ],
    },
    {
      title: "Programming & Scripting Languages",
      description:
        "Formal languages comprising a set of instructions that produce various kinds of output",
      icon: CodeBracketIcon,
      logos: [
        {
          src: "/logos/python.webp",
          alt: "Python",
        },
        {
          src: "/logos/javascript.webp",
          alt: "JavaScript",
        },
        {
          src: "/logos/nodejs.webp",
          alt: "Node.js",
        },
        {
          src: "/logos/java.webp",
          alt: "Java",
        },
        {
          src: "/logos/css.webp",
          alt: "css",
        },
        {
          src: "/logos/html.webp",
          alt: "Html",
        },
        {
          src: "/logos/rust.webp",
          alt: "Rust",
        },
      ],
    },
    {
      title: "Orchestration & Deployment tools",
      description:
        "Tools used to automate the configuration, coordination, and management of computer systems, applications, and services",
      icon: CubeIcon,
      logos: [
        {
          src: "/logos/terraform.webp",
          alt: "Terraform",
        },
        {
          src: "/logos/ansible.webp",
          alt: "Ansible",
        },
        {
          src: "/logos/docker.webp",
          alt: "Docker",
        },
        {
          src: "/logos/kubernetes.webp",
          alt: "Kubernetes",
        },
        {
          src: "/logos/jenkins.webp",
          alt: "Jenkins",
        },
      ],
    },
    { // Create another section for System Administration
      title: "Cloud Administration",
      description:
          "The field of work that is in charge of maintaining reliable computer systems in a multi-user environment",
      icon: CommandLineIcon,
      logos: [
          {
              src: "/logos/ubuntu.webp",
              alt: "Ubuntu",
          },
          {
            src: "/logos/velero.webp",
            alt: "Velero",
          },
          {
            src: "/logos/qemu.webp",
            alt: "Qemu",
        },
          {
              src: "/logos/debian.webp",
              alt: "Debians",
          },
          {
              src: "/logos/alpine.webp",
              alt: "Alpine",
          },
          {
              src: "/logos/freebsd.webp",
              alt: "FreeBSD",
          },
          {
              src: "/logos/bash.webp",
              alt: "Bash",
          },
          {
              src: "/logos/fish.webp",
              alt: "Fish Shell",
          },
      ]
    },
    {
      title: "Frameworks & Libraries",
      description:
        "A software platform that provides reusable components, tools and libraries to assist developers",
      icon: TableCellsIcon,
      logos: [
        {
          src: "/logos/django.webp",
          alt: "Django",
        },
        {
          src: "/logos/scrapy.webp",
          alt: "Scrapy",
        },
        {
          src: "/logos/angular.webp",
          alt: "Angular",
        },
        {
          src: "/logos/nextjs.webp",
          alt: "Next.js",
        },
        {
          src: "/logos/react.webp",
          alt: "React",
        },
        {
          src: "/logos/tailwind.webp",
          alt: "Tailwind",
        },
        {
          src: "/logos/handlebars.webp",
          alt: "Handlebars",
        },
        {
          src: "/logos/bootstrap.webp",
          alt: "Bootstrap",
        },
        {
          src: "/logos/express.webp",
          alt: "Express",
        },
        {
          src: "/logos/flask.webp",
          alt: "Flask",
        },
      ],
    },
    {
      title: "Content Management Systems",
      description: "A software platform that provides tools to manage content without the end user having to know anything about coding",
      icon: ComputerDesktopIcon,
      logos: [
          {
              src: "/logos/wordpress.webp",
              alt: "Wordpress",
            },
            {
              src: "/logos/ghost.webp",
              alt: "Ghost.js",
            },
            {
              src: "/logos/publii.webp",
              alt: "Publii",
            },
            {
              src: "/logos/drupal.webp",
              alt: "Drupal",
            },
            {
              src: "/logos/mediawiki.webp",
              alt: "Mediawiki",
            },
            {
              src: "/logos/gatsby.webp",
              alt: "Gatsby",
            },
            {
              src: "/logos/jekyll.webp",
              alt: "Jekyll",
            },
          ]
    },
    {
      title: "Databases",
      description:
        "Organized collections of data, generally stored and accessed electronically from a computer system",
      icon: RectangleStackIcon,
      logos: [
        {
          src: "/logos/pgsql.webp",
          alt: "PostgreSQL",
        },
        {
          src: "/logos/mariadb.webp",
          alt: "MariaDB",
        },
        {
          src: "/logos/mongo.webp",
          alt: "MongoDB",
        },
        {
          src: "/logos/redis.webp",
          alt: "Redis",
        },
        {
          src: "/logos/sqlite.webp",
          alt: "SQLite",
        },
        {
          src: "/logos/mysql.webp",
          alt: "MySQL",
        },
      ],
    },
    {
      title: "Web Servers",
      description:
          "A computer system that processes requests via HTTP, the basic network protocol used to distribute information on the World Wide Web",
      icon: ComputerDesktopIcon,
      logos: [
          {
              src: "/logos/nginx.webp",
              alt: "Nginx",
          },
          {
              src: "/logos/apache.webp",
              alt: "Apache",
          },
          {
              src: "/logos/traefik.webp",
              alt: "Traefik",
          },
      ]
    },
    {
      title: "Cloud Monitoring",
      description:
        "The process of evaluating, monitoring, and managing cloud-based services, applications, and infrastructure",
      icon: ShieldCheckIcon,
      logos: [
        {
          src: "/logos/grafana.webp",
          alt: "Grafana",
        },
        {
          src: "/logos/sensu.webp",
          alt: "sensu",
        },
        {
            src: "/logos/locust.webp",
            alt: "locust",
          },
        {
          src: "/logos/nagios.webp",
          alt: "Nagios",
        },
        {
          src: "/logos/icinga.webp",
          alt: "Icinga",
        },
        {
          src: "/logos/pushover.webp",
          alt: "Pushover",
        },
      ],
    },
  ];