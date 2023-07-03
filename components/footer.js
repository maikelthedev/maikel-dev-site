import Image from "next/image";
import Link from "next/link";

function Footer() {
  /* Take the code below and rewrite it in a way that sticks to the bottom of the browser page. 
  return (
    <div className="bg-gray-800 text-white text-center p-4">
      <p>Maikel OÜ © 2020 - {new Date().getFullYear()}</p>
    </div>
  );
  */
  return (
    <div className="bg-gray-50">
      <div className="mx-10 text-gray-500">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex flex-col items-center md:flex-row">
            <Image
              className="mt-10 md:mt-2 hover:scale-105 hover:border-0 duration-200 shadow-xl shadow-indigo-200 rounded-full sm:mb-2"
              src="/me.jpg"
              alt="Picture of the author"
              width={30}
              height={30}
            />
            <p className="inline-block md:ml-2">
              Maikel OÜ © 2020 - {new Date().getFullYear()}
            </p>
          </div>
          <div className="space-y-1 mt-1 justify-between items-center">
            <div className="flex flex-col flex-wrap space-y-3 md:flex-row md:space-x-16 md:space-y-5">
              <div></div>
              <div className="basis-1/4 text-center md:text-left hover:text-indigo-500 hover:font-bold">
                <Link href="/about">About</Link>
              </div>
              <div className="basis-1/4 text-center md:text-left hover:text-indigo-500 hover:font-bold">
                <p>FAQ</p>
              </div>
              <div className="basis-1/4 text-center md:text-left hover:text-indigo-500 hover:font-bold">
                <p>className</p>
              </div>
              <div className="basis-1/4 text-center md:text-left hover:text-indigo-500 hover:font-bold">
                <p>Testimonials</p>
              </div>
              <div className="basis-1/4 text-center md:text-left hover:text-indigo-500 hover:font-bold">
                <p>Bla</p>
              </div>
              <div className="basis-1/4 text-center md:text-left">
                <p>Bla</p>
              </div>
              <div className="basis-1/4 text-center md:text-left">
                <p>Bla</p>
              </div>
              <div className="basis-1/4 text-center md:text-left">
                <p>Bla</p>
              </div>
              <div className="basis-1/4 text-center md:text-left">
                <p>Bla</p>
              </div>
              <div className="basis-1/4 text-center md:text-left">
                <p>Bla</p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-between mr-2 py-1 md:mt-0">
          
            <Image
              className="hover:scale-150 duration-200"
              src="/masto2.svg"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
