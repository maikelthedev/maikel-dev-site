import { Fragment, useState } from "react";
import Link from "next/link";

export default function Testimonial(props) {
  const { testimonial } = props;
  const maxLength = 800;
  const isLonger = testimonial.content.length > maxLength;

  const [isExpanded, setIsExpanded] = useState(false);

  const expandedClicked = () => {
    setIsExpanded(true);
  };
  const shrinkClicked = () => {
    setIsExpanded(false);
  };

  const content = isLonger ? (
    <p className="custom-text-gray-800 mb-2">
      {!isExpanded
        ? testimonial.content.slice(0, maxLength) + "..."
        : testimonial.content + " "}
      {!isExpanded ? (
        <span
          onClick={expandedClicked}
          className="text-gray-600 font-bold hover:underline"
        >
          Read more
        </span>
      ) : (
        <span
          onClick={shrinkClicked}
          className="text-gray-600 font-bold hover:underline"
        >
          Read less
        </span>
      )}
    </p>
  ) : (
    <p className="custom-text-gray-800 mb-2">{testimonial.content}</p>
  );
  return (
    <Fragment>
      <div
        key={testimonial.id}
        className="w-full break-inside-avoid-column py-2"
      >
        <div className="custom-bg-white rounded shadow relative">
          <img
            src={testimonial.logo}
            alt="Company Logo"
            className="absolute top-6 right-6 h-8 w-8"
          />
          <div className="p-6">
            <Link href={testimonial.link}>
              <p className="text-gray-600 font-medium hover:underline">
                {testimonial.name}
              </p>
            </Link>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
            <div className="pt-2">{content}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
