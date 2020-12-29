import { assign, send as send$ } from 'xstate';

import Colors from '../../components/Colors';
import Dialog from '../../components/Dialog'
import { Pooz, Mallen } from '../../characters'

type Context = {
  background: string;
  
}
const initialContext: Context = {
  background: 'fun',
};

type SendFn = typeof send$;

const machine = {
  id: 'c1s1',
  initial: 'init',
  context: initialContext,
  states: {
    init: {
      entry: [assign({ background: 'fun' })],
      meta: (send: SendFn) => ({
        dialog: <Dialog onDone={() => send({ type: 'NEXT' })} avatar={Pooz.default} text={["Hey there, I didn't see you come in.", "I should put my dick away."]} color={[Colors.lightPurple]} />
      }),
      on: { NEXT: 'init2' },
    },
    init2: {
      entry: [assign({ background: 'happy' })],
      meta: (send: SendFn) => ({
        dialog: <Dialog onDone={() => send({ type: 'NEXT' })} avatar={Pooz.default} text={["My name is Pooz, and I need your assistance"]} color={[Colors.lightPurple]} />,
      }),
      on: { NEXT: 'dragon' },
    },
    dragon: {
      entry: [assign({ background: 'sad' })],
      meta: (send: SendFn) => ({
        dialog: <Dialog onDone={() => send({ type: 'NEXT' })} avatar={Mallen.default} text={["Please don't make me assist.", "I'm just trying to finish Scott's game, please."]} color={[Colors.lightPurple]} />,
      }),
      on: { NEXT: 'veryWell1' },
    },
    veryWell1: {
      entry: [assign({ background: 'fun' })],
      meta: (send: SendFn) => ({
        dialog: <Dialog onDone={() => send({ type: 'NEXT' })} avatar={Pooz.default} text={["Very well."]} color={[Colors.lightPurple]} />,
      }),
      on: { NEXT: 'veryWell2' },
    },
    veryWell2: {
      entry: [assign({ background: 'happy' })],
      meta: (send: SendFn) => ({
        dialog: <Dialog onDone={() => send({ type: 'NEXT' })} avatar={Pooz.default} text={["I have a much better plan for you.", "Repeat after me:"]} color={[Colors.lightPurple]} />
      }),
      on: { NEXT: 'veryWell3' },
    },
    veryWell3: {
      entry: [assign({ background: 'fun' })],
      meta: (send: SendFn) => ({
        dialog: <Dialog onDone={() => send({ type: 'NEXT' })} avatar={Pooz.default} text={["Dejuiui."]} color={[Colors.lightPurple]} />,
      }),
      on: { NEXT: 'no1' },
    },
    no1: {
      entry: [assign({ background: 'sad' })],
      meta: (send: SendFn) => ({
        dialog: <Dialog onDone={() => send({ type: 'NEXT' })} avatar={Mallen.default} text={["NOOOO."]} color={[Colors.lightPurple]} />,
      }),
      on: { NEXT: 'no2' },
    },
    no2: {
      meta: (send: SendFn) => ({
        dialog: <Dialog onDone={() => send({ type: 'NEXT' })} avatar={Mallen.default} text={["NOOOOOOOOOOOO....", "NOOOOOOOOOOOOOOOOOOOOO!!!"]} color={[Colors.lightPurple]} />,
      }),
      on: { NEXT: 'choice' },
    },
    choice: {
      meta: (send: SendFn) => ({
        dialog: <Dialog avatar={Mallen.default} text={["Do as Pooz says?"]} choices={[
          {text: 'Yes', action: () => send({ type: 'YES'})},
          {text: 'No', action: () => send({ type: 'NO'})},
        ]} color={[Colors.lightPurple]} />,
      }),
      on: { YES: 'yes', NO: 'no3' },
    },
    no3: {
      meta: (send: SendFn) => ({
        dialog: <Dialog onDone={() => send({ type: 'NO' })} avatar={Mallen.default} text={["I refuse."]} color={[Colors.lightPurple]} />,
      }),
    },
    yes: {
      meta: (send: SendFn) => ({
        dialog: <Dialog onDone={() => send({ type: 'YES' })} avatar={Mallen.happy} text={["Dejuiui."]} color={[Colors.lightPurple]} />,
      }),
    },
  },
};

export default machine;