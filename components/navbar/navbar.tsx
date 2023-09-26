import Link from "next/link";
export default function Navbar() {
  return (
    <header>
      <nav className="relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
        <p>Hi Barbie</p>
        <ul className="flex flex-row">
          <Link href="/">
            <li className="h1-bold">Home</li>
          </Link>
          <Link href={{ pathname: "/search", query: { keyword: "this way" } }}>
            <li className="h1-bold">path</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
