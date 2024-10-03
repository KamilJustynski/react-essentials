import { Header } from "./components/Header/Header";
import { CoreConcept } from "./components/CoreConcept";
import { CORE_CONCEPTS, BUTTONS } from "./data";
import { TapButton } from "./components/TapButton";

const App = () => {
  const handleSelect = (selectedButton: string) => {
    console.log(selectedButton);
  };

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
            {BUTTONS.map((button) => (
              <TapButton onSelect={() => handleSelect(button)} key={button}>
                {button}
              </TapButton>
            ))}
          </menu>
        </section>
      </main>
    </div>
  );
};

export default App;
