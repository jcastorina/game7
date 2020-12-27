import { Provider } from 'react-redux';
import store from './store';
import Screen from './components/Screen';

import { state } from './chapters/chapter_01_poozs_revenge'

function App() {
  return (
    <Provider store={store}>
      <Screen state={state} />
    </Provider>
  );
}

export default App;
