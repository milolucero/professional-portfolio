import { personalDetails } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} {personalDetails.firstName}{" "}
        {personalDetails.lastName}. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
      <p className="text-xs mt-2 block">
        <Link
          className="link"
          href="https://github.com/milolucero/professional-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="inline-block opacity-70 text-sm mr-1" />
          View source on GitHub
        </Link>
      </p>
    </footer>
  );
}
