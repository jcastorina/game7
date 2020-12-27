import { useState } from 'react';
import { IStateModule, IState } from './types';

export function useMachine<T extends string>(state:  IState<T>): 
  [IStateModule<T>, React.Dispatch<React.SetStateAction<T>>] 
{
  const [runLevel, setRunLevel] = useState<T>("init" as  T);
  const state$ = state[runLevel];
  return [state$, setRunLevel];
}
