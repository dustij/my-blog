import Link from "next/link";
import Breadcrumbs from "./breadcrumbs";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 h-[64px] w-full bg-white px-7 font-geist-sans sm:h-[72px]">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
            Dusti's Blog
          </h1>
        </Link>
        <Breadcrumbs />
      </div>
    </nav>
  );
}
