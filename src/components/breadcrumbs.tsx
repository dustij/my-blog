"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const breadcrumbs = ["home", ...pathname.split("/").filter(Boolean)];

  return (
    <div className="hidden sm:block">
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;

        // Create the URL for the current crumb
        const href =
          index === 0 ? "/" : "/" + breadcrumbs.slice(1, index + 1).join("/");

        return (
          <span key={index}>
            {
              <Button variant="link"className="px-1">
                <Link href={href}>{crumb}</Link>
              </Button>
            }
            {index < breadcrumbs.length - 1 && " / "}
          </span>
        );
      })}
    </div>
  );
}
