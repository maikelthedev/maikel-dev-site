import { Fragment } from "react";
import Link from "next/link";

export default function Preview() {
  return (
    <Fragment>
      <div className="custom-bg-white">
        <div className="custom-text-black flex flex-col md:flex-row p-5 custom-bg-white md:mx-auto md:max-w-6xl items-center">
          <div className="px-8 py-4 space-y-6">
            <h1 className="text-3xl font-bold">
              This is a preview of a concept of a payment page
            </h1>
            <p className="text-lg">
              Don't go through these payments because they are active. I'm using
              Stripe and its customer portal for this. The widget below has been
              created directly in stripe.
              Ultimately once I get my business up and running I want to make it easy for clients to choose their packs/hours per week
            </p>
          </div>
        </div>
        <div className="bg-white">
          <div className="flex flex-col md:flex-row p-5 md:mx-auto md:max-w-6xl items-center">
            <div className="px-8 py-4 space-y-6">
              <h1 className="text-3xl font-bold">Packages</h1>
              <p className="text-lg">This bit of text is still outside Stripe control</p>
              <p className="text-lg">
                If you were already a client you could control all of this through <Link className="font-bold hover:text-red-600" href="https://billing.stripe.com/p/login/8wM4i3fawaEE7Je9AA" target="_blank">their customer portal. </Link>
              </p>
            </div>
          </div>
          <div className="p-10">
            <script
              async
              src="https://js.stripe.com/v3/pricing-table.js"
            ></script>
            <stripe-pricing-table
              pricing-table-id="prctbl_1Na2GGC0LFj1sWyoDx9zgxat"
              publishable-key="pk_live_QjNTULEFU7z65fw1pO4wZ5zG"
            ></stripe-pricing-table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
