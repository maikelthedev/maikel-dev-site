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

            <h1 className="text-3xl font-bold  line-through">
              Support My Journey
            </h1>
            <p className="text-lg">THis isn't a journey, I'm not on a train</p>
            <h1 className="text-3xl font-bold">Help me get food</h1>
            <p className="text-lg line-through">
              Your generosity makes a significant impact on my life. While I
              appreciate past donations on Ko-fi.com, I've found a more direct
              way to receive your support without delays or currency
              limitations.
            </p>
            <p className="text-lg">
              So, you're seeing the crossed out text generated from chatGPT
              because I don't think an AI can convey any message better than me.
              When you donate you{" "}
              <span className="font-bold">very literally</span> get me from
              rationing my meals, to getting food. You get me from a constant
              never ending level of paralysis panic, to a better place where my
              attention isn't kidnapped by basic survival adrenalinergic
              worries. You get me from thinking how to commit suicide, to wonder
              whether I should change my gym workout table from cutting to a
              bulking cycle.
            </p>
            <p className="text-lg">
              Take every word I say here very literally because that's the
              reason I de-chatGPTfied this page, I want you to TRULY KNOW how
              bad things are right now
            </p>
            <p className="text-lg line-through">
              The immediate way to reach me right now is via Revolut.me, by
              using it you put the donation directly in the bank account I use.
              To use that
              <Link
                className="font-bold hover:text-red-600"
                href="https://revolut.me/maikelthedev"
              >
                {" "}
                click here.{" "}
              </Link>
              If that fails and you don't have Monzo, use Stripe below by
              clicking on your currency symbol.
            </p>
            <p className="text-lg">
              Another way to reach me instantly yet only in GBP is Monzo using
              this
              <Link
                className="font-bold hover:text-red-600"
                href="https://monzo.me/miguelfriasmosquea"
              >
                {" "}
                link
              </Link>
              . This is the way I'd recommend to anyone in the UK.
            </p>
            <p className="text-lg">
              The simplest (yet much slower) is a direct link to my personal
              Stripe account with all the currencies below. You can contribute
              with your preferred currency in just a click from anywhere in the
              world.
            </p>
            <Currencies />
            <p className="tex-md">
              You can also use LiberaPay
              <Link
                className="font-bold hover:text-red-600"
                href="https://liberapay.com/maikelthedev/"
              >
                {" "}
                here
              </Link>{" "}
              but it'll again take even longer to reach me.
            </p>
            <h1 className="text-3xl font-bold">How Your Donation Helps</h1>
            <p className="text-lg line-through">
              Your support goes a long way in helping me navigate through this
              challenging time. I'm currently working hard to secure permanent
              clients and get back on my feet. Your contribution assists me in
              several ways:
            </p>

            <p className="text-lg">
              We're not a boat, there's nothing to navigate. Your donation puts
              food on the table so that I can keep trying different ways to do
              that myself, is that simple. I've got a killer IT skillset but for
              some reason that escapes my understanding I am still jobless.
            </p>

            <ul className="list-disc px-8 space-y-2">
              <li className="list-item">
                <span className="line-through">
                  Meeting Basic Needs: Your donation ensures I have food on my
                  table and covers my monthly rent, which enables me to focus on
                  finding stable work opportunities.
                </span>{" "}
                Food on table. It doesn't cover rent. The fact it doesn't cover
                rent is why I'm in Triana and not in Amate (both in Seville)
                taking space on the flat of a friend who is on holidays. And the
                main reason for my sleepless nights as he comes back on the 3rd
                of September and I have no idea what to do but I'll have to
                leave before yet I have no idea where.
              </li>
              <li className="list-item">
                <span className="line-through">
                  Maintaining Well-being: With your support, I can afford my gym
                  membership, which plays a vital role in managing stress and
                  staying positive throughout this journey.
                </span>{" "}
                Pays the gym.
              </li>
              <li className="list-item">
                <span className="line-through">
                  Essential Expenses: Your donation also covers monthly
                  utilities and other unavoidable costs, like my Estonian
                  accountants, necessary for my business's legal structure.
                </span>
                35€ of Xolo.io, 40€ of the gym, 25 GBP of my Virgin credit card
                very minimum payment, 30GBP of my monzo Flex loan, both maxed
                out because I eat. 6€ of my Spanish phone number around 10 GBP
                every 3 months to maintain my British number (dual sim phone).
                That's literally it.
              </li>
            </ul>

            <p className="text-lg">
              Please note that none of the funds raised here are used for my
              business. Your donation goes directly to my personal Stripe
              account to support my immediate needs during this{" "}
              <span className="line-through">transitional phase.</span> messed
              up time. It won't solve anything on the long-term, nor medium
              term, I'm fully transparent on what comes through on my toots on
              the fedi. I don't have the right to any benefits, here or in the
              UK nor access to any social services. I would fly blindly wherever
              I had a job if I had it secured. If it was up to me I'd be back in
              London, get a McJob and move on with life. But as you know I tried
              that in December 2022/January 2023, and all I did was to run out
              of time to find accommodation.
            </p>
            <p className="text-lg">
              I need <span className="font-bold">serious help </span>to get back
              on my feet. I need TO WORK. I know how to do the rest. Even just
              20 hours per week doing what I do, would make a gigantic
              difference, allow me to travel wherever there're more jobs. I only
              charge 20€ per hour, what else do I need to do, work for free? How
              low must I go to just get a steady income? It feel as if I'm
              asking something that doesn't exist. Aren't we suppose to be the
              never-jobless workforce? How's it even possible that I'm unemployed.
              Is it all about having the right contacts? How do I get them? What do I do while get them? Can I get them before the 2nd of September?  
            </p>
            <p className="text-lg">
              I don't see a way out. Help me. I need to be hired. 
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
