import { send as send$, assign } from 'xstate';

import Colors from '../../components/Colors';
import Dialog from '../../components/Dialog'
import { Pooz } from '../../characters'

type Context = {
  background: string;
}
const initialContext: Context = {
  background: 'fun',
};

type SendFn = typeof send$;

const machine = {
  id: 'c1s2',
  initial: 'init',
  context: initialContext,
  states: {
    init: {
      entry: [assign({ background: 'fun' })],
      meta: (send: SendFn) => ({
        dialog: <Dialog onDone={() => {}} avatar={Pooz.default} text={["Hahahaha! You fool, I never put my dick away."]} color={[Colors.lightPurple]} />
      }),
    },
  },
};

export default machine;