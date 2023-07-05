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
          src: "/logos/aws.png", // TODO: Simplify this logo structure
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
          src: "/logos/azure.png",
          alt: "Azure",
        },
        {
          src: "/logos/hetzner.png",
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
          src: "/logos/python.png",
          alt: "Python",
        },
        {
          src: "/logos/javascript.png",
          alt: "JavaScript",
        },
        {
          src: "/logos/nodejs.png",
          alt: "Node.js",
        },
        {
          src: "/logos/java.png",
          alt: "Java",
        },
        {
          src: "/logos/css.png",
          alt: "css",
        },
        {
          src: "/logos/html.png",
          alt: "Html",
        },
        {
          src: "/logos/rust.png",
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
          src: "/logos/terraform.png",
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
          src: "/logos/jenkins.png",
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
              src: "/logos/ubuntu.png",
              alt: "Ubuntu",
          },
          {
            src: "/logos/velero.png",
            alt: "Velero",
          },
          {
            src: "/logos/qemu.png",
            alt: "Qemu",
        },
          {
              src: "/logos/debian.png",
              alt: "Debians",
          },
          {
              src: "/logos/alpine.png",
              alt: "Alpine",
          },
          {
              src: "/logos/freebsd.png",
              alt: "FreeBSD",
          },
          {
              src: "/logos/bash.png",
              alt: "Bash",
          },
          {
              src: "/logos/fish.png",
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
          src: "/logos/django.png",
          alt: "Django",
        },
        {
          src: "/logos/scrapy.png",
          alt: "Scrapy",
        },
        {
          src: "/logos/angular.png",
          alt: "Angular",
        },
        {
          src: "/logos/nextjs.png",
          alt: "Next.js",
        },
        {
          src: "/logos/react.png",
          alt: "React",
        },
        {
          src: "/logos/tailwind.png",
          alt: "Tailwind",
        },
        {
          src: "/logos/handlebars.png",
          alt: "Handlebars",
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
      title: "Content Management Systems",
      description: "A software platform that provides tools to manage content without the end user having to know anything about coding",
      icon: ComputerDesktopIcon,
      logos: [
          {
              src: "/logos/wordpress.png",
              alt: "Wordpress",
            },
            {
              src: "/logos/ghost.png",
              alt: "Ghost.js",
            },
            {
              src: "/logos/publii.png",
              alt: "Publii",
            },
            {
              src: "/logos/drupal.png",
              alt: "Drupal",
            },
            {
              src: "/logos/mediawiki.png",
              alt: "Mediawiki",
            },
            {
              src: "/logos/gatsby.png",
              alt: "Gatsby",
            },
            {
              src: "/logos/jekyll.png",
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
          src: "/logos/pgsql.png",
          alt: "PostgreSQL",
        },
        {
          src: "/logos/mariadb.png",
          alt: "MariaDB",
        },
        {
          src: "/logos/mongo.png",
          alt: "MongoDB",
        },
        {
          src: "/logos/redis.png",
          alt: "Redis",
        },
        {
          src: "/logos/sqlite.png",
          alt: "SQLite",
        },
        {
          src: "/logos/mysql.png",
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
              src: "/logos/nginx.png",
              alt: "Nginx",
          },
          {
              src: "/logos/apache.png",
              alt: "Apache",
          },
          {
              src: "/logos/traefik.png",
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
          src: "/logos/grafana.png",
          alt: "Grafana",
        },
        {
          src: "/logos/sensu.png",
          alt: "sensu",
        },
        {
            src: "/logos/locust.png",
            alt: "locust",
          },
        {
          src: "/logos/nagios.png",
          alt: "Nagios",
        },
        {
          src: "/logos/icinga.png",
          alt: "Icinga",
        },
        {
          src: "/logos/pushover.png",
          alt: "Pushover",
        },
      ],
    },
  ];