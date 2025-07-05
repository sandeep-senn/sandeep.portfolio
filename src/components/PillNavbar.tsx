"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { name: "Home", path: "/z" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function PillNavbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-6  left-1/2 -translate-x-1/2 z-50 bg-white/20 border border-white/20 rounded-full px-6 py-4 flex gap-2 items-center text-blue-600">
      {routes.map((route) => (
        <Link
          key={route.path}
          href={route.path}
          className={`px-4 py-2 rounded-full font-medium transition-all duration-200 hover:bg-white/50 hover:text-black ${
            pathname === route.path ? "bg-white/10 text-blue-400" : ""
          }`}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
}
