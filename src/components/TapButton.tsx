import React from "react";
import { TapButtonInt } from "../types/types";

const TapButton: React.FC<TapButtonInt> = ({
  children,
  onSelect,
  isSelected,
}) => {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};

export default TapButton;
