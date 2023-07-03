import Link from "next/link";

import {
  ArrowPathIcon,
  CurrencyDollarIcon,
  GlobeEuropeAfricaIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Holistic Understanding",
    description:
      "One person understands full-stack development and cloud architecture, improving communication and collaboration.",
    icon: GlobeEuropeAfricaIcon,
  },
  {
    name: "Faster Decision-making",
    description:
      "A single person assesses requirements, develops solutions, and implements them without extensive coordination.",
    icon: LightBulbIcon,
  },
  {
    name: "Agile Development",
    description:
      "One person enables faster iterations, switching between front-end and back-end tasks seamlessly.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Cost Efficiency",
    description:
      "Hiring one person is cost-effective, eliminating the need for multiple salaries and reducing overhead costs.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Flexibility and Adaptability",
    description:
      "A solo IT professional easily adapts to changing project needs, handling different aspects efficiently.",
    icon: ArrowPathIcon,
  },
  {
    name: "Ownership and Accountability",
    description:
      "One person takes complete ownership of the project, ensuring responsibility and effective management.",
    icon: ScaleIcon,
  },
];

export default function Reasons() {
  return (
    <div className="bg-white mb-6 md:py-5 md:mb-10 ">
      <Link href="#reasons" id="reasons">
        <h1
          className="text-indigo-900 border-2 border-dashed border-indigo-700 text-center text-4xl 
        font-bold mt-10 bg-white mx-auto max-w-xs p-5 rounded-lg
         hover:bg-indigo-700 hover:text-white duration-200
        "
        >
          The Reasons
        </h1>
      </Link>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-indigo-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
