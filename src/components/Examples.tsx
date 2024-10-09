import { useState } from "react";
import { ExamplesInt } from "../types/types";
import { EXAMPLES } from "../data";
import { TapButton } from "./TapButton";

export const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState<keyof ExamplesInt | null>(
    null
  );
  const handleSelect = (selectedButton: keyof ExamplesInt) => {
    setSelectedTopic(selectedButton);
  };
  const selectedExample = selectedTopic ? EXAMPLES[selectedTopic] : null;

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {Object.keys(EXAMPLES).map((data) => (
          <TapButton
            onSelect={() => handleSelect(data as keyof ExamplesInt)}
            isSelected={selectedTopic === (data as keyof ExamplesInt)}
            key={data}
          >
            {data.charAt(0).toUpperCase() + data.slice(1)}
          </TapButton>
        ))}
      </menu>
      <div id="tab-content">
        {selectedExample ? (
          <>
            <h3>{selectedExample.title}</h3>
            <p>{selectedExample.description}</p>
            <pre>
              <code>{selectedExample.code}</code>
            </pre>
          </>
        ) : (
          <p>Please select a topic.</p>
        )}
      </div>
    </section>
  );
};
