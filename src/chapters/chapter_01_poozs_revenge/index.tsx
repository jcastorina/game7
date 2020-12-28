import { Machine } from 'xstate';
import scene01 from './scene_01';
import scene02 from './scene_02';
import scene02Alternate from './scene_02_alternate';

import { addOne } from './redux';
import store from '../../store';

function isComplete(id: string) {
  const completed = store.getState().chapter01.ids;
  return completed.includes(id);
}

const machine = Machine({
  id: 'chapter1',
  initial: 'unknown',
  states: {
    unknown: {
      on: {
        '': [
          { target: 'scene01', cond: () => !isComplete('scene01')},
          { target: 'scene02', cond: () => !isComplete('scene02')},
        ]
      },
    },
    scene01: {
      on: { 
        YES: {
          target: 'scene02',
          actions: () => {
            store.dispatch(addOne('scene01'));
          }
        },
        NO: {
          target: 'scene02Alternate',
          actions: () => {
            store.dispatch(addOne('scene01'));
          }
        },        
      }, 
      ...scene01
    },
    scene02: scene02,
    scene02Alternate: scene02Alternate,
  },
});

export default machine;