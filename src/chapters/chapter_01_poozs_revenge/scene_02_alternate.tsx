import { send as send$ } from 'xstate';

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
  id: 'c1s2alt',
  initial: 'init',
  context: initialContext,
  states: {
    init: {
      meta: (send: SendFn) => ({
        dialog: <Dialog onDone={() => {}} avatar={Pooz.default} text={["Hmmm... perhaps you knew I never put my dick away.", "Either way, I will be having my revenge."]} color={[Colors.lightPurple]} />
      }),
    },
  },
};

export default machine;