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

// const totalEuros = donations.reduce((accumulator, donation) => {
//   return accumulator + donation.euros;
// }, 0).toFixed(2);

const totalEuros = 0;
const neededAmount = 500
const currentPercentage = (totalEuros * 100) / neededAmount;
const currentPercentageString = currentPercentage + "%";

const getObservations = (donation) => {
  if (donation.observations) {
    return " " + donation.observations;
  } else {
    return "";
  }
};

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
            <h1 className="text-3xl font-bold">What is the issue?</h1>
            <p className="text-lg">
              I do have a job (finally) but getting to this stage has meant
              putting myself into a giant pile of debt. I owe Virgin MOney 2400
              GBP. Monzo 250 GBP (Monzo Flex) and unless I do something about
              it, another 250 GBP to Monzo in the shape of my account overdraft.
            </p>
            <p className="text-lg">
              Do not look for a sobbing story, this is just a matter of debt.
            </p>
            <p className="text-lg">
              All I need is to reach the end of December for everything to go
              back to normal, to do that I need to avoid dipping into my
              overdraft for that I think I only need 500€ as I've already paid
              December's rent.
            </p>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-blue-700 dark:text-white">
                Donations Raised
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-white">
                {totalEuros}€ of {neededAmount}€
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
            <p>Updated: 29th November 2023</p>
            <div className="">
              <table className="w-full flex flex-row flex-nowrap sm:bg-white rounded-lg  sm:shadow-lg my-5">
                <thead className="custom-text-black">
                  {providers.map((provider) => (
                    <tr
                      className="custom-bg-gray-100 flex flex-col flex-nowrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
                      key={provider.name}
                    >
                      <th className="p-3 text-left">Provider</th>
                      <th className="p-3 text-left">Link</th>
                      <th className="p-3 text-left">Observations</th>
                    </tr>
                  ))}
                </thead>
                <tbody className="flex-1 sm:flex-none">
                  {providers.map((provider) => (
                    <tr
                      className="flex flex-col flex-nowrap sm:table-row mb-2 sm:mb-0"
                      key={provider.name}
                    >
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
            <h1 className="text-3xl font-bold">How's your donation used:</h1>

            <p className="text-lg">
              Any funds go towards paying the bills of December first, then to
              cover for December's food. That's all. Otherwise it'll all be
              covered from my overdraft which is very pricey. No further fundraising should be needed after this since by the end of December I get my paycheque. 
            </p>
            {/* <h1 className="text-3xl font-bold" id="thankYou">
              Thank you{" "}
            </h1>
            <p className="text-lg">
              To all those who have donated. For safety and privacy reasons I'm
              not going to disclose your names but for transparency and
              accountability here is the list.
            </p>
            <ul className="list-disc px-8 space-y-2">
              {donations.map((donation) => (
                <li
                  className="list-item"
                  key={donation.amount * donation.euros}
                >
                  {donation.initial +
                    ": " +
                    donation.symbol +
                    donation.amount +
                    " (" +
                    donation.euros +
                    "€) using " +
                    donation.provider +
                    getObservations(donation)}
                </li>
              ))}

              <li className="list-item">
                <span className="font-bold">Total: </span>
                {totalEuros}€ of 1500€ needed.
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
