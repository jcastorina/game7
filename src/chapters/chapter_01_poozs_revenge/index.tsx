import { useState } from 'react';
import Colors from '../../components/Colors';

import { Pooz, Mallen } from '../../characters'
import { IStateModule, IState } from '../../types';

type IRunLevels = "init" | "dragon" | "veryWell" | "no";

const initState: IStateModule<IRunLevels> = {
  background: (count) => count === 2 ? 'happy' : 'fun',
  dialog: (count) => { return [
    "Hey there, I didn't see you come in.",
    "I should put my dick away.",
    "My name is Pooz, and I need your assistance"][count]},
  dialogColor: [Colors.lightPurple],
  characters: (_) => {
    return Pooz.default;
  },
  maxCount: 2,
  forward: "dragon",
};

const dragonState: IStateModule<IRunLevels> = {
  background: (_) => 'sad',
  dialog: (count) => ([
    "Please don't make me assist.",
    "I'm just trying to finish Scott's game, please."][count]),
  dialogColor: [Colors.lightPurple],
  characters: (_) => {
    return Mallen.default;
  },
  maxCount: 1,
  forward: "veryWell"
}; 

const veryWellState: IStateModule<IRunLevels> = {
  background: (count) => (count === 1 || count === 2) ? 'happy' : 'fun',
  dialog: (count) => { return [
    "Very well.",
    "I have a much better plan for you.",
    "Repeat after me:",
    "Dejuiui."][count]},
  dialogColor: [Colors.lightPurple],
  characters: (_) => {
    return Pooz.default;
  },
  maxCount: 3,
  forward: "no",
};

const noState: IStateModule<IRunLevels> = {
  background: (count) => { if(count === 2){
      return 'moody'
    } else if (count === 1) {
      return 'default';
    } else  {
      return 'sad'
    }
  },
  dialog: (count) => { return [
    "NOOOO.",
    "NOOOOOOOOOOOO....",
    "NOOOOOOOOOOOOOOOOOOOOO!!!",
    "Dejuiui."][count]},
  dialogColor: [Colors.lightPurple],
  characters: (count) => {
    if(count === 3){
      return Mallen.happy;
    } else {
      return Mallen.default;
    }
  },
  maxCount: 3,
  forward: "init",
};

export const state: IState<IRunLevels> = {
  "init": initState,
  "dragon": dragonState,
  "veryWell": veryWellState,
  "no": noState
}
