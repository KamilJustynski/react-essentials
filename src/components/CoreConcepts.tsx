import Section from "./Section";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((data) => (
          <CoreConcept key={data.title} {...data} />
        ))}
      </ul>
    </Section>
  );
};
