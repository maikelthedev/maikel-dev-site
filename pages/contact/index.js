import { useState, Fragment } from "react";
import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";
import { socials } from "@/data/socials";
import { headers } from "@/data/headers";

function Contact() {
  let sendLabel = "Send";
  const [isSendEnabled, enableSend] = useState(true);
  const [isSendingShown, showIsSending] = useState(false);
  const [isSentShown, showIsSent] = useState(false);
  const header = headers.contact

  async function handleSubmit(event) {
    event.preventDefault();
    enableSend(false);
    showIsSending(true);
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
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
      <Hero header={header} />

      <div className="flex flex-col md:flex-row p-5 bg-white md:mx-auto md:max-w-6xl">
        <div className="w-full md:w-8/12 md:p-10 p-5 space-y-5">
          <h1 className="text-2xl font-bold">Contact Me</h1>
          <p className="text-md">
            There are multiple ways to contact me, you can use the form on this
            page so I receive an email with your message, I check my email
            several times per day. Or you can use any of the social media links
            below or to get an instant response, in case it is{" "}
            <span className="font-bold">absolutely urgent,</span> use my Matrix
            account.
          </p>
          <p className="text-md">
            If you use Mastodon or any Fediverse flavour (I use Calckey), you
            can find me as{" "}
            <span className="font-bold">@maikel@fedi.maikel.dev</span>
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
        <div className="flex flex-col">
          <h1 className="md:invisible text-2xl mx-5 font-bold mb-5">
            Contact Form
          </h1>
          <form
            onSubmit={handleSubmit}
            method="post"
            className="bg-white shadow-2xl rounded-lg px-8 w-full pt-6 pb-8"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
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
    </Fragment>
  );
}

export default Contact;
