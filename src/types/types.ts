export interface CoreConceptInt {
  image: string;
  title: string;
  description: string;
}

export interface TapButtonInt {
  children: string;
  onSelect: () => void;
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
