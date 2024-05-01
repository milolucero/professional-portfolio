"use client";

import { awardsData } from "@/lib/data";
import { motion } from "framer-motion";
import React from "react";

type AwardProps = (typeof awardsData)[number];

export default function Award({
  title,
  date,
  issuedBy,
  description,
}: AwardProps) {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <motion.article
      className="pt-4 px-8 pb-5 bg-gray-100 max-w-[33rem] border border-black/5 rounded-lg dark:text-white dark:bg-slate-800"
      key={title}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="font-semibold">{title}</h3>
      <h4 className="text-sm font-semibold text-gray-500">
        {issuedBy}
        {date ? ` · ${date}` : null}
      </h4>
      <p className="mt-2 text-gray-700 dark:text-white/80">{description}</p>
    </motion.article>
  );
}
