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
    name: "Stripe",
    logoSrc: "/stripe.webp",
    link: "#useStripe",
    linkCaption: "Below on this page",
    observations: "Easiest Worldwide",
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
    name: "PayPal",
    logoSrc: "/paypal.webp",
    link: "https://paypal.me/maikelthedev",
    linkCaption: "paypal.me/maikelthedev",
    observations: "Convenient if you have an account",
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
  {
    name: "Bizum",
    logoSrc: "/bizum.webp",
    link: "https://bizum.es/",
    linkCaption: "Use +34 635 850 980 as payment destination",
    observations: "Easiest for anyone within Spain",
  },
];

export const donations = [
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
  {
    initial: "L",
    symbol: "€",
    amount: 22.84,
    euros: 22.84,
    provider: "PayPal",
  },
  {
    initial: "S",
    symbol: "£",
    amount: 250,
    euros: 290.99,
    provider: "Monzo",
    observations: "as part of a job.",
  },
  { initial: "S", symbol: "€", amount: 25, euros: 25, provider: "Stripe" },
  { initial: "K", symbol: "$", amount: 30, euros: 27.92, provider: "Stripe" },
  { initial: "C", symbol: "€", amount: 50, euros: 50, provider: "PayPal" },
  { initial: "S", symbol: "$", amount: 30, euros: 27.92, provider: "Stripe" },
  {
    initial: "S",
    symbol: "€",
    amount: 46.33,
    euros: 46.33,
    provider: "Revolut",
  },
  { initial: "J", symbol: "€", amount: 100, euros: 100, provider: "Bizum" },
  { initial: "A", symbol: "€", amount: 20, euros: 20, provider: "PayPal" },
  { initial: "B", symbol: "$", amount: 50, euros: 44.64, provider: "Stripe" }, 
  { initial: "S", symbol: "€", amount: 25, euros: 25, provider: "PayPal" },
  { initial: "M", symbol: "€", amount: 50, euros: 50, provider: "PayPal" },
  { initial: "M", symbol: "€", amount: 25, euros: 25, provider: "Stripe" },
  { initial: "D", symbol: "€", amount: 500, euros: 500, provider: "Transfer" }
];
