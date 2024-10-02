import { CoreConceptInt } from "../types/types";

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
