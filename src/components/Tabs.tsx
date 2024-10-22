import React from "react";
import { TabsInt } from "../types/types";

const Tabs: React.FC<TabsInt> = ({
  children,
  buttons,
  ButtonsContainer = "menu",
}) => {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
