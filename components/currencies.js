import Link from "next/link";

export default function Currencies() {
  return (
    <div class="flex justify-center space-x-8">
      <div class="flex flex-col items-center">
        <Link
          class="text-5xl font-bold hover:text-red-600"
          href="https://donate.stripe.com/fZedTZ3Y47vjfyUaEE"
        >
          $
        </Link>
        <p class="text-xs text-gray-500">USD</p>
      </div>
      <div class="flex flex-col items-center">
        <Link
          class="text-5xl font-bold hover:text-red-600"
          href="https://donate.stripe.com/eVa03966ceXLfyU9AB"
        >
          €
        </Link>
        <p class="text-xs text-gray-500">EUR</p>
      </div>
      <div class="flex flex-col items-center">
        <Link
          class="text-5xl font-bold hover:text-red-600"
          href="https://donate.stripe.com/dR69DJ3Y4dTHbiE146"
        >
          £
        </Link>
        <p class="text-xs text-gray-500">GBP</p>
      </div>
      <div class="flex flex-col items-center">
        <Link
          class="text-5xl font-bold hover:text-red-600"
          href="https://donate.stripe.com/4gw6rx8ek3f3gCY5kn"
        >
          $
        </Link>
        <p class="text-xs text-gray-500">AUD</p>
      </div>
      <div class="flex flex-col items-center">
        <Link
          class="text-5xl font-bold hover:text-red-600"
          href="https://donate.stripe.com/14k7vB9iog1PcmI6os"
        >
          ¥
        </Link>
        <p class="text-xs text-gray-500">JPY</p>
      </div>
    </div>
  );
}
