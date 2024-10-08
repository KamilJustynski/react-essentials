import { useState } from "react";
import { Header } from "./components/Header/Header";
import { CoreConcept } from "./components/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { TapButton } from "./components/TapButton";
import { ExamplesInt } from "./types/types";

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState<keyof ExamplesInt | null>(
    "components"
  );
  const handleSelect = (selectedButton: keyof ExamplesInt) => {
    setSelectedTopic(selectedButton);
  };
  const selectedExample = selectedTopic ? EXAMPLES[selectedTopic] : null;

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((data) => (
              <div key={data.title}>
                <CoreConcept {...data} />
              </div>
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.keys(EXAMPLES).map((example) => {
              return (
                <TapButton
                  onSelect={() => handleSelect(example as keyof ExamplesInt)}
                  key={example}
                >
                  {example}
                </TapButton>
              );
            })}
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
              <p>Please select an example to see the details</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
