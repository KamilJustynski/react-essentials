import { Header } from "./components/Header";
import { CoreConcept } from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((data) => (
              <CoreConcept {...data} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
