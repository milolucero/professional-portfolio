"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import { projectsData } from "@/lib/data";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  videoUrl,
  demoUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      className="group mb-3 sm:mb-8 last:mb-0"
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <article className="bg-gray-100 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-slate-800 dark:hover:bg-slate-700">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <div className="flex text-nowrap gap-3">
              {videoUrl ? (
                <Link href={videoUrl} target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="text-2xl inline-block opacity-70 hover:opacity-100 hover:scale-110 cursor-pointer" />
                </Link>
              ) : null}
              {githubUrl ? (
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-xl inline-block opacity-70 hover:opacity-100 hover:scale-110 cursor-pointer" />
                </Link>
              ) : null}
              {demoUrl ? (
                <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <IoMdOpen className="text-xl inline-block opacity-70 hover:opacity-100 hover:scale-110 cursor-pointer" />
                </Link>
              ) : null}
            </div>
          </div>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-slate-900 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>

          <Image
            src={imageUrl}
            alt={description}
            quality={95}
            priority={true}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-40
            "
          />
        </div>
      </article>
    </motion.div>
  );
}
