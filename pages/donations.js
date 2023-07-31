import { Fragment } from "react";
import Link from "next/link";
import Hero from "@/components/hero";
import { headers } from "@/data/headers";
import Currencies from "@/components/currencies";

export default function Donations() {
  const header = headers.donations;
  return (
    <Fragment>
      <div className="custom-bg-white">
        <Hero header={header} />

        <div className="custom-text-black flex flex-col md:flex-row p-5 custom-bg-white md:mx-auto md:max-w-6xl items-center">
          <div className="px-8 py-4 space-y-6">
            <div>
              <div className="custom-bg-gray-100 rounded-lg border border-gray-300 p-4">
                <p className="text-2xl font-bold text-center text-red-600">
                  TL;DR: Donate by clicking on your currency
                </p>
                <div className="pt-10 text-center">
                  <Currencies />
                </div>
              </div>
            </div>

            <h1 className="text-3xl font-bold">Support My Journey</h1>
            <p className="text-lg">
              Your generosity makes a significant impact on my life. While I
              appreciate past donations on Ko-fi.com, I've found a more direct
              way to receive your support without delays or currency
              limitations.
            </p>
            <p className="text-lg">
              The immediate way to reach me right now is via Revolut.me, by using it you put
              the donation directly in the bank account I use. To use that 
              <Link className="font-bold hover:text-red-600" href="https://revolut.me/maikelthedev"> click here. </Link>
               If that fails and you don't have Monzo, use Stripe below by clicking on your currency symbol. 
            </p>
            <p className="text-lg">
              Another way to reach me instantly yet only in GBP is Monzo using this 
              <Link className="font-bold hover:text-red-600" href="https://monzo.me/miguelfriasmosquea"> link</Link>.
              This is the way I'd recommend to anyone in the UK. 
            </p>
            <p className="text-lg">
              The simplest (yet much slower) is a direct link to my personal
              Stripe account with all the currencies below. You can contribute with your preferred currency in
              just a click from anywhere in the world.
            </p>
            <Currencies />
            <p className="tex-md">
              You can also use LiberaPay
              <Link
                className="font-bold hover:text-red-600"
                href="https://liberapay.com/maikelthedev/"
              > here 
              </Link>{" "}
              but it'll again take even longer to reach me.
            </p>
            <h1 className="text-3xl font-bold">How Your Donation Helps</h1>
            <p className="text-lg">
              Your support goes a long way in helping me navigate through this
              challenging time. I'm currently working hard to secure permanent
              clients and get back on my feet. Your contribution assists me in
              several ways:
            </p>

            <ul className="list-disc px-8 space-y-2">
              <li className="list-item">
                Meeting Basic Needs: Your donation ensures I have food on my
                table and covers my monthly rent, which enables me to focus on
                finding stable work opportunities.
              </li>
              <li className="list-item">
                Maintaining Well-being: With your support, I can afford my gym
                membership, which plays a vital role in managing stress and
                staying positive throughout this journey.
              </li>
              <li className="list-item">
                Essential Expenses: Your donation also covers monthly utilities
                and other unavoidable costs, like my Estonian accountants,
                necessary for my business's legal structure.
              </li>
            </ul>

            <p className="text-lg">
              Please note that none of the funds raised here are used for my
              business. Your donation goes directly to my personal Stripe
              account to support my immediate needs during this transitional
              phase.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
