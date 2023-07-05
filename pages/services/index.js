import Hero from "@/components/hero";
import { services } from "@/data/services-data";


const header = {
  subtitle: "Services",
  title: "Limitless solutions tailored for you",
  slogan: "I can help you with your existing services or build new ones entirely from scratch"
}

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
      <Hero header={header} />
      
      {/* The actual services */}
      <div className="md:columns-3 pt-10 gap-8 p-5 bg-indigo-700">
        {services.map((service) => (
          <div key={service.id} className="mb-8 w-full break-inside-avoid-column bg-white rounded-lg p-4">
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
