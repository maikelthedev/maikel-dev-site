import { Fragment } from "react";
import Link from "next/link";
import Hero from "@/components/hero";
import { headers } from "@/data/headers";
import Currencies from "@/components/currencies";
import Image from "next/image";
import { donations, providers } from "@/data/currencies";
import Head from "next/head";

const title = "Donations to Maikel";
const excerpt = "Donations to Maikel to keep the light on";
const image = "eatthem.webp";

const totalEuros = donations.reduce((accumulator, donation) => {
  return accumulator + donation.euros;
}, 0).toFixed(2);

const currentPercentage = (totalEuros * 100) / 1500;
const currentPercentageString = currentPercentage + "%";

const getObservations = (donation) => {
  if (donation.observations) {
    return " " + donation.observations
  } else {
    return ""
  }
}

export default function Donations() {
  const header = headers.donations;
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} key="description" />
        <meta name="author" content="Maikel" key="author" />
        <meta property="og:title" content={title} key="og-title" />
        <meta
          property="og:description"
          content={excerpt}
          key="og-description"
        />
        <meta
          property="og:image"
          content={"https://maikel.dev/" + image}
          key="og-image"
        />
        <meta
          property="og:url"
          content="https://maikel.dev/donations"
          key="og-url"
        />

        <meta
          property="twitter:url"
          content="https://maikel.dev/donations"
          key="twitter:url"
        />
        <meta name="twitter:site" content="@maikelthedev" key="twitter:site" />
        <meta
          name="twitter:creator"
          content="@maikelthedev"
          key="twitter:creator"
        />
        <meta name="twitter:title" content={title} key="twitter:title" />
        <meta
          name="twitter:description"
          content={excerpt}
          key="twitter:description"
        />
        <meta
          name="twitter:image"
          content={"https://maikel.dev/" + image}
          key="twitter:image"
        />
        <meta
          name="twitter:summary_large_image "
          content={"https://maikel.dev/" + image}
          key="twitter:summary_large_image"
        />
      </Head>
      <div className="custom-bg-white">
        <Hero header={header} />

        <div className="custom-text-black flex flex-col md:flex-row p-2 custom-bg-white md:mx-auto md:max-w-6xl items-center">
          <div className="px-2 md:px-8 py-4 space-y-6">
            <h1 className="text-3xl font-bold">
            What can I say here that I haven't already?
            </h1>
            <p className="text-lg">
              Do you need a sobbing story to contribute? Sorry, not doing it. I definitely could, but why would I need to? Really, think about it. What's the deal with this? Is this culture of milking your tears getting any different than fake-fluencers of instagram? I honestly prefer authenticity. 
              Yes, I am eating lately only cheap protein shakes. Am i panicking? Not really, considering I'm on a PSMF diet, it kinds of has a silver lining. 
              Yes, I'm 7 days to bankrupcy. Am I panicking? Not really either, I've reached a point that's so so so deeply low at this stage of poverty that I no longer feel anxious about it, it is what it is. Will any panic or anxiety help me get through this? Not really. It might drive some donations out of people identifying with oneself, but at the expense of not finding a solution but being paralysed by feelings. 
              </p>
              <p className="text-lg">
              I choose not to feel. I choose focusing my attention span in finding a solution, not on living on donations. I want THIS to end. 
              </p>
              <p className="text-lg">
              Sorry, I'm not going to cry, donate if you can, don't if you need me to fuel your clicking a few buttons, with crippling description of paralysing anxiety. I'm not going to do that. 
            </p>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-blue-700 dark:text-white">
                Donations Raised
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-white">
                {totalEuros}€ of 1500€
              </span>
            </div>
            <div className="w-full bg-gray-400 rounded-full dark:bg-gray-700">
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: currentPercentageString }}
              >
                {" "}
                {currentPercentage.toFixed(2)}%
              </div>
            </div>
            <p>Updated: 23th October 2023</p>
            <div className="">
              <table className="w-full flex flex-row flex-nowrap sm:bg-white rounded-lg  sm:shadow-lg my-5">
                <thead className="custom-text-black">
                  {providers.map((provider) => (
                    <tr className="custom-bg-gray-100 flex flex-col flex-nowrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0" key={provider.name}>
                      <th className="p-3 text-left">Provider</th>
                      <th className="p-3 text-left">Link</th>
                      <th className="p-3 text-left">Observations</th>
                    </tr>
                  ))}
                </thead>
                <tbody className="flex-1 sm:flex-none">
                  {providers.map((provider) => (
                    <tr className="flex flex-col flex-nowrap sm:table-row mb-2 sm:mb-0" key={provider.name}>
                      <td className="custom-bg-white border-grey-900 border p-3">
                        <div className="block md:hidden">{provider.name}</div>
                        <div className="hidden md:block">
                          <Image
                            src={provider.logoSrc}
                            className="bg-white"
                            width={200}
                            height={200}
                            alt={provider.name}
                          />
                        </div>
                      </td>
                      <td className="custom-bg-white group border-grey-900 border hover:bg-gray-100 p-3 ">
                        <Link
                          className="font-bold group-hover:text-red-600"
                          href={provider.link}
                        >
                          {provider.linkCaption}
                        </Link>
                      </td>
                      <td className="custom-bg-white border-grey-900 border p-3 text-red-400  ">
                        {provider.observations}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h1 id="useStripe" className="text-3xl font-bold">
              Donate now by clicking on your currency symbol
            </h1>
            <Currencies />
            <h1 className="text-3xl font-bold">
              How's your donation used:
            </h1>

            <p className="text-lg">
              You donate = I jobseek. If I'm focused on how to get food, then I don't have enough brain space to do any job seeking. It is that simple. I don't have any rights to job seeker allowance or anything similar. Not in Spain (yes in the UK, but I'm not there nor would I need JSA if I were there).  
            </p>
            <p className="text-lg">
              My first concern is always a roof above my head, so I rather not eat while I reach my rent amount of 255€ per month + 10€ of internet + bills excl. 
            </p>
            <p className="text-lg">
              Whatever comes after that pays all other bills and THEN it starts to cover for food. 
            </p>
            <h1 className="text-3xl font-bold" id="thankYou">Thank you </h1>
            <p className="text-lg">
              To all those who have donated. For safety and privacy reasons I'm
              not going to disclose your names but for transparency and
              accountability here is the list.
            </p>
            <ul className="list-disc px-8 space-y-2">
              {donations.map((donation) => (
                <li className="list-item" key={donation.amount * donation.euros}>
                  {donation.initial +
                    ": " +
                    donation.symbol +
                    donation.amount +
                    " (" +
                    donation.euros +
                    "€) using " +
                    donation.provider + getObservations(donation)}
                </li>
              ))}

              <li className="list-item">
                <span className="font-bold">Total: </span>
                {totalEuros}€ of 1500€ needed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
