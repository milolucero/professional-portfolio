"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center flex-col">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/camilo-lucero.jpg"
              alt="Camilo portrait"
              width="300"
              height="300"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>

        <motion.div
          className="flex items-center justify-center rounded-md mt-3 relative overflow-hidden"
          initial={{ opacity: 0, y: -50, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "tween",
            delay: 0.1,
            duration: 0.3,
          }}
        >
          <div
            className="h-full w-full absolute -z-10 rounded-md"
            style={{
              background:
                "linear-gradient(118deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.6) 100%)",
            }}
          ></div>
          <motion.div
            className="pl-1 pr-1 inline-block"
            style={{ textShadow: "0 0 1px #ffffff" }}
            animate={{ y: [-24, 0, -12, 0, -8, 0, -4, 0, -2, 0] }}
            transition={{
              y: {
                delay: 0.4,
                duration: 1,
                ease: "easeOut",
              },
            }}
          >
            📍
          </motion.div>{" "}
          <p className="leading-0 text-sm font-medium pr-3 py-1">
            Winnipeg, Manitoba
          </p>
        </motion.div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl max-w-[45rem]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Camilo.</span>
        <br />
        I'm a <span className="font-bold">full-stack developer</span> who enjoys
        building <span className="italic">apps and web platforms</span> using{" "}
        <span className="underline">C# and React</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="@contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/camilo-lucero-resume.pdf"
          download={true}
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/milolucero/"
          target="_blank"
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/milolucero"
          target="_blank"
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
