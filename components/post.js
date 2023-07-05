import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export function Post(props) {
  const { markdown } = props;
  const customRenderers = {
    h1(details) {
      return (
        <h1 className="text-4xl text-center pb-10 font-bold text-indigo-900">
          {" "}
          {details.children}{" "}
        </h1>
      );
    },
    h2(details) {
      return (
        <h2 className="text-3xl pb-5 font-bold text-indigo-900">
          {" "}
          {details.children}{" "}
        </h2>
      );
    },
    h3(details) {
      return (
        <h3 className="pb-5 text-2xl text-indigo-900"> {details.children} </h3>
      );
    },
    h4(details) {
      return (
        <h4 className="pb-5 text-xl text-indigo-900"> {details.children} </h4>
      );
    },
    h5(details) {
      return (
        <h5 className="pb-5 text-lg text-indigo-900"> {details.children} </h5>
      );
    },
    img(image) {
      return (
        <span className="flex items-center justify-center py-5">
          <Image
            className="w-full md:w-6/12"
            src={image.src}
            alt={image.alt}
            width={500}
            height={500}
          />
        </span>
      );
    },
    li(details) {
      return <li className=""> {details.children} </li>;
    },
    ul(details) {
      return (
        <ul className="pb-5 list-disc md:mx-20 mx-14"> {details.children} </ul>
      );
    },
    ol(details) {
      return (
        <ul className="pb-5 list-decimal md:mx-20 mx-14">
          {" "}
          {details.children}{" "}
        </ul>
      );
    },
    a(details) {
      return (
        <Link
          className="text-indigo-900 font-semibold"
          href={details.href}
          target="_blank"
        >
          {details.children}
        </Link>
      );
    },
    p(details) {
      return (
        <p className="pb-5 md:pb-10 mx-5 md:mx-10 text-lg">
          {" "}
          {details.children}{" "}
        </p>
      );
    },
  };
  return (
    <Fragment>
      <div className="p-6 md:mx-20">
        <ReactMarkdown components={customRenderers} remarkPlugins={[remarkGfm]}>
          {markdown}
        </ReactMarkdown>
      </div>
    </Fragment>
  );
}
