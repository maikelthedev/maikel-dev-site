import { Fragment } from "react";
import Link from "next/link";
import Hero from "@/components/hero";
import { headers } from "@/data/headers";

export default function Donations() {
  const header = headers.donations;
  return (
    <Fragment>
      <div className="custom-bg-white">
        <Hero header={header} />

        <div className="custom-text-black flex flex-col md:flex-row p-5 custom-bg-white md:mx-auto md:max-w-6xl items-center">
          <div class="px-8 py-4 space-y-6">
            <h1 class="text-3xl font-bold">Support My Journey</h1>
            <p class="text-lg">
              Your generosity makes a significant impact on my life. While I
              appreciate past donations on Ko-fi.com, I've found a more direct
              way to receive your support without delays or currency
              limitations.
            </p>
            <p class="text-lg">
              To ensure your donation reaches me quickly and without any
              currency constraints, I've set up a direct link to my personal
              Stripe account. You can contribute with your preferred currency in
              just a click:
            </p>

            <div class="flex justify-center space-x-8">
              <a
                class="text-5xl font-bold hover:text-red-600"
                href="https://donate.stripe.com/fZedTZ3Y47vjfyUaEE"
              >
                $
              </a>
              <a
                class="text-5xl font-bold hover:text-red-600"
                href="https://donate.stripe.com/eVa03966ceXLfyU9AB"
              >
                €
              </a>
              <a
                class="text-5xl font-bold hover:text-red-600"
                href="https://donate.stripe.com/dR69DJ3Y4dTHbiE146"
              >
                £
              </a>
            </div>

            <h1 class="text-3xl font-bold">How Your Donation Helps</h1>
            <p class="text-lg">
              Your support goes a long way in helping me navigate through this
              challenging time. I'm currently working hard to secure permanent
              clients and get back on my feet. Your contribution assists me in
              several ways:
            </p>

            <ul class="list-disc px-8 space-y-2">
              <li class="list-item">
                Meeting Basic Needs: Your donation ensures I have food on my
                table and covers my monthly rent, which enables me to focus on
                finding stable work opportunities.
              </li>
              <li class="list-item">
                Maintaining Well-being: With your support, I can afford my gym
                membership, which plays a vital role in managing stress and
                staying positive throughout this journey.
              </li>
              <li class="list-item">
                Essential Expenses: Your donation also covers monthly utilities
                and other unavoidable costs, like my Estonian accountants,
                necessary for my business's legal structure.
              </li>
            </ul>

            <p class="text-lg">
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
