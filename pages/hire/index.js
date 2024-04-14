import { useState, Fragment } from "react";
import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";
import { socials } from "@/data/socials";
import { headers } from "@/data/headers";



function Hire() {
  let sendLabel = "Send";
  const [isSendEnabled, enableSend] = useState(true);
  const [isSendingShown, showIsSending] = useState(false);
  const [isSentShown, showIsSent] = useState(false);
  const header = headers.contact;

  async function handleSubmit(event) {
    event.preventDefault();
    enableSend(false);
    showIsSending(true);
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value
    };
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        showIsSending(false);
        showIsSent(true);
        setTimeout(() => {
          showIsSent(false);
          enableSend(true);
        }, 3000);
      });
  }

  return (
    <Fragment>
      <div className="custom-bg-white">
        <Hero header={header} />

        <div className="custom-text-black flex flex-col md:flex-row p-5 custom-bg-white md:mx-auto md:max-w-6xl items-center">
          <div className="w-full md:w-8/12 md:p-10 p-5 space-y-5">
            <h1 className="text-2xl font-bold">Hiring Me: How does it work?</h1>
            <p className="text-md">The entire process can be completed in under 30 minutes, so I can start working for you <span className="font-bold">today</span> </p>
            <p className="text-md">
              <span className="font-bold">Step 1: Send me a message using the form on this page. </span> 
              I'll get an email with your message and reply as soon as possible. If you're in a hurry, you can also chat with me instantly through Matrix. I always have Matrix open on my laptop and notifications enabled on my phone. You can be as detailed or as brief as you like, and if I have any questions, I'll ask you.
            </p>
            <p className="text-md">
              <span className="font-bold">Step 2: We'll sign a contract. </span> 
              No need to go anywhere, everything is done online with HelloSign. You'll be hiring me through my Estonian company, no matter where you are in the world. It's as easy as subscribing to Netflix. I'll send you a contract with all the details we've discussed, like my fees, weekly hours, tasks, payment method, and schedule. The contract will also include a non-disclosure agreement (NDA) to protect your information and allow you to freely share your project.
            </p>
            <p className="text-md">
              <span className="font-bold">Step 3: You'll pay a deposit. </span> 
              Every project or service requires a deposit, which will be deducted from the first payment. For example, if we agreed on a weekly payment of $800, the deposit might be $400, and the first payment will also be $400. The deposit is non-refundable and shows your commitment to the project. I can charge in EUR (default), GBP, or USD. The longer the payment schedule, the higher the deposit.
            </p>
            <p className="text-md">
              <span className="font-bold">Step 4: I'll start working. </span> 
              Once I receive the deposit, I'll begin working on your project. You'll also receive my phone number at this point. I'm always available on WhatsApp on my PC. We'll communicate through your preferred method, and keep each other updated along the way.
            </p>
            <h1 className="text-2xl font-bold">Contact Me</h1>
            <p className="text-md">
              There are multiple ways to contact me, you can use the form on
              this page so I receive an email with your message, I check my
              email several times per day. Or you can use any of the social
              media links below or to get an instant response, in case it is{" "}
              <span className="font-bold">absolutely urgent,</span> use my
              Matrix account.
            </p>
            <p className="text-md">
              If you use Mastodon, you
              can find me as{" "}
              <span className="font-bold">@maikel@vmst.io</span>
            </p>
            <p className="text-md">
              I do not regularly check my Linkedin account.
            </p>
            <h2 className="text-xl font-bold mt-5">Social Media</h2>
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
          <div className="w-full md:w-4/12 flex flex-col">
            <h1 className="md:invisible text-2xl mx-5 font-bold mb-5">
              Contact Form
            </h1>
            <form
              onSubmit={handleSubmit}
              method="post"
              className="custom-bg-white dark:shadow-white shadow-2xl rounded-lg px-8 w-full pt-6 pb-8"
            >
              <div className="mb-4">
                <label
                  className="block custom-text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="custom-bg-white shadow appearance-none border rounded w-full py-2 px-3 custom-text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block custom-text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="custom-bg-white shadow appearance-none border  rounded w-full py-2 px-3 custom-text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block custom-text-gray-700 text-sm font-bold mb-2 "
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="custom-bg-white shadow appearance-none border rounded w-full py-2 px-3 custom-text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  rows="10"
                  id="message"
                  placeholder="Message"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  hidden={!isSendEnabled}
                >
                  {sendLabel}
                </button>
                <div className="text-sm text-indigo-700 italic">
                  <p hidden={!isSendingShown}>Sending</p>
                  <p hidden={!isSentShown}>Sent</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Hire;
