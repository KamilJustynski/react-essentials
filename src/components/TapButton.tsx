import React from "react";
import { TapButtonInt } from "../types/types";

export const TapButton: React.FC<TapButtonInt> = ({ children, onSelect }) => {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};
