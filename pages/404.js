import Image from "next/image";

export default function NotFound() {
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
