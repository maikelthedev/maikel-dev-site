import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row mx-auto max-w-2xl lg:text-center bg-white rounded-lg p-6">
          <div className="group grid justify-items-center items-center mb-3 md:min-w-fit md:mr-10">
            <Image
              className="group-hover:scale-105 group-hover:border-0 duration-200 shadow-2xl shadow-indigo-200 rounded-full border-dashed border-2 border-indigo-500 p-2 group-hover:p-0"
              src="/me.jpg"
              alt="Logo of Maikel with Maikel inside"
              width={200}
              height={200}
            />
            <div className="pt-2 text-center">
              <Link href="#reasons">
                <h2 className="inline-block px-3 py-1 text-lg font-semibold text-white bg-indigo-700 rounded-full group-hover:bg-white group-hover:text-indigo-700 group-hover:border-indigo-700 group-hover:border-solid group-hover: border-2 duration-200">
                  Hire Me
                </h2>
              </Link>
            </div>
          </div>
          <div className="">
            <p className="mt-2 text-3xl font-bold tracking-tight text-indigo-900 md:text-4xl text-center">
              One Man for All Your Tech Needs
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Full Stack development in multi-language environments and with
              your cloud architecture designed and monitored all by the same
              person.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
