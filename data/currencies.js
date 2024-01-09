export const currencies = [
  {
    denomination: "USD",
    symbol: "$",
    link: "https://donate.stripe.com/fZedTZ3Y47vjfyUaEE",
  },
  {
    denomination: "EUR",
    symbol: "€",
    link: "https://donate.stripe.com/eVa03966ceXLfyU9AB",
  },
  {
    denomination: "GBP",
    symbol: "£",
    link: "https://donate.stripe.com/dR69DJ3Y4dTHbiE146",
  },
  {
    denomination: "AUD",
    symbol: "$",
    link: "https://donate.stripe.com/4gw6rx8ek3f3gCY5kn",
  },
];

export const providers = [  
  {
    name: "PayPal",
    logoSrc: "/paypal.webp",
    link: "https://paypal.me/maikelthedev",
    linkCaption: "paypal.me/maikelthedev",
    observations: "Convenient if you have an account",
  },
  {
    name: "Wise",
    logoSrc: "/wise.webp",
    link: "https://wise.com/pay/me/miguelf622",
    linkCaption: "wise.com/pay/me/miguelf622",
    observations: "For those used to TransferWise",
  },
  {
    name: "Bizum",
    logoSrc: "/bizum.webp",
    link: "https://bizum.es/",
    linkCaption: "Use +34 635 850 980 as payment destination",
    observations: "Easiest for anyone within Spain",
  },
  {
    name: "Revolut",
    logoSrc: "/revolut.webp",
    link: "https://revolut.me/maikelthedev",
    linkCaption: "revolut.me/maikelthedev",
    observations: "Fastest within the EU",
  },
  {
    name: "Monzo",
    logoSrc: "/monzo.webp",
    link: "https://monzo.me/miguelfriasmosquea",
    linkCaption: "monzo.me/miguelfriasmosquea",
    observations: "Fastest for UK",
  },
  {
    name: "Stripe",
    logoSrc: "/stripe.webp",
    link: "#useStripe",
    linkCaption: "Below on this page",
    observations: "Easiest Worldwide",
  },
  {
    name: "LiberaPay",
    logoSrc: "/liberapay.webp",
    link: "https://liberapay.com/maikelthedev/",
    linkCaption: "liberapay.com/maikelthedev/",
    observations: "Recurring",
  },
  
  {
    name: "Ko-Fi",
    logoSrc: "/kofi.webp",
    link: "https://ko-fi.com/maikelthedev",
    linkCaption: "ko-fi.com/maikelthedev",
    observations: "Same as Stripe",
  },
  
];

export const donations = [
  { initial: "O.B.", symbol: "£", amount: 10, euros: 11.63, provider: "Monzo" },
  { initial: "N.B.", symbol: "$", amount: 20, euros: 18.32, provider: "Stripe" },
  { initial: "B.W.", symbol: "$", amount: 25, euros: 22.85, provider: "Stripe" },
  { initial: "M.Z.", symbol: "€", amount: 10, euros: 10, provider: "Stripe" }
];
