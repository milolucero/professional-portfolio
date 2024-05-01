"use client";

import React from "react";
import SectionHeading from "./section-heading";

import { awardsData } from "@/lib/data";
import Award from "@/components/award";
import { useSectionInView } from "@/lib/hooks";

export default function Awards() {
  const { ref } = useSectionInView("Awards");

  return (
    <section ref={ref} id="awards" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Awards & Honours</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {awardsData.map((award, index) => (
          <Award {...award} key={index} />
        ))}
      </div>
    </section>
  );
}
