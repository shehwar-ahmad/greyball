import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 w-full flex-1 items-center justify-center h-full p-5">
      <h1 className="text-5xl font-bold">Welcome to GreyBall</h1>
      <p className="text-lg text-center">
        Visit our{" "}
        <Link href="/products" className="text-blue-500">
          Store
        </Link>
      </p>
    </div>
  );
}
