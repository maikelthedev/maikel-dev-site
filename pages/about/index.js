import { Fragment } from "react";
import Hero from "@/components/hero";
import { socials } from "@/data/socials";
import { headers } from "@/data/headers";
import Image from "next/image";
import Link from "next/link";

function About() {
  const header = headers.about; 

  return (
    <Fragment>
      <Hero header={header} />
      <div className="flex flex-col md:flex-row p-5 bg-white md:mx-auto md:max-w-6xl">
        <div className="w-full  md:p-10 p-5 space-y-5">
          <h1 className="text-2xl font-bold mb-5">The Company</h1>
          <p className="text-md">
            Maikel OÜ is a single-man company I established in Estonia in{" "}
            <span className="font-bold">2020</span>. OÜ means the same as
            Limited in the UK or LLC in the US. The company is registered in the
            Estonian Business Register under the registry code{" "}
            <span className="font-bold">16006677.</span>
          </p>
          <p className="text-md">
            The full legal address is:{" "}
            <span className="font-bold">
              Sepapaja tn 6 Lasnamäe linnaosa, Tallinn Harju maakond 15551,
              Estonia.
            </span>
          </p>
          <h1 className="text-2xl font-bold mb-5">The Human</h1>
          <p className="text-md">
            My full legal name is Miguel Frias Mosquea, yet everybody since my
            childhood calls me Maikel. It is Michael written with the Spanish spelling. 
            Changing your legal name to your real
            name is a bureaucratic nightmare in Spain, so I decided to keep my legal name
            and use my real name for my company.
          </p>
          <p className="text-md">
            The known fact Spain is a bureaucratic nightmare is the main reason I established the company in Estonia. The admin is far simpler, which translates into more time to focus on my clients, and less time dealing with paperwork.
          </p>
          <p className="text-md">
            I am a multi-lingual full-stack developer, cloud architect and
            DevOps engineer. Also a native Spanish speaker, fluent in English. I
            have been working in the IT industry for more than 10 years.
          </p>
          <h2 className="text-xl font-bold mt-5 mb-3">Social Media</h2>
          <div className="flex flex-row space-x-5 mx-10">
            {socials.map((social) => (
              <Link key={social.id} href={social.url} target="_blank">
                <div className="flex flex-col items-center justify-center">
                  <Image
                    className="md:hover:scale-150 duration-200"
                    src={social.logo}
                    width={30}
                    height={30}
                  />
                  <p className="text-sm">{social.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
