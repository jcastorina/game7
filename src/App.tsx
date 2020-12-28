import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';

import store, { persistor } from './store';

import chapter1 from './chapters/chapter_01_poozs_revenge';

import Background from './components/Background';
import Colors from './components/Colors';
import Dialog from './components/Dialog';
import Screen from './components/Screen';

const appMachine = Machine({
  initial: 'init',
  states: {
    init: {
      on: {
        NEW: 'game',
        CONTINUE: 'game',
      }
    },
    continue: {},
    game: {},
  }
});

function App() {

  const [state, send] = useMachine(appMachine);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {(() => {
          switch (state.value) {
            case 'init':
              return (
                <Background background="happy">
                  <Dialog 
                    color={[Colors.lightPurple]} 
                    text={["Dale's Journey: Zero Horizon"]}
                    choices={[
                      { text: 'New Game', action: () => send('NEW') },
                      { text: 'Continue', action: () => send('CONTINUE') }
                    ]}
                  />
                </Background>
              )
            case 'continue':
            case 'new':
            case 'game':
              return (
                <Screen machine={chapter1} />
              )
            default:
              return null;
          }
        })()}
      </PersistGate>
    </Provider>
  );
}

export default App;
