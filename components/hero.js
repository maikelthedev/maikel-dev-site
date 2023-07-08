import Image from "next/image";
import Link from "next/link";

function Hero(props) {
  const { subtitle, title, slogan } = props.header;
  return (
    <div className="custom-bg-gray-100   md:py-10">
      <div className="mx-auto p-3 md:p-0 md:px-8">
        <div
          className="custom-white-background flex flex-col md:flex-row mx-auto max-w-2xl text-center rounded-lg p-6 
        shadow-slate-700 md:shadow-md"
        >
          <div className="group grid justify-items-center items-center mb-3 md:min-w-fit md:mr-10">
            <Link href="/contact">
              <Image
                className="md:group-hover:scale-90 group-hover:shadow-none duration-200 shadow-lg mb-3 shadow-slate-700 rounded-full border-dashed  md:group-hover:mb-0"
                src="/me.webp"
                alt="Logo of Maikel with me inside"
                width={200}
                height={200}
              />
              <div className="pt-2 text-center">
                <h2 className="inline-block px-3 py-1 text-lg font-semibold text-white bg-indigo-700 rounded-full group-hover:bg-white group-hover:text-indigo-700 group-hover:border-indigo-700 group-hover:border-solid group-hover: border-2 duration-200">
                  Hire Me
                </h2>
              </div>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-semibold leading-7 dark:text-indigo-400 text-indigo-600">
              {subtitle}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white text-black md:text-4xl text-center">
              {title}
            </p>
            <p className="mt-6 text-lg leading-8 dark:text-gray-400 text-gray-600">{slogan}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
