import { Machine } from 'xstate';

import Colors from '../../components/Colors';
import { Pooz, Mallen } from '../../characters'

export const machine = Machine({
  id: 'intro',
  initial: 'init',
  states: {
    init: {
      meta: {
        background: (count: number) => count === 2 ? 'happy' : 'fun',
        dialog: (count: number) => ([
          "Hey there, I didn't see you come in.",
          "I should put my dick away.",
          "My name is Pooz, and I need your assistance"
        ][count]),
        dialogColor: [Colors.lightPurple],
        characters: () => Pooz.default,
        maxCount: 2,
      },
      on: {
        NEXT: 'dragon',
      },
    },
    dragon: {
      meta: {
        background: () => 'sad',
        dialog: (count: number) => ([
          "Please don't make me assist.",
          "I'm just trying to finish Scott's game, please."
        ][count]),
        dialogColor: [Colors.lightPurple],
        characters: () => Mallen.default,
        maxCount: 1,
      },
      on: {
        NEXT: 'veryWell',
      },
    },
    veryWell: {
      meta: {
        background: (count: number) => (count === 1 || count === 2) ? 'happy' : 'fun',
        dialog: (count: number) => ([
          "Very well.",
          "I have a much better plan for you.",
          "Repeat after me:",
          "Dejuiui."
        ][count]),
        dialogColor: [Colors.lightPurple],
        characters: () => Pooz.default,
        maxCount: 3,
      },
      on: {
        NEXT: 'no',
      },
    },
    no: {
      meta: {
        background: (count: number) => {
          if(count === 2){
            return 'moody'
          } else if (count === 1) {
            return 'default';
          } else  {
            return 'sad'
          }
        },
        dialog: (count: number) => ([
          "NOOOO.",
          "NOOOOOOOOOOOO....",
          "NOOOOOOOOOOOOOOOOOOOOO!!!",
          "Dejuiui."
        ][count]),
        dialogColor: [Colors.lightPurple],
        characters: (count: number) => {
          if(count === 3){
            return Mallen.happy;
          } else {
            return Mallen.default;
          }
        },
        maxCount: 3,
      },
      on: {
        NEXT: 'init',
      },
    }
  },
});
