import { Fragment } from "react";
import Link from "next/link";
import Hero from "@/components/hero";
import { headers } from "@/data/headers";
import Currencies from "@/components/currencies";
import Image from "next/image";
import { providers } from "@/data/currencies";
import Head from "next/head";

const title = "Donations to Maikel";
const excerpt = "Donations to Maikel to keep the light on";
const image = "donations.webp";
const donations = [
  { initial: "K", symbol: "$", amount: 25, euros: 22.83, provider: "Stripe" },
  { initial: "Z", symbol: "$", amount: 20, euros: 18.26, provider: "Stripe" },
  {
    initial: "P",
    symbol: "AU$",
    amount: 100,
    euros: 58.25,
    provider: "Stripe",
  },
  { initial: "B", symbol: "$", amount: 30, euros: 27.92, provider: "Stripe" },
  { initial: "A", symbol: "$", amount: 70, euros: 65.26, provider: "Stripe" },
  { initial: "J", symbol: "€", amount: 150, euros: 150, provider: "PayPal" },
  { initial: "J", symbol: "€", amount: 120, euros: 120, provider: "PayPal" },
  { initial: "L", symbol: "€", amount: 22.84, euros: 22.84, provider: "PayPal" },
  { initial: "S", symbol: "£", amount: 250, euros: 290.99, provider: "Monzo", observations: "as part of a job." },
  { initial: "S", symbol: "€", amount: 25, euros: 25, provider: "Stripe" },
  { initial: "K", symbol: "$", amount: 30, euros: 27.92, provider: "Stripe" },
  { initial: "C", symbol: "€", amount: 50, euros: 50, provider: "PayPal" },
  { initial: "S", symbol: "$", amount: 30, euros: 27.92, provider: "Stripe" }

];
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
              I'm at a very real risk of starvation and homelessness
            </h1>
            <p className="text-lg">
              I have less than 100€ left and no income after booking a place to stay for
              October (which cost me 450€ per month) and November. This aren't
              enough funds to cover food at all. Let alone any other expenses.
            </p>
            <p>By the end of this month <span className="font-bold">I will run out of funds to get food</span> that's the issue.</p>
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
            <p>Updated: 18th September 2023</p>
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
              Help me avoid starvation
            </h1>

            <p className="text-lg">

              When you donate you{" "}
              <span className="font-bold">very literally</span> get me from
              rationing my meals, to getting food. You get me from a constant
              never ending level of paralysis panic, to a better place where my
              attention isn't kidnapped by basic survival anxiety. You get me from thinking how to commit suicide, to wonder
              whether I should change my gym workout table from cutting to a
              bulking cycle. You get me from total paralysis to enough calm to
              figure new strategies to get clients and{" "}
              <span className="font-bold">a stable income.</span>
            </p>
            <h1 className="text-3xl font-bold">What is the actual plan: for this to be the final fundraise</h1>
            <p className="text-lg"> 
            There was some speak of a possible job by September, guess what? We are on September, <span className="underline">nothing came to fruition.</span> 
            Yet I was almost certain that it would.
            So plan B, <span className="font-bold">I intend for this to be the final fundraise I ever do </span>because they are
            horribly taxing and humiliating. I'm trying to buy enough time until the 1st of December. This matches with the time I booked
            the place in AirBnB. And if (and when) I manage to reach the needed amount of money and I'm out of risk, I'll focus on getting
            a McJob locally. Because I rather flip burgers, clean places, or do anything out of IT, than wait to desperation until I 
            run down the clock and see myself YET again, fighting to avoid starvation. <span className="font-bold">That is the plan</span> I
            might hate it but I hate fundraising more. 
            </p>
            <h1 className="text-3xl font-bold">How Your Donation Helps</h1>

            <p className="text-lg">
              The first sum up to 450€ will cover the extra month of rent that AirBnB hasn't charged me yet. 
              Why? There's no point in being able to feed myself if I live on the streets. Homelessness creates 
              much more complicated and bigger issues than lack of food. To reduce risk, the first thing is having a roof above my head. 

              Once the 450€ are reached, it covers foo and from there the expenses, in order below.  
            </p>

            <ul className="list-disc px-8 space-y-2">
              <li className="list-item"><span className="line-through">
                Pays rent (currently 450€ per month) of shared accommodation.
                Without a stable income I am limited to what I can find in
                AirBnB.</span> We've achieved rent until 1st of December. 
              </li>
              <li className="list-item">Food on table. ~300€ month</li> We have not achieved this. 
              <li className="list-item">Pays the gym. 39€</li>
              <li className="list-item">
                <span className="line-through">35€</span> 120€ (they saw activity so they reactivated it) of Xolo.io the accountants that keep Maikel OÜ alive.{" "}
              </li>
              <li className="list-item">
                25 GBP of my maxed-out Virgin credit card minimum payment
              </li>
              <li className="list-item">
                90 GBP of my maxed-out Monzo Flex loan
              </li>
              <li className="list-item">
                6€ of my Spanish mobile phone number and broadband
              </li>
              <li className="list-item">
                10 GBP to keep my British mobile phone number every 3 months
              </li>
            </ul>

            <p className="text-lg">
              Please note that none of the funds raised here are used for my
              business. Your donation goes directly to my personal bank
              accounts to support my immediate needs during this messed up time.
              It won't solve anything on the long-term, nor medium term, I'm
              fully transparent on what comes through on my toots on the fedi and here below  . I
              don't have the right to any benefits, here or in the UK nor access
              to any social services (except healthcare). I would fly blindly wherever I had a job
              if I had it secured. If it was up to me I'd be back in London, get
              a McJob and move on with life. But as you know I tried that in
              December 2022/January 2023, and all I did was to run out of time
              to find accommodation and get the credit card that bought me a few
              months extra since I've got an excellent credit report in the UK
              (and only there).
            </p>
            <p className="text-lg">
              I need <span className="font-bold">serious help </span>to get back
              on my feet. I need TO WORK. I know how to do the rest. Even just
              20 hours per week doing what I do, would make a gigantic
              difference, allow me to travel wherever there're more jobs. I only
              charge 20€ per hour, what else do I need to do, work for free? How
              low must I go to just get a steady income? It feel as if I'm
              asking something that doesn't exist. Aren't we suppose to be the
              never-jobless workforce? How's it even possible that I'm
              unemployed. Is it all about having the right contacts? How do I
              get them? What do I do while get them? Can I get them before the
              end of September?
            </p>
            <p className="text-lg">
              I don't see a way out. Help me. I need to be hired.
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
