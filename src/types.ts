export type IMoods = "default" | "fun" | "sad" | "moody" | "happy";

export type IStateModule<T = string> = {
  dialog: (count: number) => string;
  background: (count: number) => IMoods;
  characters: (count: number) => string;
  dialogColor:  string[];
  maxCount: number;
  forward: T;
}

export type IState<T extends string> = {
  [key in T]: IStateModule<T>
}