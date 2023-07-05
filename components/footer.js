import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-gray-50 pb-10">
      <div className="mx-10 text-gray-500">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex flex-col items-center md:flex-row">
            <Image
              className="mt-10 md:mt-2 hover:scale-105 hover:rotate-90 hover:border-0 duration-200 shadow-xl shadow-indigo-200 rounded-full sm:mb-2"
              src="/me.webp"
              alt="Picture of the author"
              width={50}
              height={50}
            />
            <div className="grid grid-cols-1 text-center items-center justify-center pt-5 md:pt-0">
              <p className="text-lg font-semibold md:ml-2">
                Maikel OÜ
                <sup className="font-features sups">©</sup>
              </p>
              <p className="text-sm">2020 - {new Date().getFullYear()}</p>
            </div>
          </div>
          <div className="w-10/12 space-y-1 mt-1">
            <div className="flex flex-col flex-wrap space-y-3 md:flex-row md:space-x-16 flex-cols-3">
              <div></div>
              <div className="basis-1/4 text-center md:text-left hover:text-indigo-500 hover:font-bold">
                <Link href="/about">About</Link>
              </div>
              <div className="basis-1/4 text-center md:text-left hover:text-indigo-500 hover:font-bold">
                <Link href="/services">Services</Link>
              </div>
              <div className="basis-1/4 text-center md:text-left hover:text-indigo-500 hover:font-bold">
                <Link href="/portfolio">Portfolio</Link>
              </div>
              <div className="basis-1/4 text-center md:text-left hover:text-indigo-500 hover:font-bold">
                <Link href="/hire">Hire Me</Link>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-between mr-2 py-1 md:mt-0">
            <Link href="https://matrix.to/#/@maikelthedev:matrix.org" target="_blank">
              <Image
                className="hover:scale-150 duration-200"
                src="/masto2.svg"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
