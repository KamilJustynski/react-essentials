import React from "react";

export interface CoreConceptInt {
  image: string;
  title: string;
  description: string;
}

export interface TapButtonInt {
  children: string;
  onSelect: () => void;
  isSelected: boolean;
}

export interface ExamplesInt {
  components: buttonNameInt;
  jsx: buttonNameInt;
  props: buttonNameInt;
  state: buttonNameInt;
}

export interface buttonNameInt {
  title: string;
  description: string;
  code: string;
}

export interface SectionInt extends React.HTMLAttributes<HTMLElement> {
  title: string;
  children: React.ReactNode;
}

export interface TabsInt {
  children: React.ReactNode;
  buttons: React.ReactNode;
  ButtonsContainer?: React.ElementType;
}
