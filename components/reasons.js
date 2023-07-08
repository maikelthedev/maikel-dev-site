import Link from "next/link";
import { reasons } from "@/data/reasons";


export default function Reasons() {
  return (
    <div className="custom-white-background mb-6 py-5 md:mb-10">
      <Link href="#reasons" id="reasons">
        <h1
          className="custom-white-background custom-text-indigo-900 border-2 border-dashed border-indigo-700 text-center text-4xl 
        font-bold mt-10 mx-auto max-w-xs p-5 rounded-lg
         hover:bg-indigo-700 hover:text-white duration-200
        "
        >
          The Reasons
        </h1>
      </Link>
      <div className="custom-white-background mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl  lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {reasons.map((reason) => (
              <div key={reason.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 custom-text-indigo-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <reason.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {reason.name}
                </dt>
                <dd className="mt-2 text-base leading-7 custom-text-gray-600">
                  {reason.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
