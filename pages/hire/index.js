import { useState } from "react";

function Hire() {
  let sendLabel = "Send";
  const [isSendEnabled, enableSend] = useState(true);
  const [isSendingShown, showIsSending] = useState(false);
  const [isSentShown, showIsSent] = useState(false);

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
            }, 3000)
      });
  }

  return (
    <div>
      <div className="flex bg-gray-100 justify-center items-center p-10">
        <form
          onSubmit={handleSubmit}
          method="post"
          className="bg-white shadow-2xl rounded-lg px-8 pt-6 pb-8  max-w-3xl"
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
  );
}

export default Hire;
