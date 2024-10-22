import React from "react";
import { SectionInt } from "../types/types";

const Section: React.FC<SectionInt> = ({ title, children, ...props }) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
