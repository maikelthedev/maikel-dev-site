import Link from "next/link";
import { currencies } from "@/data/currencies";

export default function Currencies() {
  return (
    <div class="flex justify-center space-x-8">
      {currencies.map((element) => (
        <div class="flex flex-col items-center">
          <Link
            class="text-5xl font-bold hover:text-red-600"
            href={element.link}
          >
            {element.symbol}
          </Link>
          <p class="text-xs text-gray-500">{element.denomination}</p>
        </div>
      ))}
    </div>
  );
}