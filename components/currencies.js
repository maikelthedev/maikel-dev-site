import Link from "next/link";
import { currencies } from "@/data/currencies";
import { Fragment } from "react";

export default function Currencies() {
  return (
    <Fragment>
      <div className="flex justify-center space-x-8">
        {currencies.map((element) => (
          <div className="flex flex-col items-center" key={element.denomination}>
            <Link
              className="text-5xl font-bold hover:text-red-600"
              href={element.link}
            >
              {element.symbol}
            </Link>
            <p className="text-xs text-gray-500">{element.denomination}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
