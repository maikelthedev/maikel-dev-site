import Image from "next/image";

export default function NotFound() {
  // Using Tailwind CSS return a centered image of culkin.jpg with the text "404 - Page Not Found" and the image inside a circle frame.
  // The image should be 300px wide and 300px tall. The text should be 2rem in size and bold.
  // Separate slightly the text from the image and make only the 404 bold, the rest of the text should be normal.
  // The text should be centered horizontally and vertically.
  // The image should be centered horizontally and vertically.
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <div className="mt-16 flex flex-col items-center">
          <Image
            src="/culkin.jpg"
            className="rounded-full"
            height="300"
            width="300"
          />
        </div>
        <h1 className="text-2xl font-bold mt-8">Error 404</h1>
        <p className="text-1xl">Page Not Found</p>
      </div>
    </div>
  );
}
