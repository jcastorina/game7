import { IMoods } from './types';

type Character = {
  [key in IMoods]: string;
}

export const Pooz: Character = {
  default: "images/pooz.png",
  happy: "images/pooz.png",
  moody: "images/pooz.png",
  sad: "images/pooz.png",
  fun: "images/pooz.png",
};

export const Joey: Character = {
  default: "images/joey.png",
  happy: "images/pooz.png",
  moody: "images/pooz.png",
  sad: "images/pooz.png",
  fun: "images/pooz.png",
};

export const Dejinald: Character = {
  default: "images/dejinald.png",
  happy: "images/pooz.png",
  moody: "images/pooz.png",
  sad: "images/pooz.png",
  fun: "images/pooz.png",
};

export const Mallen: Character = {
  default: "images/mallen.png",
  happy: "images/mallen_happy.png",
  moody: "images/pooz.png",
  sad: "images/pooz.png",
  fun: "images/pooz.png",
};

export const Kairi: Character = {
  default: "images/kairi.png",
  happy: "images/pooz.png",
  moody: "images/pooz.png",
  sad: "images/pooz.png",
  fun: "images/pooz.png",
}

export const Scott: Character = {
  default: "images/scott.png",
  happy: "images/pooz.png",
  moody: "images/pooz.png",
  sad: "images/pooz.png",
  fun: "images/pooz.png",
}