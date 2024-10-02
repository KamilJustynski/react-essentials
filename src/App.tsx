import reactImg from "./assets/react-core-concepts.png";
import React from "react";
import { CORE_CONCEPTS } from "./data";

const reactDescription = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

export const Header = () => {
  const description = reactDescription[getRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

interface CoreConceptInt {
  image: string;
  title: string;
  description: string;
}

export const CoreConcept: React.FC<CoreConceptInt> = ({
  image,
  title,
  description,
}) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((data) => (
              <CoreConcept
                title={data.title}
                description={data.description}
                image={data.image}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;