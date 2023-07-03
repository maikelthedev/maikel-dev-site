import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  XMarkIcon,
  CloudArrowUpIcon,
  ComputerDesktopIcon,
  CodeBracketSquareIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PlayCircleIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/20/solid";
import {
  LockClosedIcon,
  ServerIcon,
  LinkIcon,
} from "@heroicons/react/20/solid";
const features = [
  {
    name: "Bollocks 1",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Bollocks 2",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Bollocks 3",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Bollocks 4",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];


function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5"
          onClick={() => setMobileMenuOpen(false)}>
            <span className="sr-only">Maikel OÜ</span>
            <img className="h-8 w-auto hover:scale-150 duration-200" src="/NOTHING.png" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <Link
            href="/services"
            className="text-sm font-semibold leading-6 text-indigo-900 hover:bg-indigo-700 hover:text-white hover:border-indigo-700 hover:border-solid hover:border-2 border-2 border-white duration-200 hover:rounded-lg p-1"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="text-sm font-semibold leading-6 text-indigo-900 hover:bg-indigo-700 hover:text-white hover:border-indigo-700 hover:border-solid hover:border-2 border-2 border-white duration-200 hover:rounded-lg p-1"
          >
            Portfolio
          </Link>

          <Link
            href="/testimonials"
            className="text-sm font-semibold leading-6 text-indigo-900 hover:bg-indigo-700 hover:text-white hover:border-indigo-700 hover:border-solid hover:border-2 border-2 border-white duration-200 hover:rounded-lg p-1"
          >
            Testimonials
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="https://matrix.to/#/@maikelthedev:matrix.org"
            target="_blank"
            className="text-sm font-semibold leading-6 text-indigo-900 hover:bg-indigo-700 hover:text-white hover:border-indigo-700 hover:border-solid hover:border-2 border-2 border-white duration-200 hover:rounded-lg p-1"
          >
            Contact <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Maikel OÜ</span>
              <img className="h-8 w-auto hover:bg-indigo-50" src="/NOTHING.png" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 hover:bg-indigo-50 rounded-full" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-indigo-900 hover:bg-indigo-50"
                >
                  Services
                </Link>
                <Link
                  href="/portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-indigo-900 hover:bg-indigo-50"
                >
                  Portfolio
                </Link>
                <Link
                  href="/testimonials"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-indigo-900 hover:bg-indigo-50"
                >
                  Testimonials
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="https://matrix.to/#/@maikelthedev:matrix.org"
                  target="_blank"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-indigo-900 hover:bg-indigo-50"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navigation;
