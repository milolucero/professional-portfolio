import React from "react";
import SectionHeading from "./section-heading";
import { awardsData } from "@/lib/data";
import Award from "@/components/award";

export default function Awards() {
  return (
    <section className="mb-20 sm:mb-28">
      <SectionHeading>Awards & Honours</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {awardsData.map((award, index) => (
          <Award {...award} key={index} />
        ))}
      </div>
    </section>
  );
}
