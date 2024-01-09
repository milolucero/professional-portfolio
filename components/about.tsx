"use client";

import Link from "next/link";
import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After a journey as a{" "}
        <span className="font-medium">Startup Entrepreneur</span>, I decided to
        pursue my passion for programming. I graduated with honours from a
        2.5-year{" "}
        <Link
          href="https://www.rrc.ca/explore/program/application-development-and-delivery/"
          className="link"
          target="_blank"
        >
          Business Information Technology
        </Link>{" "}
        program, where I learned{" "}
        <span className="font-medium">full-stack web development</span>. My
        coding experience is mainly on{" "}
        <span className="font-medium">JavaScript and C#</span>, and I have also
        worked with Java, Ruby, Python and PHP.{" "}
      </p>

      <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. I have a keen
        eye for{" "}
        <span className="font-medium">
          user interface design and user experience
        </span>
        . I am always looking to learn new technologies.
        {/* I am currently looking
        for a <span className="font-medium">full-time position</span> as a
        software developer. */}
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and listening to tech podcasts. I'm
        furthering my knowledge in{" "}
        <span className="font-medium">
          cybersecurity and cloud infrastructure
        </span>
        . I'm also learning how to play the piano.
      </p>
    </motion.section>
  );
}
