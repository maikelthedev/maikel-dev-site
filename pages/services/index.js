import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";

const services = [
  {
    name: "Full Stack Web Development",
    description: "Using Angular, React, Flask or Django I can build your website backend and frontend from scratch.",
  },
  {
    name: "Cloud Monitoring",
    description: "I can monitor with alerts 24/7 your cloud infrastructure and perform any necessary actions to keep it running smoothly.",
  },
  {
    name: "Cloud Creation",
    description: "Is there a development environment that you'd like to replicate, I can use Terraform and Ansible for that. I can create production environments as Code in AWS, Azure, Oracle Cloud, Digital Ocean, Hetzner, or any cloud provider of your choice.",
  },
  {
    name: "Costs Optimization",
    description: "Do you know most people using password managers like LastPass do not know there are free and open-source technologies that can do the same (e.g.: Bitwarden) ? I can help you save money by using free and open-source technologies.",
  },
  {
    name: "GDPR Compliance",
    description: "Have you met many people who have read the 88 pages of the GDPR directive, dissected it and study it? I have. I can help you with your GDPR compliance.",
  },
  {
    name: "Whatever else I can come up with",
    description:"Fuck knows!",
  },
];

function Portfolio() {
  return (
    <div>
      {/* The Logo
      <div className="flex max-h-60 justify-center bg-[#212832]">
        <Image
          className="object-cover h-48"
          src="/companylogo.png"
          width={500}
          height={100}
        />
      </div>*/}
      <Hero />
      {/* The Services*/}
      <div className="bg-indigo-700 pt-1 md:py-5 md:pb-10">
        <Link href="#services" id="services">
        <h1
          className="text-white border-2 border-dashed border-white text-center text-4xl 
          font-bold mt-10 bg-indigo-700 mx-auto max-w-xs p-5 rounded-lg
           hover:bg-white hover:text-indigo-700 duration-200 
          "
        >
        Services
        </h1>
      </Link>
        <p className="text-white text-2xl text-center justify-center mt-10 px-10">
          I can help you with your existing services or help you build new
          ones.
        </p>
      </div>
      {/* The actual services */}
      <div className="md:columns-3 pt-10 gap-8 p-5 bg-indigo-700">
        {services.map((service) => (
          <div className="mb-8 w-full break-inside-avoid-column bg-white rounded-lg p-4">
            <h1 className="text-2xl font-bold text-indigo-900">
              {service.name}
            </h1>
            <p className="text-gray-700 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
