export type IMoods = "default" | "fun" | "sad" | "moody" | "happy";

export type IStateMeta = {
  dialog: (count: number) => string;
  background: (count: number) => IMoods;
  characters: (count: number) => string;
  dialogColor:  string[];
  maxCount: number;
}
